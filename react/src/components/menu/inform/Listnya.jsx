import React, { useContext, useEffect, useState } from 'react'
import TrashIcon from './TrashIcon'
import { ListContext } from '../../context/MenuContext'

const Listnya = () => {
    const { list, setList } = useContext(ListContext)

    const deleteList = (id) => {
        setList((prevList) => prevList.filter((res) => res.nama !== id));
    };

  return (
        <div className="flex flex-col mt-5">
            <h2 className='font-medium text-xl bg-white text-center border rounded-xl'>List Cart</h2>
            {list.length > 0 ? list.map((res, i) => (
                <div className="flex w-full relative justify-between items-center mt-2" key={i}>
                    <p className='absolute -left-[8%] md:-left-[15%] lg:text-[16px] text-[12px]'>{res.jumlah}x</p>
                    <h3 className='lg:text-[16px] text-[12px]'>{res.nama}</h3>
                    <TrashIcon klik={() => deleteList(res.nama)}/>
                </div>
            )) : (
                <div className="hidden"></div>
            )}
        </div>
  )
}

export default Listnya
