import React from 'react'
import Category from './Category'
import Listnya from './Listnya'

const Inform = () => {
  return (
    <div className="w-[100%] md:w-[35%] lg:w-[25%] rounded-2xl p-5">
        <Category />
        <Listnya />
    </div>
  )
}

export default Inform
