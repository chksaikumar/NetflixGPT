import React from "react";
import { useSelector } from "react-redux";
import useTrailer from "../Hooks/useTrailer";
import TitleInfo from "./TitleInfo";

const VideoContainer = ({ movieId }) => {
  useTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.TrailerVideo);

  return (
    <div className="relative w-full h-screen ">
      {/* YouTube Iframe - Autoplay, No Controls */}
      <iframe
        className="w-full h-full object-cover pointer-events-none"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${trailer?.key}`}
        title="Netflix Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default VideoContainer;
