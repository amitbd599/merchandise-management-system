import { createSlice } from "@reduxjs/toolkit";
export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    list: [],
    listTotal: 0,
    FormValue: {
      CustomerName: "",
      Phone: "",
      Email: "",
      Address: "",
    },
  },
  reducers: {
    setCustomerList: (state, action) => {
      state.list = action.payload;
    },
    setCustomerListTotal: (state, action) => {
      state.listTotal = action.payload;
    },
    onChangeCustomerInput: (state, action) => {
      state.FormValue[`${action.payload.Name}`] = action.payload.Value;
    },
    ResetFormValue: (state, action) => {
      state.FormValue = {
        CustomerName: "",
        Phone: "",
        Email: "",
        Address: "",
      };
    },
  },
});
export const {
  setCustomerList,
  setCustomerListTotal,
  onChangeCustomerInput,
  ResetFormValue,
} = customerSlice.actions;
export default customerSlice.reducer;
