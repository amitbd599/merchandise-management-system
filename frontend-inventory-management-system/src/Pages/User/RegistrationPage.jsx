import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
const Registration = lazy(() => import("../../Components/User/Registration"));
const RegistrationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={LazyLoader}>
        <Registration />
      </Suspense>
    </Fragment>
  );
};

export default RegistrationPage;
