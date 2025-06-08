import db from "../db/db.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const getFood = (req, res) => {
  const sql = "SELECT * FROM food";
  db.query(sql, [], (err, result) => {
    if (err) return res.json({ message: "Internal Server Error", error: err });

    res.json({ message: "Get Data Berhasil", data: result });
  });
};

const getOneFood = (req, res) => {
  const sql = "SELECT * FROM food WHERE id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.json({ data: result[0] });
  });
};

const userLogin = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const sql = "SELECT * FROM admin WHERE email = ?";
  db.query(sql, [email], (err, data) => {
    if (err) return res.status(500).json({ message: "Server error" });
    if (data.length === 0) return res.json({ message: "Email not found" });

    const hashedPassword = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");

    if (hashedPassword !== data[0].password) {
      return res.json({ message: "Password not match" });
    }

    const token = jwt.sign(
      { id: data[0].id, email: data[0].email, role: data[0].role },
      "jwt-secret-key",
      { expiresIn: "2d" }
    );

    res.cookie("token", token, { httpOnly: true });
    return res.json({ message: "Success", role: data[0].role });
  });
};

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token invalid" });
    req.user = decoded;
    next();
  });
};

const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

const addFood = async (req, res) => {
  const { nama, type, harga } = req.body;
  const { filename, path: imagePath } = req.file;
  const connection = db.promise();

  try {
    const queryFood =
      "INSERT INTO food (makanan, gambar, type, harga) VALUES (?, ?, ?, ?)";
    const [result] = await connection.execute(queryFood, [
      nama,
      imagePath,
      type,
      harga,
    ]);
    const resultId = result.insertId;

    await connection.commit();
    res.status(201).json({ message: "Data berhasil ditambah", resultId });
  } catch (error) {
    await connection.rollback();
    console.error("Error saat menambah data:", error);
    res
      .status(500)
      .json({ message: "Gagal membuat data", error: error.message });
  }
};

const deleteFood = async (req, res) => {
  const id = req.params.id;
  try {
    const queryDelete = "DELETE FROM food WHERE id = ?";
    const [deleteResult] = await db.promise().execute(queryDelete, [id]);
    res
      .status(201)
      .json({ message: "Data berhasil dihapus", data: deleteResult });
  } catch (error) {
    console.error("🔥 Error saat menghapus data:", error.message);
    res
      .status(500)
      .json({ message: "Gagal meghapus data", error: error.message });
  }
};

const createOrder = async (req, res) => {
  const { nama, total, date, items } = req.body;

  const connection = db.promise();

  try {
    await connection.beginTransaction();

    // Simpan order ke payment_history
    const queryOrder =
      "INSERT INTO payment_history (customer, totalprice, create_at) VALUES (?, ?, ?)";
    const [orderResult] = await connection.execute(queryOrder, [
      nama,
      total,
      date,
    ]);

    const orderId = orderResult.insertId;
    console.log("Order dibuat dengan ID:", orderId);

    if (!orderId) throw new Error("Gagal mendapatkan ID order");

    // Simpan items ke order_items
    const queryItems =
      "INSERT INTO order_items (payment_id, makanan, quantity) VALUES ?";
    const values = items.map((item) => [orderId, item.nama, item.jumlah]);

    await connection.query(queryItems, [values]);

    await connection.commit(); // Simpan transaksi ke database
    res.status(201).json({ message: "Order berhasil dibuat", orderId });
  } catch (error) {
    await connection.rollback(); // Batalkan transaksi jika ada error
    console.error("Error saat membuat order:", error);
    res
      .status(500)
      .json({ message: "Gagal membuat payment", error: error.message });
  }
};

const getHistory = async (req, res) => {
  const connection = db.promise();
  try {
    console.log("🔹 Masuk ke getHistory API");
    const query = "SELECT * FROM payment_history ORDER BY create_at DESC";
    const [rows] = await connection.execute(query);

    res.json({ message: "Berhasil ambil history", data: rows });
  } catch (error) {
    console.error("🔥 Error saat mengambil history:", error.message);
    res
      .status(500)
      .json({ message: "Gagal mengambil history", error: error.message });
  }
};

const updateFood = async (req, res) => {
  const { id } = req.params;
  const { makanan, harga, kategori } = req.body;
  const connection = db.promise();

  try {
    if (!makanan || !harga || !kategori) {
      return res.status(400).json({ message: "Semua field harus diisi." });
    }

    if (req.file) {
      const gambar = req.file.filename;
      const sql = `UPDATE food SET makanan = ?, harga = ?, type = ?, gambar = ? WHERE id = ?`;
      await connection.execute(sql, [makanan, harga, kategori, gambar, id]);
    } else {
      const sql = `UPDATE food SET makanan = ?, harga = ?, type = ? WHERE id = ?`;
      await connection.execute(sql, [makanan, harga, kategori, id]);
    }

    res.status(200).json({ message: "Data berhasil diperbarui" });
  } catch (error) {
    console.error("Error saat update data:", error);
    res
      .status(500)
      .json({ message: "Gagal memperbarui data", error: error.message });
  }
};

const getTopFoods = async (req, res) => {
  const connection = db.promise();

  try {
    const query = `
        SELECT 
          makanan, 
          SUM(quantity) AS total_terjual 
        FROM 
          order_items 
        GROUP BY 
          makanan 
        ORDER BY 
          total_terjual DESC 
        LIMIT 10
      `;

    const [rows] = await connection.execute(query);

    res
      .status(200)
      .json({ message: "Berhasil ambil top 10 makanan", data: rows });
  } catch (error) {
    console.error("🔥 Error saat ambil top makanan:", error.message);
    res
      .status(500)
      .json({ message: "Gagal ambil top makanan", error: error.message });
  }
};

const getBuyer = async (req, res) => {
  const connection = db.promise();

  try {
    const query = "SELECT * FROM payment_history";
    const [rows] = await connection.execute(query);
    res.status(200).json({ message: "Berhasil", data: rows });
  } catch (error) {
    console.error("🔥 Error:", error.message);
    res.status(500).json({ message: "Gagal", error: error.message });
  }
};

const getTotalIncome = async (req, res) => {
  try {
    const connection = db.promise();
    const [rows] = await connection.execute(
      "SELECT SUM(totalprice) AS total FROM payment_history"
    );

    res.json({ total: rows[0].total || 0 });
  } catch (error) {
    console.error("🔥 Error saat mengambil total income:", error.message);
    res
      .status(500)
      .json({ message: "Gagal mengambil total income", error: error.message });
  }
};

const getSalesByFoodType = async (req, res) => {
  const { type } = req.query; // Ambil parameter 'type' dari query string
  const connection = db.promise();

  try {
    // Query untuk mengambil data berdasarkan tipe makanan
    const query = `
        SELECT 
          f.makanan,  -- Nama makanan dari tabel food
          SUM(oi.quantity) AS total_quantity  -- Total quantity per makanan
        FROM 
          order_items oi
        JOIN 
          food f ON oi.makanan = f.makanan  -- Gabungkan order_items dengan food berdasarkan food_id
        WHERE 
          f.type = ?  -- Filter berdasarkan type makanan yang diterima dari query
        GROUP BY 
          f.makanan  -- Kelompokkan berdasarkan nama makanan
      `;

    // Eksekusi query dengan parameter 'type' yang diterima dari query string
    const [rows] = await connection.execute(query, [type]);
    console.log("Data Penjualan Berdasarkan Tipe: ", rows);
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("🔥 Error ambil data penjualan:", error.message);
    res
      .status(500)
      .json({ message: "Gagal ambil data penjualan", error: error.message });
  }
};

export {
  getFood,
  getOneFood,
  userLogin,
  verifyToken,
  addFood,
  deleteFood,
  createOrder,
  getHistory,
  updateFood,
  getTopFoods,
  getBuyer,
  getTotalIncome,
  getSalesByFoodType,
  authorizeRole,
};
