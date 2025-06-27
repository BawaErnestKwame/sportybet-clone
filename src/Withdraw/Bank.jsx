import React from 'react'
import cup from '../assets/cup.png'
import Withdraw from './Withdraw';

const Bank = () => {
  return (
    <div className=' flex items-center justify-center w-full h-screen bg-gray-50'>
      <div className=" flex items-center justify-center flex-col text-center">
        <div className="">
          <img src={cup} alt=""  className='w-40 h-40'/>
           </div>
          <div className="">
            <h1 className='text-2xl font-bold text-gray-800'>Enhanced Protection</h1>
            <p className='text-gray-600 text-sm'>To Withdraw to a bank account, you must have<br/> deposited with a card</p>
          </div>
       
      </div>

    </div>
  )
}

export default Bank