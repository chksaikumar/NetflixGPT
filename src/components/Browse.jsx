import Header from "./Header";
import MainContainer from "./MainContainer";

import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./Hooks/usePopularMovies";
import useToprated from "./Hooks/useToprated";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useToprated();
  useUpcomingMovies();
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
