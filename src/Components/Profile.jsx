import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className='bg-red-600 px-4 pt-6 flex items-center w-full justify-between h-14'>
        <Link to='/me'>
          <span className='flex gap-0.5 text-gray-50 text-sm items-center'>
            <ArrowBackIosIcon fontSize='inherit' />
            Me
          </span>
        </Link>
        <p className='text-sm text-white font-medium'>Profile</p>
        <span className='w-6'></span>
      </div>

      {/* Form Container */}
      <div className="px-4 pt-4 text-sm">
        {/* Profile Picture */}
        <div className="mb-5">
          <h1 className='text-gray-800 py-2'>KWAME BAWA</h1>
          <div className="flex  gap-1 flex-col">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className='w-12 h-12 rounded-full object-cover border border-green-500' />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                N/A
              </div>
            )}

            <label className='text-green-600 cursor-pointer text-sm'>
              Change
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Profile Form */}
        <form className=''>
          <div className="flex justify-between border-t border-gray-300 py-2">
            <p className='text-gray-600'>Username</p>
            <p className='flex items-center gap-1'>
              <span className='text-green-700 cursor-pointer'>Edit</span>
              <ArrowForwardIosIcon fontSize='inherit' className='text-gray-600' />
            </p>
          </div>

          <div className="flex justify-between border-t border-gray-300 py-2">
            <p className='text-gray-600'>SportySocial</p>
            <button className='bg-green-700 text-white text-sm py-1 px-4 rounded cursor-pointer'>Create</button>
          </div>

          <div className="flex justify-between border-t border-gray-300 py-2">
            <p className='text-gray-600'>First Name</p>
            <span className='text-gray-600'>KWAME</span>
          </div>

          <div className="flex justify-between border-t border-gray-300 py-2">
            <p className='text-gray-600'>Last Name</p>
            <span className='text-gray-600'>BAWA</span>
          </div>

          <div className="flex justify-between border-t border-gray-300 py-2">
            <p className='text-gray-600'>Date of Birth</p>
            <span className='text-gray-600'>08/27/2001</span>
          </div>

          <div className="flex justify-between border-t border-gray-300 py-2">
            <p className='text-gray-600'>Phone Number</p>
            <p className='flex items-center gap-1'>
              <span className='text-gray-600'>05*******218</span>
              <ArrowForwardIosIcon fontSize='inherit' className='text-gray-600' />
            </p>
          </div>

          <div className="flex justify-between border-t border-gray-300 py-2">
            <p className='text-gray-600'>Location</p>
            <p className='flex items-center gap-1'>
              <span className='text-green-700 cursor-pointer'>Ghana</span>
              <ArrowForwardIosIcon fontSize='inherit' className='text-gray-600' />
            </p>
          </div>

          <div className="flex justify-between border-t border-gray-300 py-2">
            <p className='text-gray-600'>Email</p>
            <button className='bg-green-700 text-white text-sm py-1 px-4 rounded cursor-pointer'>Verify Now</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
