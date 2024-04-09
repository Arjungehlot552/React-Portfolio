// Card.jsx

import React from 'react';

const Card = ({ image, title, description, websiteLink, onButtonClick }) => {
  return (
    <div className="max-w-md bg-white rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onButtonClick(websiteLink)}>
          Visit Website
        </button>
      </div>
    </div>
  );
};

export default Card;
