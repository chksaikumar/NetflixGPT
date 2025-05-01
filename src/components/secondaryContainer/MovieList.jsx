import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
