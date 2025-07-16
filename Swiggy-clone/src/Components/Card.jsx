import React from 'react';
import { FaStar } from 'react-icons/fa';

function Card(props) {
    return (
        <div className={`${props.width || 'w-full sm:w-[250px] md:w-[280px]'} shrink-0 mb-4 px-2`}>
            <div className='relative group h-[182px] rounded-[15px] overflow-hidden shadow-md'>
                <img
                    className='group-hover:scale-110 duration-150 object-cover w-full h-full'
                    src={`http://localhost:5000/images/${props.image}`}
                    alt={props.title || "Restaurant Image"}
                />
                <div className='absolute w-full h-full top-0 flex items-end p-2 text-[16px] font-semibold text-white tracking-tight bg-gradient-to-t from-black/60 via-black/30 to-transparent md:text-[25px]'>
                    {props.offer}
                </div>
            </div>

            <div className='mt-3 text-md md:text-xl font-bold'>
                {props.title}
            </div>

            <div className='flex items-center text-gray-700 mt-1'>
                <FaStar className="text-yellow-500 mr-1" />
                <span className="text-sm md:text-base">{props.rating}</span>
                <span className='ml-2 text-sm md:text-base'>
                    {props.minTime} - {props.maxTime} mins
                </span>
            </div>

            <div className='text-sm md:text-base text-slate-700 mt-1'>
                {props.name}<br />
                {props.place}
            </div>
        </div>
    );
}

export default Card;
