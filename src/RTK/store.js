import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./reducers/popularMoviesSlice";
import topratedSlice from "./reducers/topRatedMoviesSlice";
import trendingSlice from "./reducers/trendingMoviesSlice";
import tvPopularSlice from "./reducers/tvPopularMoviesSlice";
import singleMovieSlice from "./reducers/singleMovieSlice";
import watchLaterSlice from "./reducers/watchLaterSlice";

export const store = configureStore({
  reducer: {
    popular: PopularSlice,
    toprated: topratedSlice,
    trending: trendingSlice,
    tvPopular: tvPopularSlice,
    singleMovie: singleMovieSlice,
    watchLater: watchLaterSlice,
  },
});
