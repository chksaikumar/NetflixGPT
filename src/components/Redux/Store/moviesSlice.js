import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    TrailerVideo: null,
    mainVideo: null,
    TopratedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.TopratedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setMainVideo: (state, action) => {
      state.mainVideo = action.payload;
    },
  },
});

export const {
  setNowPlayingMovies,
  setTrailerVideo,
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMainVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
