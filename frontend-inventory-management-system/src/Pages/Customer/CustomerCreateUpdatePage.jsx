import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const CustomerCreateUpdate = lazy(() =>
  import("../../Components/Customer/CustomerCreateUpdate")
);
const CustomerCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        {" "}
        <Suspense fallback={LazyLoader}>
          <CustomerCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default CustomerCreateUpdatePage;
