import React from 'react'
import KitchenNav from './KitchenNav'

function KitchenLayout({children}) {
  return (
    <>
      <KitchenNav />
      <div className="">
        {children}
      </div>
    </>
  )
}

export default KitchenLayout
