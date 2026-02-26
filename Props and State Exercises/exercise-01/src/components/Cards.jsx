import React from "react";

const Card = ({values, index, setincart}) => {

  const {image, name, price, inCart} = values
  return (
      <div className="w-64 bg-white rounded-xl shadow-md p-4 flex flex-col m-10">

        {/* Image */}
        <img
            src= {image}
            alt="Product"
            className="w-full h-40 object-cover rounded-lg"
        />

        {/* Name */}
        <h2 className="text-lg font-semibold">
          {name}
        </h2>

        {/* Price */}
        <p className="text-gray-600 font-medium">
          {price}
        </p>

        {/* Button */}
        <button
            onClick={() => setincart(index)}
            className={`text-white py-2 rounded-lg  transition ${inCart ? "bg-red-500" : "bg-blue-500"}`}>
          {inCart ? "Remove from cart" : "Add to cart"}
        </button>

      </div>
  );
};

export default Card;