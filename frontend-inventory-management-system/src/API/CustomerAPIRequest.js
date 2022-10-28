import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { getToken } from "../Helper/SessionHelper";
import {
  setCustomerList,
  setCustomerListTotal,
  setSingleCustomer,
} from "../Redux/State-slice/Customer-Slice";
import { HideLoader, ShowLoader } from "../Redux/State-slice/Setting-Slice"; 
import store from "../Redux/Store/Store";

const TokenData = { headers: { token: getToken() } };

export const CreateCustomerRequestAPI = async (postBody) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/CreateCustomerService";
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      SuccessToast("Request Success.");
      return true;
    } else if (
      result.status === 200 &&
      result.data["status"] === "Fail" &&
      result.data["data"]["keyPattern"]["Phone"] === 1
    ) {
      ErrorToast("Mobile Number Already Used!");
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

export const CustomerDetailsByID = async (id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/CustomerDetailsByID/" + id;
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());

    if (result.status === 200 && result.data["status"] === "Success") {
      store.dispatch(setSingleCustomer(result.data["data"][0]));

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

export const CustomerListRequestAPI = async (
  pageNo,
  perPage,
  SearchKeyword
) => {
  try {
    store.dispatch(ShowLoader());
    let URL =
      BaseURL + "/CustomerList/" + pageNo + "/" + perPage + "/" + SearchKeyword;
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(setCustomerList(result.data["data"][0]["Rows"]));
        store.dispatch(
          setCustomerListTotal(result.data["data"][0]["Total"][0]["Count"])
        );

        return true;
      } else {
        store.dispatch(setCustomerList([]));
        store.dispatch(setCustomerListTotal(0));
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

export const CustomerUpdateRequestAPI = async (postBody, id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/UpdateCustomer/" + id;
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      SuccessToast("Customer Update Successful.");
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

export const CustomerDeleteRequestAPI = async (id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/DeleteCustomer/" + id;
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
