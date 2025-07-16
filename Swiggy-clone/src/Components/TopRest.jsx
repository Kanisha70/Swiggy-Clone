import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './Card';

function TopRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);
    const cardsPerPage = 4;

    const fetchTopRestaurant = async () => {
        try {
            const response = await fetch('http://localhost:5000/top-restaurant-chains');
            const apiData = await response.json();
            setData(apiData);
        } catch (error) {
            console.error("Failed to fetch top restaurants:", error);
        }
    };

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    const nextSlide = () => {
        if ((slide + 1) * cardsPerPage >= data.length) return;
        setSlide(slide + 1);
    };

    const prevSlide = () => {
        if (slide <= 0) return;
        setSlide(slide - 1);
    };

    const startIndex = slide * cardsPerPage;
    const visibleCards = data.slice(startIndex, startIndex + cardsPerPage);

    return (
        <div className='max-w-[1200px] mx-auto px-4'>
            <div className='flex my-3 items-center justify-between'>
                <div className='md:text-3xl text-lg font-bold'>Top Restaurants in Deoghar</div>
                <div className='flex'>
                    <div
                        onClick={prevSlide}
                        className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${
                            slide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={nextSlide}
                        className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${
                            (slide + 1) * cardsPerPage >= data.length ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className='flex gap-4 overflow-hidden transition-all duration-300'>
                {visibleCards.map((d, i) => (
                    <Card width="w-full md:w-[273px]" {...d} key={i} />
                ))}
            </div>
        </div>
    );
}

export default TopRest;
