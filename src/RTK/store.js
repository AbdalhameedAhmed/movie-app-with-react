import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./reducers/popularMoviesSlice";
import topratedSlice from "./reducers/topRatedMoviesSlice";

export const store = configureStore({
  reducer: {
    popular: PopularSlice,
    toprated: topratedSlice,
  },
});
