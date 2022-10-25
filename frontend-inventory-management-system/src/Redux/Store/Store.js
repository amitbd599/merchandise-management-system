import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../State-slice/Customer-Slice";
const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

export default store;
