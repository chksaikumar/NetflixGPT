import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/TMDB";
import { setUpcomingMovies } from "../Redux/Store/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const moviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(setUpcomingMovies(json.results));
  };

  useEffect(() => {
    moviesData();
  }, []);
};

export default useUpcomingMovies;
