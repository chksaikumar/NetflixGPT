import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/TMDB";
import { setPopularMovies } from "../Redux/Store/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const moviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(setPopularMovies(json.results));
  };

  useEffect(() => {
    moviesData();
  }, []);
};

export default usePopularMovies;
