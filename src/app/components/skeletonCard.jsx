// Importing all the packages
import React from "react";
import Skeleton from "react-loading-skeleton"; // To show skeleton loading
import { SkeletonTheme } from "react-loading-skeleton"; // To set color of the skeleton loading

function SkeletonCard({ cards }) {
  // Setting a no of cards to display
  // Making a empty array of the length given length from the prop
  const NoCards = Array(cards).fill(0);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {NoCards.map((_, i) => {
        return (
          <div
            key={i}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          >
            {/* Creating the space to show the image */}
            <Skeleton height={224} width={224}></Skeleton>
            <div className="px-6 py-4">
              {/* Creating the space to show the lines for the text */}
              {/* Count is the number of lines we want */}
              <Skeleton count={2}></Skeleton>
            </div>
          </div>
        );
      })}
    </SkeletonTheme>
  );
}

export default SkeletonCard;
