import { createSlice } from "@reduxjs/toolkit";
export const SupplierSlice = createSlice({
  name: "supplier",
  initialState: {
    list: [],
    listTotal: 0,
    singleSupplier: [],
  },
  reducers: {
    setSupplierList: (state, action) => {
      state.list = action.payload;
    },
    setSupplierListTotal: (state, action) => {
      state.listTotal = action.payload;
    },
    setSingleSupplier: (state, action) => {
      state.singleSupplier = action.payload;
    },
  },
});
export const { setSupplierList, setSupplierListTotal, setSingleSupplier } =
  SupplierSlice.actions;
export default SupplierSlice.reducer;
