import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/TMDB";
import { setMainVideo } from "./Redux/Store/moviesSlice";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [movieKey, setMovieKey] = useState("");

  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_OPTIONS
      );
      const data = await response.json();

      const trailers = data.results.filter((video) => video.type === "Trailer");
      const finalTrailer = trailers.length ? trailers[0] : data.results[0];

      if (finalTrailer?.key) {
        setMovieKey(finalTrailer.key);
        dispatch(setMainVideo(finalTrailer));
      }
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, [id]);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {movieKey ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${movieKey}?autoplay=1&controls=1&showinfo=0&modestbranding=1&fs=1&rel=0`}
          title="Netflix Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="text-white text-xl">Loading trailer...</div>
      )}
    </div>
  );
};

export default MoviePage;
