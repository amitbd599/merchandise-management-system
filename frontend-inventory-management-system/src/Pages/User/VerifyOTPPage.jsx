import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
const VerifyOTP = lazy(() => import("../../Components/User/VerifyOTP"));
const VerifyOTPPage = () => {
  return (
    <Fragment>
      <Suspense fallback={LazyLoader}>
        <VerifyOTP />
      </Suspense>
    </Fragment>
  );
};
export default VerifyOTPPage;
