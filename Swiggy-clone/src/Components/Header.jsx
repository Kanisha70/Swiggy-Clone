import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch, CiDiscount1, CiShoppingCart } from "react-icons/ci";
import { IoHelp } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
import logo from "../assets/logo.png";
export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log('hii');
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }

  const links = [
    {
      icon: <CiSearch />,
      name: "Search"
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup:"new"
    },
    {
      icon: <IoHelp />,
      name: "Help"
    },
    {
      icon: <GoSignIn />,
      name: "Signin"
    },
    {
      icon: <CiShoppingCart />,
      name: "Cart"
    },
  ]

  return (
    <>
      <div
        className='black-overlay w-full h-full fixed duration-500'
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex:99999999
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='w-[400px] bg-white h-full absolute duration-[400ms]'
          style={{
            left: toggle ? '0%' : '-100%'
          }}
        ></div>
      </div>

      <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
          <div className='w-[100px]'>
            {/* <img src="images/logo.png" className='w-full' alt="" /> */}
            <img src={logo} className="w-full" alt="Swiggy Logo" />
          </div>
          <div>
            <span className='font-bold border-b-[3px]'>
              Karnibag </span> Deoghar, Jharkhand, India
            <RxCaretDown
              fontSize={25}
              className='inline text-[0.9rem] text-[#fc8019] cursor-pointer'
              onClick={showSideMenu}
            />
          </div>
          <nav className='hidden md:flex list-none gap-5 ml-auto font-semibold text-[18px]'>
            {
              links.map((link, index) => (
                <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              ))
            }
          </nav>
        </div>
      </header>
    </>
  )
}



