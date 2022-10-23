import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
const CreatePassword = lazy(() =>
  import("../../Components/User/CreatePassword")
);
const CreatePasswordPage = () => {
  return (
    <Fragment>
      <Suspense fallback={LazyLoader}>
        <CreatePassword />
      </Suspense>
    </Fragment>
  );
};

export default CreatePasswordPage;
