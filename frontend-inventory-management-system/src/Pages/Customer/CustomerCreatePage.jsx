import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const CustomerCreate = lazy(() =>
  import("../../Components/Customer/CustomerCreate")
);
const CustomerCreatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        {" "}
        <Suspense fallback={LazyLoader}>
          <CustomerCreate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default CustomerCreatePage;
