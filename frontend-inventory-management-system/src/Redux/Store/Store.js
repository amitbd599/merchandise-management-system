import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../State-slice/Customer-Slice";
import supplierReducer from "../State-slice/Supplier-Slice";
import expenseTypeReducer from "../State-slice/ExpenseType-Slice";
const store = configureStore({
  reducer: {
    customer: customerReducer,
    supplier: supplierReducer,
    expenseType: expenseTypeReducer,
  },
});

export default store;
