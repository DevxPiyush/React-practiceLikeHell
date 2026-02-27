import React, { useState } from "react";

const Cards = ({ values, handleedit, handlesave }) => {
  const { id, name, editing } = values;
  //local state for input typing
  const [inputvalue, setinputvalue] = useState(name);

  return (
    <div className="w-72 bg-zinc-200 rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition duration-300 m-10">
      {/* User Name */}
      {/* <h2 className="text-lg font-semibold text-gray-800">{name}</h2> */}

      {/* Edit Button */}
      {editing ? (
        <>
          <input
            value={inputvalue}
            onChange={(e) => setinputvalue(e.target.value)}
            type="text"
            className="border px-2 py-1"
          />

          <button
            onClick={() => handlesave(id, inputvalue)}
            className="bg-green-500 text-white px-3 py-1 rounded ml-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold"> {name} </h2>

          <button
            className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            onClick={() => handleedit(id)}
          >
            {" "}
            Edit{" "}
          </button>
        </>
      )}
    </div>
  );
};
export default Cards;
