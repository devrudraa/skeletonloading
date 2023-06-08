import React from "react";

// Creating a simple card to display
// Getting the data as prop and index to avoid a error
function Card(index, user) {
  return (
    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-56 object-cover"
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{`${user.name.first} ${user.name.last}`}</div>
        <p className="text-gray-700 text-base">Gender: {user.gender}</p>
      </div>
    </div>
  );
}

export default Card;
