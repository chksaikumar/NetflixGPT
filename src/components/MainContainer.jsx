import React from "react";
import VideoContainer from "./maicontainer/VideoContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import TitleInfo from "./maicontainer/TitleInfo";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //known as early return
  if (Movies == null) return;
  const mainMovie = Movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <TitleInfo title={original_title} info={overview} />
      <VideoContainer movieId={id} />
    </>
  );
};

export default MainContainer;
