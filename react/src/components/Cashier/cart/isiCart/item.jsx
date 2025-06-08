import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../../context/MenuContext';

const Item = ({ gambar, nama, harga }) => {
  const { list, setList } = useContext(ListContext);
  const itemData = list.find((item) => item.nama === nama);

  const [jumlah, setJumlah] = useState(itemData?.jumlah || 1);

  useEffect(() => {
    setJumlah(itemData?.jumlah || 1);
  }, [itemData]); // Update jumlah jika list berubah

  const handleJumlahChange = (e) => {
    let newJumlah = parseInt(e.target.value);

    if (isNaN(newJumlah) || newJumlah <= 0) {
      newJumlah = 1; // Kalau kosong atau kurang dari 1, reset ke 1
    }

    setJumlah(newJumlah);

    setList((prevList) =>
      prevList.map((item) =>
        item.nama === nama ? { ...item, jumlah: newJumlah } : item
      )
    );
  };

  const deleteList = (id) => {
    setList((prevList) => prevList.filter((res) => res.nama !== id));
  };

  return (
    <div className="mt-5 w-[90%] lg:w-[80%] mx-auto border rounded-xl">
      <div className="flex w-full relative">
        <span 
        className="absolute text-2xl left-[-7px] bg-slate-300 p-1 px-3 cursor-pointer rounded-xl text-red-600 top-[-11px]"
        onClick={() => deleteList(nama)}
        >&#10006;
        </span>
        <img
          src={gambar}
          alt={nama}
          className="w-[50%] md:w-[45%] lg:min-h-[180px] rounded-xl min-h-[130px]"
        />
        <div className="flex flex-col w-[50%] md:w-[55%] p-2">
          <h3 className="text-center font-medium lg:text-lg text-xs">{nama}</h3>
          <label htmlFor={`jumlah-${nama}`} className="text-xs pt-2 lg:pt-3 pl-3">
            Jumlah
          </label>
          <input
            type="number"
            value={jumlah}
            onChange={handleJumlahChange}
            className="w-[70%] p-1 px-3 mt-2 mx-auto lg:mt-5 border rounded-xl"
            name="jumlah"
            id={`jumlah-${nama}`}
            min="1"
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
