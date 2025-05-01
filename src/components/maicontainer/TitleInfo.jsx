import React from "react";

const TitleInfo = ({ title, info }) => {
  return (
    <div className="absolute bottom-70 left-12 text-white max-w-xl z-20 space-y-5">
      <h1 className="text-6xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="text-lg text-gray-200 drop-shadow-md line-clamp-3">
        {info}
      </p>

      <div className="flex space-x-4">
        <button className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-300 transition">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white font-semibold py-2 px-6 rounded hover:bg-opacity-90 transition">
          ℹ Info
        </button>
      </div>
    </div>
  );
};

export default TitleInfo;
