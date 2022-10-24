import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const SupplierCreateUpdate = lazy(() =>
  import("../../Components/Supplier/SupplierCreateUpdate")
);
const SupplierCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <SupplierCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default SupplierCreateUpdatePage;
