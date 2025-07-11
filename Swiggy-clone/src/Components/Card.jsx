import React from 'react';
import { FaStar } from 'react-icons/fa';

function Card(props) {
    return (
        <div className='w-[273px] shrink-0 grow mb-3'>
            <div className='relative group h-[182px] rounded-[15px] overflow-hidden'>
                <img
                    className='group-hover:scale-110 duration-150 object-cover w-full h-full'
                    src={`http://localhost:5000/images/${props.image}`}
                    alt={props.title || "Restaurant Image"}
                />
                <div className='absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter bg-gradient-to-t from-black/60 via-black/30 to-transparent'>
                    {props.offer}
                </div>
            </div>

            <div className='mt-3 text-xl font-bold'>
                {props.title}
            </div>

            <div className='flex items-center text-gray-700'>
                <FaStar className="text-yellow-500 mr-1" />
                {props.rating}
                <span className='ml-2'>
                    {props.minTime} - {props.maxTime} mins
                </span>
            </div>

            <div className='text-slate-700'>
                {props.name}<br />
                {props.place}
            </div>
        </div>
    );
}

export default Card;
