import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};
export default Card;