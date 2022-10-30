import { createSlice } from "@reduxjs/toolkit";
export const expenseType = createSlice({
  name: "expenseType",
  initialState: {
    list: [],
    listTotal: 0,
    singleExpenseType: [],
    expenseTypeDropdown: [],
  },
  reducers: {
    setExpenseTypeList: (state, action) => {
      state.list = action.payload;
    },
    setExpenseTypeListTotal: (state, action) => {
      state.listTotal = action.payload;
    },
    setSingleExpenseType: (state, action) => {
      state.singleExpenseType = action.payload;
    },
    setExpenseTypeDropdown: (state, action) => {
      state.expenseTypeDropdown = action.payload;
    },
  },
});
export const {
  setExpenseTypeList,
  setExpenseTypeListTotal,
  setSingleExpenseType,
  setExpenseTypeDropdown,
} = expenseType.actions;
export default expenseType.reducer;
