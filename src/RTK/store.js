import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./reducers/popularMoviesSlice";
import topratedSlice from "./reducers/topRatedMoviesSlice";
import trendingSlice from "./reducers/trendingMoviesSlice";
import tvPopularSlice from "./reducers/tvPopularMoviesSlice";

export const store = configureStore({
  reducer: {
    popular: PopularSlice,
    toprated: topratedSlice,
    trending: trendingSlice,
    tvPopular: tvPopularSlice,
  },
});
