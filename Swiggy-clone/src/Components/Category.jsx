// import React, { useState,useEffect} from 'react'
// import { FaArrowRight,FaArrowLeft } from "react-icons/fa";


// function Category() {
//     const [slide,setSlide] = useState(3);
//     const [categories, setCategory] = useState([]);

//     const fetchCategory = async () => {
//         const response = await fetch('http://localhost:5000/categories');
//         const data = await response.json();
//         setCategory(data);

//     }

//     useEffect(
//         () => {
//             fetchCategory();

//         },[]
//     )

//     const nextSlide =() => {
//         console.log(categories.length);
//         if (categories.length - 8 == slide) return false;
//         setSlide(slide + 3);
//     }
//     const prevSlide = () => {
//         if (slide == 0) return false;
//         setSlide(slide-3);
//     }

//   return (
//     <div className='max-w-[1200px] mx-auto'>
//     <div className='flex my-3 items-center justify-between'>
//         <div className='text-[25px] font-bold'>What's on your mind?</div>
//         <div className='flex'>
//             <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
//                 <FaArrowLeft /></div>
//             <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
//                 <FaArrowRight /></div>
           
//         </div>
    

//         <div className='flex'>
//             {
//                 categories.map(
//                     (cat,index) => {
//                         return(
//                             <div style={{
//                                 transform: 'translate(-${slide * 100}%)'
//                                 }}key={index} className='w-[150px] shrink-0 duration-500'>
//                                 <img src={"http://localhost:5000/images/" +cat.image} alt="" />
//                                 </div>
//                         )
//                     }
//                 )
//             }
//         </div>
//         <hr className='my-6 border-[1px]'/>
      
//     </div>
//     </div>
//   )
// }

// export default Category

import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Category() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch('http://localhost:5000/categories');
    const data = await response.json();
    setCategory(data);
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    if (slide >= categories.length - 3) return;
    setSlide(slide + 1);
  }

  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide(slide - 1);
  }

  return (
    <div className='max-w-[1200px] mx-auto px-2'>
      <div className='flex my-3 items-center justify-between'>
        <div className='md:text-3xl text-lg font-bold'>What's on your mind?</div>
        <div className='flex'>
          <div
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{
            transform: `translateX(-${slide * 150}px)`
          }}
        >
          {categories.map((cat, index) => (
            <div key={index} className='w-[150px] shrink-0'>
              <img
                src={`http://localhost:5000/images/${cat.image}`}
                alt=""
                className='w-full h-auto'
              />
            </div>
          ))}
        </div>
      </div>

    {/* <hr className='my-6 border- border-gray-400' /> */}
    <hr className="my-6 border-t border-gray-400 opacity-40" />
    </div>
  );
}

export default Category;
