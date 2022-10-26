import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const CustomerUpdate = lazy(() =>
  import("../../Components/Customer/CustomerUpdate")
);
const CustomerUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        {" "}
        <Suspense fallback={LazyLoader}>
          <CustomerUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default CustomerUpdatePage;
