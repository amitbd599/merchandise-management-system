import toast, { Toaster } from "react-hot-toast";
let EmailRegx = /\S+@\S+\.\S+/;
let NumberRegx = /^[0-9]*$/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  IsMobile(value) {
    return MobileRegx.test(value);
  }
  IsNumber(value) {
    return NumberRegx.test(value);
  }
  IsEmail(value) {
    return !EmailRegx.test(value);
  }
  ErrorToast(msg) {
    toast.error(msg, {
      position: "top-center",
    });
  }
  SuccessToast(msg) {
    toast.success(msg, { position: "top-center" });
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
export const {
  IsEmpty,
  IsMobile,
  IsNumber,
  IsEmail,
  ErrorToast,
  getBase64,
  SuccessToast,
} = new FormHelper();
