


import React, { useEffect, useState, useRef } from 'react';
import Card from './Card'; // Make sure path is correct

function OnlineDelivery() {
    const [data, setData] = useState([]);
    const filterRef = useRef(null); // ✅ Ref to observe
    const [isSticky, setIsSticky] = useState(false); // State to track top

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

    // ✅ IntersectionObserver to detect when ref hits top
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            {
                threshold: 1,
                rootMargin: '-1px 0px 0px 0px',
            }
        );

        const current = filterRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto mb-[100px] px-2'>
            <div className='flex my-5 items-center justify-between'>
                <div className='md:text-3xl text-lg  font-bold'>
                    Restaurants with online food delivery in Deoghar
                </div>
            </div>

            <div
                ref={filterRef}
                className={`flex gap-5 bg-white z-50 ${
                    isSticky ? 'fixed top-0 left-0 w-full shadow-lg p-4' : 'p-3 rounded-md shadow'
                }`}
            >
                <div>Filter</div>
                <div>Sort By</div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {data.map((d, i) => (
                    <Card {...d} key={i} />
                ))}
            </div>
        </div>
    );
}

export default OnlineDelivery;
