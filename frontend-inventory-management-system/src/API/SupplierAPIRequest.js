import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { getToken } from "../Helper/SessionHelper";

import { HideLoader, ShowLoader } from "../Redux/State-slice/Setting-Slice";
import {
  setSingleSupplier,
  setSupplierList,
  setSupplierListTotal,
} from "../Redux/State-slice/Supplier-Slice";
import store from "../Redux/Store/Store";

const TokenData = { headers: { token: getToken() } };

export const CreateSupplierRequestAPI = async (postBody) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/CreateSuppliers";
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

export const SupplierDetailsByID = async (id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/SupplierDetailsByID/" + id;
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());

    if (result.status === 200 && result.data["status"] === "Success") {
      store.dispatch(setSingleSupplier(result.data["data"][0]));

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

export const SupplierListRequestAPI = async (
  pageNo,
  perPage,
  SearchKeyword
) => {
  try {
    store.dispatch(ShowLoader());
    let URL =
      BaseURL +
      "/Suppliers-list/" +
      pageNo +
      "/" +
      perPage +
      "/" +
      SearchKeyword;
    const result = await axios.get(URL, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(setSupplierList(result.data["data"][0]["Rows"]));
        store.dispatch(
          setSupplierListTotal(result.data["data"][0]["Total"][0]["Count"])
        );

        return true;
      } else {
        store.dispatch(setSupplierList([]));
        store.dispatch(setSupplierListTotal(0));
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

export const SupplierUpdateRequestAPI = async (postBody, id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/UpdateSuppliers/" + id;
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(HideLoader());
    if (result.status === 200 && result.data["status"] === "Success") {
      SuccessToast("Supplier Update Successful.");
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

export const SupplierDeleteRequestAPI = async (id) => {
  try {
    store.dispatch(ShowLoader());
    let URL = BaseURL + "/DeleteSupplier/" + id;
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
