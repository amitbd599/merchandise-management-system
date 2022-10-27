import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const SupplierUpdate = lazy(() =>
  import("../../Components/Supplier/SupplierUpdate")
);
const SupplierUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        {" "}
        <Suspense fallback={LazyLoader}>
          <SupplierUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default SupplierUpdatePage;
