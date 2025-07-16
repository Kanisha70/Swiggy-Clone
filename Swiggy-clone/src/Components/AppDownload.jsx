import React from 'react';
import logo from "../assets/logo.png";
import qrCode from "../assets/qr-code.png";

function AppDownload() {
  return (
    <div className="w-full bg-[#1B1B1B] text-white flex md:flex-row flex-col items-center justify-evenly pt-6 overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2">
        <div className="flex items-center mb-3">
         <img src={logo} className="w-25 h-14" alt="Swiggy Logo" />
          <span className="text-[#fc8019] font-bold text-lg">Swiggy</span>
        </div>
        <h2 className="text-[36px] font-bold leading-tight mb-2">Get the Swiggy App now!</h2>
        <p className="text-gray-400 text-[18px]">For best offers and discounts curated specially for you.</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center px-10">
         <img src={qrCode} className='mt-8 py-4 h-60 w-60'></img>
        
        <p className='text-2xl font-bold text-orange-500 mb-8'>Scan to download</p>

        </div>
      </div>
    
  );
}

export default AppDownload;
