import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    TrailerVideo: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
  },
});

export const { setNowPlayingMovies, setTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
