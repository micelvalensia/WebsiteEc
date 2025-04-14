import React, { useContext } from 'react'
import Item from './item'
import { ListContext } from '../../context/MenuContext'

const IsiCart = () => {
  const { list } = useContext(ListContext)

  return (
    <div className='border w-full bg-white md:w-[65%] lg:w-[75%] min-h-[80svh]'>
        <div className="flex flex-col p-5">
            <h3 className='font-medium text-center text-lg'>Orderan Anda</h3>
            <div className="flex flex-col gap-5">
              {list.length > 0 ? (
                list.map((bp, i) => (
                  <Item key={i} gambar={bp.gambar} nama={bp.nama} />
                ))
              ) : (
                <h2 className='text-center mt-30'>Anda Belum Memesan Apapun</h2>
              )}
            </div>
        </div>
    </div>
  )
}

export default IsiCart
