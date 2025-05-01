import { useSelector } from "react-redux";
import MovieList from "./secondaryContainer/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const movieSections = [
    {
      title: "Now Playing",
      movies: movies?.nowPlayingMovies,
    },
    { title: "Popular", movies: movies?.popularMovies },
    { title: "Upcoming", movies: movies?.upcomingMovies },
    { title: "Top Rated", movies: movies?.TopratedMovies },
    // Add more as needed
  ];

  return (
    <div className="bg-black text-white p-4 space-y-6">
      <div className="relative -top-50">
        {movieSections.map(
          ({ title, movies }) =>
            movies?.length > 0 && (
              <>
                <MovieList key={title} title={title} movies={movies} />
              </>
            )
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
