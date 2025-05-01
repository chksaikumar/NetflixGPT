import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/TMDB";
import { setTrailerVideo } from "../Redux/Store/moviesSlice";
import { useEffect } from "react";

const userTrailer = (movieId) => {
  const dispach = useDispatch();

  const getMovieVideo = async () => {
    const Trailer = await fetch(
      `
https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const trailerVideo = await Trailer.json();

    const video = trailerVideo.results.filter((video) => video.type === " ");
    const finalTrailer = trailerVideo.length
      ? video[0]
      : trailerVideo.results[0];

    dispach(setTrailerVideo(finalTrailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default userTrailer;
