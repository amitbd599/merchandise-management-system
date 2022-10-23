import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../State-slice/Profile-Slice";
const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
