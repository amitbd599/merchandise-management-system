import { createSlice } from "@reduxjs/toolkit";
export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    list: [],
    listTotal: 0,
    singleCustomer: [],
  },
  reducers: {
    setCustomerList: (state, action) => {
      state.list = action.payload;
    },
    setCustomerListTotal: (state, action) => {
      state.listTotal = action.payload;
    },
    setSingleCustomer: (state, action) => {
      state.singleCustomer = action.payload;
    },
  },
});
export const { setCustomerList, setCustomerListTotal, setSingleCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
