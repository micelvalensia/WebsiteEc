import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';

const Category = () => {
    const { type, setType } = useContext(MenuContext); // Ambil state dari Context

  return (
        <div className="flex flex-col">
            <h2 className='font-medium text-xl mb-2 bg-white border rounded-xl text-center'>Category</h2>
            <div className="flex gap-5">
                <input type="radio" name="kategori" id="makan" onChange={() => setType("makanan")} defaultChecked={type === "makanan"} />
                <label htmlFor="makan" className='cursor-pointer'>Makanan</label>
            </div>
            <div className="flex gap-5 mt-1">
                <input type="radio" name="kategori" id="minum" onChange={() => setType("minuman")} />
                <label htmlFor="minum" className='cursor-pointer'>Minuman</label>
            </div>
            <div className="flex gap-5 mt-1">
                <input type="radio" name="kategori" id="penutup" onChange={() => setType("penutup")} />
                <label htmlFor="penutup" className='cursor-pointer'>Penutup</label>
            </div>
        </div>
  )
}

export default Category
