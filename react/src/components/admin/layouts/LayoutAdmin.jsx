import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import TopBar from '../Topbar'

function LayoutAdmin({children}) {
  return (
    <>
    <div className='flex bg-[#f8f8f8]'>
      <Sidebar />
      <div className="flex flex-col w-[80%] ml-auto">
        <TopBar />
        <div className="pt-10">
          {children}
        </div>
      </div>
    </div>
    </>
  )
}

export default LayoutAdmin
