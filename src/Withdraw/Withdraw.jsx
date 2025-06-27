import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Withdraw = () => {
  const location = useLocation();
  const current = location.pathname.toLowerCase();

  return (
    <>
      <div className="px-4 bg-red-600 flex justify-between items-center text-sm text-white font-medium pt-6 pb-3">
        <Link to="/me">
          <div className="flex items-center gap-1">
            <ArrowBackIosIcon fontSize="small" />
            <p>Me</p>
          </div>
        </Link>

        <h1>Withdraw</h1>

        <Link to="/howtodeposit">
          <span>
            <HelpOutlineIcon />
          </span>
        </Link>
      </div>

      {/* Tab Links */}
      <div className="px-4 flex justify-between pt-3 text-sm border-b border-gray-100 pb-2">
        <Link
          to="/withdraw/WithdrawMobileMoney"
          className={`text-gray-600 ${
            current.includes('withdrawmobilemoney')
              ? 'text-gray-900 underline decoration-3 decoration-green-600 underline-offset-8'
              : ''
          }`}
        >
          Mobile Money
        </Link>

        <Link
          to="/withdraw/bank"
          className={`text-gray-600 ${
            current.includes('bank')
              ? 'text-gray-900 underline decoration-3 decoration-green-600 underline-offset-8'
              : ''
          }`}
        >
          Bank
        </Link>
      </div>

      {/* Tab Content */}
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default Withdraw;
