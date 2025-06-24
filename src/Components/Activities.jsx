import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';

const Activities = () => {
  return (
    <>
      <div className="px-4">
        {/* Icons section */}
        <div className="w-full flex gap-4 text-sm py-4">
          <div className="flex flex-col items-center justify-center text-sm">
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
            <FlightTakeoffIcon />
            <h1>Aviator</h1>
          </div>
          <div className="flex flex-col items-center justify-center text-xs">
            <SportsVolleyballIcon />
            <h1>Virtual</h1>
          </div>
          <div className="flex flex-col items-center justify-center text-xs">
            <MoreHorizIcon />
            <h1>More</h1>
          </div>
        </div>

        {/* Horizontal scroll section */}
        <div className="flex overflow-x-auto gap-2 px-2 py-2 snap-x snap-mandatory scroll-hide">
          {/* Your cards */}
          {[
            { title: "TODAY'S \nFOOTBALL", border: 'border-red-600' },
            { title: 'FOOTBALL IN\nNEXT 3\nHOURS', border: 'border-violet-800' },
            { title: 'FIFA CLUB \nWORLD CUP', border: 'border-green-800' },
            { title: 'CONCACAF\nGOLD CUP', border: 'border-violet-950' },
            { title: 'NBA', border: 'border-violet-800' },
            { title: 'ATP/WTA', border: 'border-green-800' },
            { title: 'NHL', border: 'border-violet-950' },
            { title: 'FIVB NATIONS \nLEAGUE', border: 'border-red-600' },
          ].map((item, idx) => (
            <div key={idx} className={`bg-white min-w-[120px] px-3 py-1 ${item.border} border-t-2 rounded shadow-md flex-shrink-0 snap-start`}>
              <h1 className="text-sm font-normal leading-4 whitespace-pre-line">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Navigation Tabs */}
      <div className="flex text-sm text-gray-800 items-center px-4 justify-between w-full bg-white py-2 border-b border-gray-300 overflow-hidden">
        <h1 className="font-bold whitespace-nowrap mr-2">Featured</h1>

        <div className="flex-1 overflow-x-auto scroll-hide">
          <ul className="flex gap-4 snap-x snap-mandatory whitespace-nowrap">
            <li className="snap-start"><Link to="matches">Matches</Link></li>
            <li className="snap-start"><Link to="games">Games</Link></li>
            <li className="snap-start"><Link to="codes">Codes</Link></li>
            <li className="snap-start"><Link to="virtuals">Virtuals</Link></li>
          </ul>
        </div>

        <div className="text-green-700 ml-2">
          <Link to="matches"><LiveTvIcon /></Link>
        </div>
      </div>

      {/* Tab content appears here */}
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Activities;
