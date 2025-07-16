import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

function DeliveryCities() {
  const foodCities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai",
    "Pune", "Kolkata", "Chennai", "Ahmedabad", "Chandigarh", "Jaipur"
  ];

  const groceryCities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai",
    "Pune", "Kolkata", "Chennai", "Ahmedabad", "Chandigarh", "Jaipur"
  ];

  const renderButtons = (cities, type) => {
    return cities.map((city, index) => (
      <button
        key={index}
        className="border border-gray-300 px-4 py-3 rounded-lg text-sm text-center leading-snug w-full h-full whitespace-normal break-words hover:shadow-sm transition"
        >
        Order {type} in {city}
      </button>
    ));
  };

  return (
    <div className="px-4 sm:px-6 md:px-20 lg:px-40 py-10 bg-white text-black">
      {/* Food delivery cities */}
      <div className="mb-10">
        <h2 className="md:text-3xl text-lg font-bold mb-4">Cities with food delivery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {renderButtons(foodCities, 'food online')}
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm text-orange-500 flex items-center gap-1">
            Show More <FaChevronDown className="text-xs text-orange-500" />
          </button>
        </div>
      </div>

      {/* Grocery delivery cities */}
      <div>
        <h2 className="md:text-3xl text-lg font-bold mb-4">Cities with grocery delivery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {renderButtons(groceryCities, 'grocery delivery')}
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm text-orange-500 flex items-center gap-1">
            Show More <FaChevronDown className="text-xs text-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryCities;
