import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, title, id }) => {
  if (!posterPath) return null;

  return (
    <Link
      to={`/movie/${id}`}
      className="w-[150px] md:w-[180px] flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <img
        className="rounded-lg w-full h-auto object-cover"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
    </Link>
  );
};

export default MovieCard;
