import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 pt-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Main Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {/* Logo */}
        <div className="col-span-2 sm:col-span-1">
          <h1 className="text-orange-500 text-2xl font-bold mb-2">Swiggy</h1>
          <p className="text-xs">&copy; 2025 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-bold text-[18px] mb-2">Company</h2>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact + Legal */}
        <div>
          <h2 className="font-bold text-[18px] mb-2">Contact us</h2>
          <ul className="space-y-1">
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>
          <h2 className="font-bold text-[18px] mt-4 mb-2">Legal</h2>
          <ul className="space-y-1">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Available Cities */}
        <div>
          <h2 className="font-bold text-[18px] mb-2">Available in:</h2>
          <ul className="space-y-1">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <select className="mt-3 border text-xs p-1 rounded w-full sm:w-auto">
            <option>685 cities</option>
          </select>
        </div>

        {/* Life & Social */}
        <div>
          <h2 className="font-bold text-[18px] mb-2">Life at Swiggy</h2>
          <ul className="space-y-1 mb-4">
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
          <h2 className="font-bold text-[18px] mb-2">Social Links</h2>
          <div className="flex gap-3 text-lg text-gray-600">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* App Download Section */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto pb-6 px-4 gap-4">
        <p className="font-bold text-center text-2xl md:text-left">
          For better experience, download the Swiggy app now
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29.png"
            alt="App Store"
            className="h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
