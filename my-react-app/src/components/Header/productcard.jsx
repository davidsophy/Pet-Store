import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ name, price, image }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-6 text-center relative">
      {/* Heart */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
      >
        <FaHeart
          className={`transition-colors ${liked ? "text-red-500" : "text-gray-400"}`}
        />
      </button>

      <img src={image} alt={name} className="mx-auto mb-4 h-40 w-full object-cover rounded" />
      <h3 className="font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
