import React, { useEffect, useState } from "react";
import { getHistory } from "./function/Function";

function History() {
  const [list, setList] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    getHistory(setList);
  }, []);

  const handleDate = (e) => {
    const rawDate = e.target.value
    const date = new Date(rawDate);

    const formatted = date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
  
      setFormattedDate(formatted);
  }

  const filteredList = list.filter((item) => {
    if(formattedDate === ""){
        return list
    }else{ 
        const itemDate = item.create_at === formattedDate
        return itemDate
    }
  })

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-2xl">Payment History</h2>
        <div className="flex gap-5">
          <button 
          className="bg-blue-600 hover:bg-blue-800 p-1 px-3 rounded-xl text-white cursor-pointer"
          onClick={() => setFormattedDate("")}
          >All data</button>
          <input
            type="date"
            name="waktu"
            id="waktu"
            onChange={handleDate}
            className="border-2 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <hr className="mt-2" />
      <div className="container mx-auto mt-4 rounded-xl overflow-hidden shadow-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border-b">Nomor</th>
              <th className="px-4 py-2 border-b">Nama Customer</th>
              <th className="px-4 py-2 border-b">Total Belanja</th>
              <th className="px-4 py-2 border-b">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.length > 0 ? (
              filteredList.map((item, id) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">{(id += 1)}</td>
                  <td className="px-4 py-2">{item.customer}</td>
                  <td className="px-4 py-2">Rp{item.totalprice}</td>
                  <td className="px-4 py-2">{item.create_at}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                  Tidak ada data pembelian tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default History;
