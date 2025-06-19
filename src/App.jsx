import React from 'react'
import Navbar from './Components/Navbar'
import Activities from './Components/Activities'
import BottomNavbar from './BottomNavbar'
import BackgroundSlide from './Components/BackgroundSlide'
import { Routes, Route } from 'react-router-dom'
import AzMenu from './Pages/AzMenu'
import Me from './Pages/Me';
import OpenBet from './Pages/OpenBet';
import Games from './Pages/Games';
import Home from './Pages/Home';




const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <div className="max-w-[375px] w-full min-h-screen bg-white shadow-xl overflow-hidden">

        <Routes>

          <Route
          path='/' element={
            <>
                <Navbar/>
                <BackgroundSlide/>
                <Activities/>
            </>     
          }
          />

          <Route path='/'element={<Home/>} />
          <Route path='/AzMenu'element={<AzMenu/>} />
          <Route path='/Games'element={<Games/>} />
          <Route path='/OpenBet'element={<OpenBet/>} />
          <Route path='/Me' element={<Me/>} />
          <Route path='/AzMenu' element={<AzMenu/>} />
          </Routes>
           <BottomNavbar/>
      </div>
    </div>
  )
}

export default App
