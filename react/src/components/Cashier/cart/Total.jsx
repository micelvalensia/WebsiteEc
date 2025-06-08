import React, { useContext, useEffect, useState } from 'react';
import { createOrderan, money } from '../../admin/function/Function';
import { ListContext } from '../../context/MenuContext';
import Swal from 'sweetalert2';

const Total = () => {
  const { list } = useContext(ListContext);
  const [nama, setNama] = useState("");

  const hitungTotal = () => {
    const totalHarga = list.reduce((sum, obj) => sum + (obj.harga * obj.jumlah), 0);
    const pajak = totalHarga * 0.1;
    const totalSemua = totalHarga + pajak;

    return {
      total: money(totalHarga),
      pajak: money(pajak),
      totalSemua: money(totalSemua)
    };
  };

  const { total, pajak, totalSemua } = hitungTotal();
  
  // Fungsi untuk menghapus titik
const removeDots = (formattedMoney) => {
  return formattedMoney.replace(/\./g, ''); // Menghapus titik (.) dari nilai
};

// Fungsi untuk menampilkan di Swal.fire
const formatMoneyDisplay = (money) => {
  return money.toLocaleString('id-ID'); // Format angka dengan titik (misalnya 15000 => 15.000)
};

const handleConfirm = (e) => {
  e.preventDefault();

  if (list.length === 0) {
    Swal.fire({
      title: 'Keranjang Kosong!',
      text: 'Kamu belum memesan apapun. Silakan pilih makanan/minuman dulu.',
      icon: 'warning',
      confirmButtonText: 'Oke, siap!',
    });
    return;
  }

  // Format total, pajak, dan totalSemua untuk tampilan di Swal (dengan titik)
  const totalFormatted = formatMoneyDisplay(total);
  const pajakFormatted = formatMoneyDisplay(pajak);
  const totalSemuaFormatted = formatMoneyDisplay(totalSemua);

  Swal.fire({
    title: 'Konfirmasi Pesanan',
    html: `
      <div style="text-align: left; font-size: 14px; font-family: Arial, sans-serif; line-height: 1.5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 5px; font-weight: bold;">Nama Penerima:</td>
            <td style="padding: 5px; text-align: right;">${nama}</td>
          </tr>
          <tr>
            <td style="padding: 5px; font-weight: bold;">Jumlah Orderan:</td>
            <td style="padding: 5px; text-align: right;">${list.length}</td>
          </tr>
          <tr>
            <td style="padding: 5px; font-weight: bold;">Total Harga:</td>
            <td style="padding: 5px; text-align: right;">Rp${totalFormatted}</td>
          </tr>
          <tr>
            <td style="padding: 5px; font-weight: bold;">Pajak (10%):</td>
            <td style="padding: 5px; text-align: right;">Rp${pajakFormatted}</td>
          </tr>
          <tr>
            <td colspan="2" style="border-top: 1px solid #ddd;"></td>
          </tr>
          <tr>
            <td style="padding: 5px; font-size: 16px; font-weight: bold;">Total Bayar:</td>
            <td style="padding: 5px; text-align: right; font-size: 16px; font-weight: bold; color: #007BFF;">Rp${totalSemuaFormatted}</td>
          </tr>
        </table>
      </div>
    `,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: '<i class="fa fa-check"></i> Konfirmasi',
    cancelButtonText: '<i class="fa fa-times"></i> Batal',
  }).then((result) => {
    if (result.isConfirmed) {
      // Kirim data ke backend dengan menghapus titik
      const totalWithoutDots = removeDots(totalFormatted);
      const pajakWithoutDots = removeDots(pajakFormatted);
      const totalSemuaWithoutDots = removeDots(totalSemuaFormatted);

      // Kirim data yang sudah diformat (tanpa titik) ke backend
      createOrderan(nama, totalWithoutDots, list);
    }
  });
};

  
  return (
    <div className='border w-full bg-white md:w-[35%] lg:w-[25%] max-h-[300px]'>
      <form className="flex flex-col p-5" onSubmit={handleConfirm}>
        <h3 className='font-medium text-center text-lg'>Total Orderan</h3>
        <div className="mt-3 flex items-center gap-2">
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
            Nama:
          </label>
          <input
            className="appearance-none border-b rounded text-right font-bold w-full mb-3 text-xs px-3 py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama"
            type="text"
            placeholder="Nama"
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between">
          <h4 className='text-gray-700 text-sm font-bold mb-2'>Orderan:</h4>
          <h4 className='text-gray-700 text-sm font-bold mb-2'>{list.length}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className='text-gray-700 text-sm font-bold mb-2'>Harga:</h4>
          <h4 className='text-gray-700 text-sm font-bold mb-2'>Rp{total}</h4>
        </div>
        <div className="flex justify-between">
          <h4 className='text-gray-700 text-sm font-bold mb-2'>Pajak:</h4>
          <h4 className='text-gray-700 text-sm font-bold mb-2'>Rp{pajak}</h4>
        </div>
        <hr />
        <div className="flex justify-between mt-2">
          <h4 className='text-gray-700 text-sm font-bold mb-2'>Total:</h4>
          <h4 className='text-gray-700 text-sm font-bold mb-2 '>Rp{totalSemua}</h4>
        </div>

        <button
          type="submit"
          className={`text-md py-1 rounded-xl mt-5 cursor-pointer 
          ${list.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-800 text-white'}`}
          disabled={list.length === 0}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Total;
