import React from 'react'
import MyLayout from '../layouts/layout'

function NotFound() {
  return (
    <MyLayout active={''}>
        <div className="w-full h-[80vh] grid place-content-center">
            <h2 className='text-5xl'><span className='font-bold'>404</span> The Page you looking for is not exist</h2>
        </div>
    </MyLayout>
  )
}

export default NotFound
