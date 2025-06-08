import React, { useEffect } from "react";
import getList from "./api/fetchList";
import Button from "../button/button";
import { useState } from "react";
import Swal from "sweetalert2";
import { updateStatus } from "./api/updatestatus";

function KitchenContainerList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const listKitchen = await getList();
    setData(listKitchen);
  };

  useEffect(() => {
    fetchData();
  });

  const handleAction = (id, type) => {
    const isDone = type === "ready";
    Swal.fire({
      title: isDone ? "Yakin sudah selesai?" : "Batalkan pesanan ini?",
      icon: isDone ? "question" : "warning",
      showCancelButton: true,
      confirmButtonText: isDone ? "Selesai" : "Batalkan",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatus(id, type, fetchData);
        Swal.fire(
          isDone ? "Berhasil!" : "Dibatalkan!",
          isDone ? "Pesanan ditandai selesai." : "Pesanan dibatalkan.",
          isDone ? "success" : "info"
        );
      }
    });
  };

  return (
    <div className="w-full h-full">
      <div
        className={`bg-slate-900 w-[90%] mt-6 rounded-xl mx-auto ${data.length !== 0 ? "h-auto" : "h-96"} p-5`}
      >
        <h2 className="text-white font-bold text-xl">Pesanan Makanan</h2>
        <table className="w-full mt-5 text-white text-left gap-5 border-separate border-spacing-y-3">
          <tr>
            <th className="font-medium">No</th>
            <th className="font-medium">Customer</th>
            <th className="font-medium">Makanan</th>
            <th className="font-medium">Jumlah</th>
            <th className="font-medium">Status</th>
          </tr>
          {data.length !== 0 ? (
            data.map((items, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{items.customer}</td>
                <td>{items.makanan}</td>
                <td>{items.jumlah}</td>
                <td className="flex gap-3 items-center">
                  <Button
                    teks="Done"
                    warna="bg-green-600"
                    diKlik={() => handleAction(items.id, "ready")}
                  />
                  <Button
                    teks="Cancel"
                    warna="bg-red-600"
                    diKlik={() => handleAction(items.id, "cancel")}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Data Tidak DItemukan...</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default KitchenContainerList;
