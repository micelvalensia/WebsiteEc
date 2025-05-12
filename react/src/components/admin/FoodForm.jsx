import React, { useState } from "react";

const FoodForm = ({ form, preview, handleChange, handleSubmit }) => {
  return (
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
  );
};

export default FoodForm;
