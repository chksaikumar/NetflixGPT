import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/TMDB";
import { setTopRatedMovies } from "../Redux/Store/moviesSlice";
import { useEffect } from "react";

const useToprated = () => {
  const dispatch = useDispatch();
  const moviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(setTopRatedMovies(json.results));
  };

  useEffect(() => {
    moviesData();
  }, []);
};

export default useToprated;
