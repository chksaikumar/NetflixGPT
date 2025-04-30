import Header from "./Header";
import MainContainer from "./mainContainer";

import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
