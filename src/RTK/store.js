import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./reducers/popularMoviesSlice";
import topratedSlice from "./reducers/topRatedMoviesSlice";
import trendingSlice from "./reducers/trendingMoviesSlice";

export const store = configureStore({
  reducer: {
    popular: PopularSlice,
    toprated: topratedSlice,
    trending: trendingSlice,
  },
});
