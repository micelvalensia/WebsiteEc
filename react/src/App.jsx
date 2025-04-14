import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ImageSlider from './components/home/img-slider/slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="w-full mt-3">
        <ImageSlider />
      </div>
    </>
  )
}

export default App
