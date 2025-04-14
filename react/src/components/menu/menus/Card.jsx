import React, { useContext } from 'react';
import { ListContext } from '../../context/MenuContext';
import Swal from 'sweetalert2';
import { money } from '../../admin/function/Function';

const Card = ({ teks, gambar, harga }) => {
  const { list, setList } = useContext(ListContext);

  const handleAddToCart = (newItem) => {
    const alreadyInCart = list.some((item) => item.nama === newItem.nama);

    if (!alreadyInCart) {
      setList((prevList) => [...prevList, newItem]);
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Item sudah ada dalam keranjang',
        icon: 'error',
        confirmButtonText: 'Tutup',
      });
    }
  };

  const confirmMenu = () => {
    Swal.fire({
      title: 'Konfirmasi Pesanan',
      html: `
     <img src="http://localhost:8092/${gambar}" alt="${teks}" class="w-full h-[200px] rounded-xl object-cover mb-4" />
      <div class="bg-gray-50 p-6 rounded-xl shadow-md">
        <table class="w-full table-auto">
          <tr>
            <td class="py-3 px-2 font-semibold text-xs md:text-lg text-left">Nama menu:</td>
            <td class="py-3 px-2 text-right text-xs md:text-lg font-normal text-gray-700">${teks}</td>
          </tr>
          <tr>
            <td class="py-3 px-2 font-semibold text-xs md:text-lg text-left">Harga satuan:</td>
            <td class="py-3 px-2 text-right text-xs md:text-lg font-normal text-gray-700">Rp${money(harga)}</td>
          </tr>
          <tr>
            <td colspan="2" class="border-t border-gray-300"></td>
          </tr>
          <tr>
            <td class="py-3 px-2 font-semibold text-xs md:text-lg text-left">Jumlah pesanan:</td>
            <td class="py-3 px-2 text-right">
              <input id="totalPesananInput" type="number" value="1" class="text-right text-xs md:text-lg font-bold text-blue-500 border border-gray-300 rounded-lg p-2 w-16" />
            </td>
          </tr>
        </table>
      </div>
      `,
      showCancelButton: true,
      confirmButtonText: '<i class="fa fa-check"></i> Konfirmasi',
      cancelButtonText: '<i class="fa fa-times"></i> Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        let quantity = document.getElementById('totalPesananInput').value;
        
        if (!quantity || quantity <= 0) {
          quantity = 1;
        }

        const newItem = { nama: teks, gambar: `http://localhost:8092/${gambar}`, harga: Number(harga), jumlah: Number(quantity) };

        handleAddToCart(newItem);
      }
    });
  };

  return (
    <div className='w-full sm:w-[48%] lg:w-[20%] md:max-w-[170px] flex-auto flex flex-col p-3 rounded-lg shadow'>
      <img
        src={`http://localhost:8092/${gambar}`}
        alt={teks} 
        className="w-full h-48 object-cover border rounded" 
      />
      <h4 className='text-md font-medium text-center mt-2 flex-grow'>{teks}</h4>
      <div className="flex justify-between items-center mx-2 mt-3">
        <h4 className='text-xs flex-grow'>{`Rp${money(harga)}`}</h4>
        <button 
          className='text-[10px] rounded bg-blue-600 text-white p-1 px-3 cursor-pointer hover:bg-blue-800'
          onClick={confirmMenu}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
