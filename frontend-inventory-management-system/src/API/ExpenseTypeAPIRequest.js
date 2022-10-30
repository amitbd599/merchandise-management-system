import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { getToken } from "../Helper/SessionHelper";
import {
  setExpenseTypeDropdown,
  setExpenseTypeList,
  setExpenseTypeListTotal,
  setSingleExpenseType,
} from "../Redux/State-slice/ExpenseType-Slice";
import { HideLoader, ShowLoader } from "../Redux/State-slice/Setting-Slice";
import store from "../Redux/Store/Store";

const TokenData = { headers: { token: getToken() } };

export const CreateExpenseTypeRequestAPI = async (postBody) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/CreateExpensesTypesService";
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      SuccessToast("Request Success.");
      return true;
    } else if (
      result.status === 200 &&
      result.data["status"] === "Fail" &&
      result.data["data"]["keyPattern"]["ExpenseName"] === 1
    ) {
      ErrorToast("Expense Type Name Already Used!");
      return false;
    } else {
      ErrorToast("Request Fail.");
      return false;
    }
  } catch (e) {
    ErrorToast("Something went wrong");
    store.dispatch(HideLoader());
    return false;
  }
};

export const ExpenseTypeDetailsByID = async (id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/ExpensesTypesDetailsByID/" + id;
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());

    if (result.status === 200 && result.data["status"] === "Success") {
      store.dispatch(setSingleExpenseType(result.data["data"][0]));

      return true;
    } else {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong");
    return false;
  }
};

export const ExpenseTypeListRequestAPI = async (
  pageNo,
  perPage,
  SearchKeyword
) => {
  try {
    store.dispatch(ShowLoader());
    let URL =
      BaseURL +
      "/ExpensesTypesList/" +
      pageNo +
      "/" +
      perPage +
      "/" +
      SearchKeyword;
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(setExpenseTypeList(result.data["data"][0]["Rows"]));
        store.dispatch(
          setExpenseTypeListTotal(result.data["data"][0]["Total"][0]["Count"])
        );

        return true;
      } else {
        store.dispatch(setExpenseTypeList([]));
        store.dispatch(setExpenseTypeListTotal(0));
        return true;
      }
    } else {
      ErrorToast("Something went wrong!");
      return false;
    }
  } catch (e) {
    ErrorToast("Something went wrong!!");
    store.dispatch(HideLoader());
    return false;
  }
};

export const ExpenseTypeUpdateRequestAPI = async (postBody, id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/UpdateExpensesTypes/" + id;
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      SuccessToast("ExpenseType Update Successful.");
      return true;
    } else {
      ErrorToast("Request Fail.");
      return false;
    }
  } catch (e) {
    ErrorToast("Something went wrong");
    store.dispatch(HideLoader());
    return false;
  }
};

export const ExpenseTypeDropdownRequestAPI = async (postBody, id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/ExpensesTypesDropdown";
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      store.dispatch(setExpenseTypeDropdown(result.data["data"]));
      return true;
    } else {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong");
    return false;
  }
};

export const ExpenseTypeDeleteRequestAPI = async (id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/DeleteExpensesTypes/" + id;
    const result = await axios.delete(URL, TokenData);

    if (result.status === 200 && result.data["status"] === "Associate") {
      store.dispatch(HideLoader());
      ErrorToast("Associate With Product! Can't Delete.");
      return false;
    } else {
      store.dispatch(HideLoader());
      return true;
    }
  } catch (e) {
    store.dispatch(HideLoader());
    ErrorToast("Something went wrong!");
    return false;
  }
};
