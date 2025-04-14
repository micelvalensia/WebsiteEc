import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import axios from "axios";
import Swal from "sweetalert2";
import { getFood } from "../../hooks/hooks";

const EditMakanan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    makanan: "",
    harga: "",
    gambar: "",
    kategori: ""
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    const getTheFood = async () => {
      try {
        const foods = await getFood(`http://localhost:8092/getfood/${id}`);
        setForm({
            makanan: foods.makanan,
            harga: foods.harga,
            gambar: foods.gambar,
            kategori: foods.kategori,
          })          
      } catch (error) {
        console.log(error);
      }
    };
    getTheFood();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "gambar") {
      setForm({ ...form, gambar: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("makanan", form.makanan);
    formData.append("harga", form.harga);
    formData.append("kategori", form.kategori);
    if (form.gambar instanceof File) {
      formData.append("gambar", form.gambar);
    }

    axios
      .post(`http://localhost:8092/update/${id}`, formData)
      .then(() => {
        Swal.fire({
          title: "Berhasil!",
          text: "Data makanan berhasil diperbarui.",
          icon: "success",
          timer: 3000,
        }).then(() => navigate("/admin/crud"));
      })
      .catch((err) => console.log(err));
  };

  return (
    <LayoutAdmin>
      <div className="w-full min-h-screen p-10">
        <h2 className="text-2xl font-semibold mb-5">Edit Makanan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Nama Makanan</label>
            <input
              type="text"
              name="makanan"
              value={form.makanan}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Harga</label>
            <input
              type="number"
              name="harga"
              value={form.harga}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Kategori</label>
            <select
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            >
              <option value="">-- Pilih Kategori --</option>
              <option value="Makanan">Makanan</option>
              <option value="Minuman">Minuman</option>
              <option value="Dessert">Penutup</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Gambar</label>
            <input
              type="file"
              name="gambar"
              accept="image/*"
              onChange={handleChange}
              className="border rounded w-full file:bg-slate-900 bg-white text-black file:text-white file:px-3 file:py-2"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 mt-2 object-cover rounded-md"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </LayoutAdmin>
  );
};

export default EditMakanan;
