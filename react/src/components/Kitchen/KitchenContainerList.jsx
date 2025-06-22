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
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
            <h2 className="text-white font-bold text-2xl tracking-tight">
              🍽️ Pesanan Makanan
            </h2>
            <p className="text-slate-300 mt-1">
              Kelola pesanan dapur dengan mudah
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {data.length !== 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-2 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                        No
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                        Makanan
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                        Jumlah
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.map((items, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="py-4 px-2">
                          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-slate-600">
                              {i + 1}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-semibold text-sm">
                                {items.customer.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {items.customer}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <span className="text-2xl mr-2">🍽️</span>
                            <span className="font-medium text-gray-800">
                              {items.makanan}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {items.jumlah}x
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Button
                              teks="✓ Done"
                              warna="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm"
                              diKlik={() => handleAction(items.id, "ready")}
                            />
                            <Button
                              teks="✕ Cancel"
                              warna="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm"
                              diKlik={() => handleAction(items.id, "cancel")}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Tidak Ada Pesanan
                </h3>
                <p className="text-gray-500">
                  Belum ada pesanan makanan yang perlu diproses saat ini.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitchenContainerList;
