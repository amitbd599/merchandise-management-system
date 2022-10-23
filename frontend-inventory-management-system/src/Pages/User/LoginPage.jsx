import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
const Login = lazy(() => import("../../Components/User/Login"));
const LoginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={LazyLoader}>
        <Login />
      </Suspense>
    </Fragment>
  );
};

export default LoginPage;
