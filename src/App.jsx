import React from 'react'
import Navbar from './Components/Navbar'
import Activities from './Components/Activities'
import BottomNavbar from './BottomNavbar'
import BackgroundSlide from './Components/BackgroundSlide'


const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <div className="max-w-[375px] w-full min-h-screen bg-white shadow-xl overflow-hidden">
     <Navbar/>
     <BackgroundSlide/>
     <Activities/>
     <BottomNavbar/>
      </div>
    </div>
  )
}

export default App
