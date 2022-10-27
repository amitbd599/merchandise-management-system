import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../State-slice/Customer-Slice";
import supplierReducer from "../State-slice/Supplier-Slice";
const store = configureStore({
  reducer: {
    customer: customerReducer,
    supplier: supplierReducer,
  },
});

export default store;
