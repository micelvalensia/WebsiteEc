import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const money = (uang) => {
  return uang.toLocaleString("id-ID");
};

export const createOrderan = async (nama, list, total) => {
  try {
    const when = new Date();
    const formattedDate = when.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const response = await axios.post("http://localhost:8092/order", {
      namaPemesan: nama,
      orderan: list,
      total: total,
      date: formattedDate,
    });
    console.log("Sukses:", response.data);
    Swal.fire("Berhasil!", "Pesanan dikirim ke dapur!", "success");
  } catch (error) {
    console.error("Gagal:", error);
    Swal.fire("Error", "Gagal menyimpan pesanan!", "error");
  }
};
