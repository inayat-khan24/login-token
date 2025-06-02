import React, { useContext, useState } from 'react'


const Rating = ({rating}) => {
// const product = {
//     rating: 3.4,
//     reviews: 30
//   };

//   





  return (
    <div>
      
   {/* Product static rating display */}
        <div className="flex items-center text-yellow-500 text-sm mt-2">
          {"★".repeat(Math.floor(rating))}
          {/* <span className="text-gray-500 ml-1">({reviews})</span> */}
        </div>

        {/* Clickable Rating Component */}
        {/* <div className="flex mt-2">
          {Array.from({ length: totalStars * 2 }, (_, i) => {
            const starValue = (i + 1) / 2; // 0.5 steps
            const isFilled = hoveredStar
              ? starValue <= hoveredStar
              : starValue <= selectedStar;

            return (
              <span
                key={i}
                className={`cursor-pointer text-2xl ${
                  isFilled ? 'text-yellow-500' : 'text-gray-300'
                }`}
                onMouseEnter={() => setHoveredStar(starValue)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => handleClick(starValue)}
              >
                {starValue % 1 === 0 && '★'}
              </span>
            );
          })}
        </div>

        {selectedStar > 0 && (
          <p className="text-sm text-gray-600 mt-1">You rated this: {selectedStar} stars</p>
        )} */}


    </div>
  )
}

export default Rating
