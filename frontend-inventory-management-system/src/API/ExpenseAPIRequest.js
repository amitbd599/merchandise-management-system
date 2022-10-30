import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { getToken } from "../Helper/SessionHelper";
import {
  setExpenseList,
  setExpenseListTotal,
  setSingleExpense,
} from "../Redux/State-slice/Expense-Slice";
import { HideLoader, ShowLoader } from "../Redux/State-slice/Setting-Slice";
import store from "../Redux/Store/Store";

const TokenData = { headers: { token: getToken() } };

export const CreateExpenseRequestAPI = async (postBody) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/createExpenses";
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      SuccessToast("Request Success.");
      return true;
    } else if (result.status === 200 && result.data["status"] === "Fail") {
      ErrorToast("Request Fail.");
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

export const ExpenseDetailsByID = async (id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/ExpensesDetailsByID/" + id;
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());

    if (result.status === 200 && result.data["status"] === "Success") {
      store.dispatch(setSingleExpense(result.data["data"][0]));

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

export const ExpenseListRequestAPI = async (pageNo, perPage, SearchKeyword) => {
  try {
    store.dispatch(ShowLoader());
    let URL =
      BaseURL + "/Expense-list/" + pageNo + "/" + perPage + "/" + SearchKeyword;
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(setExpenseList(result.data["data"][0]["Rows"]));
        store.dispatch(
          setExpenseListTotal(result.data["data"][0]["Total"][0]["count"])
        );

        return true;
      } else {
        store.dispatch(setExpenseList([]));
        store.dispatch(setExpenseListTotal(0));
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

export const ExpenseUpdateRequestAPI = async (postBody, id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/UpdateExpenses/" + id;
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      SuccessToast("Expense Update Successful.");
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

export const ExpenseDeleteRequestAPI = async (id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/DeleteExpense/" + id;
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
