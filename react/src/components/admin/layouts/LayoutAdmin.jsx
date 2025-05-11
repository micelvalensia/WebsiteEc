import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import TopBar from '../Topbar'
import { useEffect } from 'react'

function LayoutAdmin({children, activePage}) {
  return (
    <>
    <div className="grid grid-cols-[auto_1fr] bg-[#f8f8f8] min-h-screen">
      <Sidebar active={activePage} />
      <div className="flex flex-col w-full">
        <TopBar />
        <div>
          {children}
        </div>
      </div>
    </div>
    </>
  )
}

export default LayoutAdmin
