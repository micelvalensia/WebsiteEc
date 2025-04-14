import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8092/check-auth', { withCredentials: true })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return isAuthenticated;
};

export const money = (uang) => {
  return uang.toLocaleString("id-ID")
}

export const createOrderan = async(nama, total, items) => {
  try {
    const when = new Date();
    const formattedDate = when.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    const order = axios.post("http://localhost:8092/order", {
      nama: nama,
      total: total,
      date: formattedDate,
      items: items
    })
    Swal.fire('Berhasil!', 'Pesanan telah dikonfirmasi.', 'success').then(() => {
      window.location.reload()
    });
  } catch (error) {
    Swal.fire('Gagal!', error.response?.data?.message || 'Terjadi kesalahan.', 'error');
    console.error(error);
  }
}

export const getHistory = async (callback) => {
  try {
    const history = await axios.get("http://localhost:8092/history")
    callback(history.data.data)
  } catch (error) {
    console.log(error)
  }
}