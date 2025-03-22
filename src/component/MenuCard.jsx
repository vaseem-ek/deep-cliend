import React from "react";
import { useNavigate } from "react-router-dom";

function MenuCard({ item }) {
  const nav = useNavigate()
  return (
    <div className="border mt-3 mb-2 border-white flex flex-col rounded-lg shadow-md bg-gray-800 text-white overflow-hidden p-5 w-full h-[200px]">
      <h1 className="text-orange-500 font-bold text-2xl">{item.name}</h1>
      <p className="text-gray-300 mt-2 text-sm line-clamp-2">{item.description}</p>
      <div className="flex justify-end items-end flex-grow">
        <button
          onClick={() => item._id && nav(`/view-list/${item._id}`)}
          className="px-4 py-2 text-white font-semibold rounded-md bg-gradient-to-br from-red-500 to-green-700 hover:opacity-90 transition-all"
          title="click me"
        >
          VIEW
        </button>
      </div>
    </div>
  );
}



export default MenuCard;