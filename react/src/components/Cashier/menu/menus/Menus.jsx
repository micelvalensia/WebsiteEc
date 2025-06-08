import React from 'react'
import CardMenu from './CardMenu'

const Menus = () => {
  return (
    <div className="w-[100%] md:w-[75%] border rounded-2xl bg-white p-5">
        <h2 className='font-medium text-2xl mb-3 bg-white rounded-xl text-center border'>Our Dish</h2>
        <CardMenu />
    </div>
  )
}

export default Menus
