import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./reduccers/popularMoviesSlice";

export const store = configureStore({
  reducer: {
    popular: PopularSlice,
  },
});
