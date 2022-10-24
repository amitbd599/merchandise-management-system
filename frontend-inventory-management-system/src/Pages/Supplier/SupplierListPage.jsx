import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const SupplierList = lazy(() =>
  import("../../Components/Supplier/SupplierList")
);
const SupplierListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <SupplierList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default SupplierListPage;
