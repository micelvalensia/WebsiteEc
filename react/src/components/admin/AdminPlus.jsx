import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { submitMenuForm } from "./api/add_menu";

function AdminPlus() {
  const [values, setValues] = useState({
    nama: "",
    harga: 0,
    type: "",
    gambar: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitMenuForm(values);
      Swal.fire({
        title: "Success!",
        text: "Menu baru berhasil ditambahkan",
        icon: "success",
      });
      navigate("/admin/crud");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Terjadi kesalahan saat mengupload menu.");
    }
  };

  return (
    <div className="w-full min-h-screen p-10">
      <div className="flex justify-between">
        <h2 className="font-medium text-2xl">Tambah Menu</h2>
      </div>
      <hr className="mt-2" />
      <div className="container mx-auto mt-2">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="makanan">Nama Makanan:</label>
            <input
              type="text"
              name="makanan"
              id="makanan"
              required
              onChange={(e) => setValues({ ...values, nama: e.target.value })}
              className="shadow px-4 py-1 text-lg border rounded-lg bg-white"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="harga">Harga Makanan:</label>
            <input
              type="text"
              name="harga"
              id="harga"
              required
              onChange={(e) => setValues({ ...values, harga: e.target.value })}
              className="shadow px-4 py-1 text-lg border rounded-lg bg-white"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="harga">Type Makanan:</label>
            <select
              name="harga"
              id="harga"
              className="border px-4 py-2 rounded-lg bg-white"
              value={values.type}
              onChange={(e) => setValues({ ...values, type: e.target.value })}
              required
            >
              <option value="">--SELECT VALUE--</option>
              <option value="makanan">Makanan</option>
              <option value="minuman">Minuman</option>
              <option value="penutup">Penutup</option>
            </select>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="gambar">Gambar Makanan:</label>
            <input
              type="file"
              name="gambar"
              id="gambar"
              required
              onChange={(e) =>
                setValues({ ...values, gambar: e.target.files[0] })
              }
              className="file:bg-slate-900 bg-white text-black file:text-white rounded-lg file:px-3 file:py-2 border"
            />
          </div>
          <button className="ml-auto mt-4 text-white px-4 cursor-pointer hover:bg-blue-800 hover:text-slate-100 py-2 bg-blue-600 rounded-xl">
            Konfirmasi
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPlus;
