import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const CustomerList = lazy(() =>
  import("../../Components/Customer/CustomerList")
);
const CustomerListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <CustomerList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CustomerListPage;
