import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const SupplierCreate = lazy(() =>
  import("../../Components/Supplier/SupplierCreate")
);
const SupplierCreatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <SupplierCreate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default SupplierCreatePage;
