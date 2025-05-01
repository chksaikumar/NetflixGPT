import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { API_OPTIONS } from "../utils/TMDB";
import { setMainVideo } from "./Redux/Store/moviesSlice";

// Replace with your actual TMDB API key

const MoviePage = () => {
  const { id } = useParams(); // Get movie ID from URL
  const dispach = useDispatch();
  const [moviekey, setmoviekey] = useState("");

  const getMovieVideo = async () => {
    const MainVideo = await fetch(
      `
  https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const trailerVideo = await MainVideo.json();

    const video = trailerVideo.results.filter(
      (video) => video.type === "Trailer"
    );
    const finalTrailer = trailerVideo.length
      ? video[0]
      : trailerVideo.results[0];
    console.log(finalTrailer.key);
    setmoviekey(finalTrailer.key);
    dispach(setMainVideo(finalTrailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        {/* YouTube Iframe - Full Controls */}
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${moviekey}?autoplay=1&controls=1&showinfo=1&modestbranding=1&fs=1`}
          title="Netflix Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {/* Optional: Dark Gradient Overlay (remove if you want full viewability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default MoviePage;
