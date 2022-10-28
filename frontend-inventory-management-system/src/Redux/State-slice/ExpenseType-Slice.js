import { createSlice } from "@reduxjs/toolkit";
export const expenseType = createSlice({
  name: "expenseType",
  initialState: {
    list: [],
    listTotal: 0,
    singleExpenseType: [],
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
  },
});
export const {
  setExpenseTypeList,
  setExpenseTypeListTotal,
  setSingleExpenseType,
} = expenseType.actions;
export default expenseType.reducer;
