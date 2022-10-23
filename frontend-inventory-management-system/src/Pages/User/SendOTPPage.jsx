import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
const SendOTP = lazy(() => import("../../Components/User/SendOTP"));
const SendOTPPage = () => {
  return (
    <Fragment>
      <Suspense fallback={LazyLoader}>
        <SendOTP />
      </Suspense>
    </Fragment>
  );
};

export default SendOTPPage;
