import { createSlice } from "@reduxjs/toolkit";
export const ExpenseSlice = createSlice({
  name: "expense",
  initialState: {
    list: [],
    listTotal: 0,
    singleExpense: [],
  },
  reducers: {
    setExpenseList: (state, action) => {
      state.list = action.payload;
    },
    setExpenseListTotal: (state, action) => {
      state.listTotal = action.payload;
    },
    setSingleExpense: (state, action) => {
      state.singleExpense = action.payload;
    },
  },
});
export const { setExpenseList, setExpenseListTotal, setSingleExpense } =
  ExpenseSlice.actions;
export default ExpenseSlice.reducer;
