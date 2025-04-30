import React from "react";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-[150px] md:w-[180px] flex-shrink-0 hover:scale-105 transition-transform duration-300">
      <img
        className="rounded-lg w-full h-auto object-cover"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
    </div>
  );
};

export default MovieCard;
