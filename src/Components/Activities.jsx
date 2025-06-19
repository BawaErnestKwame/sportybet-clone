import React from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { GiAntibody } from "react-icons/gi";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';


const Activities = () => {
  return (
    <div className='px-4'>
    <div className=' w-full flex gap-4 text-sm  py-4'>
        <div className=" flex flex-col items-center justify-center text-sm">
            <AcUnitSharpIcon />
            <h1>All Sports</h1>
        </div>
        <div className="flex flex-col items-center justify-center text-xs">
           <LiveTvIcon />
            <h1>Live</h1>
        </div>

        <div className="flex flex-col items-center justify-center text-xs">
            <Groups2SharpIcon />
            <h1>Sporty Hero</h1>
        </div>

        <div className="flex flex-col items-center justify-center text-xs">
           <FlightTakeoffIcon/>
            <h1>Aviator</h1>
        </div>

        <div className="flex flex-col items-center justify-center text-xs">
           <SportsVolleyballIcon/>
            <h1>Virtual</h1>
        </div>

        <div className="flex flex-col items-center justify-center text-xs">
          <MoreHorizIcon/>
            <h1>More</h1>
        </div>

    </div>

<div className="flex overflow-x-auto gap-4 px-2 py-2 snap-x snap-mandatory scroll-hide ">
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-red-600 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">TODAY'S <br/>FOOTBALL</h1>
  </div>
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-violet-800 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">FOOTBALL IN<br/>NEXT 3<br/>HOURS</h1>
  </div>
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-green-800 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">FIFA CLUB <br/>WORLD CUP</h1>
  </div>
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-violet-950 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">CONCACAF<br/>GOLD CUP</h1>
  </div>
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-red-600 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">TODAY'S <br/>FOOTBALL</h1>
  </div>
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-violet-800 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">NBA</h1>
  </div>
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-green-800 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">ATP/WTA</h1>
  </div>
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-violet-950 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">NHL</h1>
  </div>
  <div className="bg-white min-w-[120px] px-3 py-1 border-t-2 border-red-600 rounded shadow-md flex-shrink-0 snap-start">
    <h1 className="text-sm font-normal leading-4">FIVB NATIONS <br/> LEAGUE</h1>
  </div>

</div>


    </div>
    
  )
}

export default Activities