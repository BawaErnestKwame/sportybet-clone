import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <>

    <div className='bg-red-600 px-4 pt-6 flex items-center w-full gap-28 h-14'>
        <Link to='/Me'>
        <span className='flex gap-0.5 text-gray-50 text-sm items-center'>
            <ArrowBackIosIcon fontSize=' inherit'/>
            Me
        </span>
        </Link>

        <p className='text-center text-sm text-white font-medium'>Profile</p>
    </div>

    {/* form-container */}
<div className=" px-4 pt-4 text-sm">
    <div className="">
        <h1 className='text-gray-800 text-sm py-4'>KWAME BAWA</h1>

        <span className='flex flex-col mb-3'>
            <input type="file" />
            <p className='text-green-600 text-sm'>Change</p>
        </span>
    </div>


{/* form */}
    <form action="" className=''>
        <div className=" flex w-full border-t border-gray-300 py-2 justify-between">
            <p className='text-gray-600'>Username</p>
            <p className='flex items-center gap-1'>
                <span className='text-green-700'>Edit</span>
                 <ArrowForwardIosIcon fontSize='inherit' className='text-gray-600'/></p>
        </div>

        <div className=" flex w-full border-t border-gray-300 py-2 justify-between">
            <p className='text-gray-600'>SportySocial</p>
        
               <button className='bg-green-700 text-white text-sm py-1 px-4 '>Create</button>
        </div>

        <div className=" flex w-full border-t border-gray-300 py-2 justify-between">
            <p className='text-gray-600'>First Name</p>
                <span className='text-gray-600 text-sm'>KWAME</span>
               
        </div>

        <div className=" flex w-full border-t border-gray-300 py-2 justify-between">
            <p className='text-gray-600'>Last Name</p>
                <span className='text-gray-600 text-sm'>BAWA</span>
        </div>

        <div className=" flex w-full border-t border-gray-300 py-2 justify-between">
            <p className='text-gray-600 text-sm'>Date of Birth</p>
                <span className='text-gray-600 text-sm'>08/27/2001</span>
           
        </div>

        <div className=" flex w-full border-t border-gray-300 py-2 justify-between">
            <p className='text-gray-600 text-sm'>Phone Number</p>
             < p className='flex items-center gap-1'>
                <span className='text-gray-600 text-sm'>05*******218</span>
                <ArrowForwardIosIcon fontSize='inherit' className='text-gray-600'/>
                </p>
            
        </div>

        <div className=" flex w-full border-t border-gray-300 py-2 justify-between">
            <p className='text-gray-600'>Location</p>
            <p className='flex items-center gap-1'>
                <span className='text-green-700'>Ghana</span>
                 <ArrowForwardIosIcon fontSize='inherit' className='text-gray-600'/>
                 </p>
        </div>

       <div className=" flex w-full border-t border-gray-300 py-2 justify-between">
            <p className='text-gray-600'>Email</p>
        
               <button className='bg-green-700 text-white text-sm py-1 px-4 '>verify Now</button>
        </div>
    </form>
    </div>

    <hr />




    </>
  )
}

export default Profile