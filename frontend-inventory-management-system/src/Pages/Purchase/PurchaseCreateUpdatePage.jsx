import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const PurchaseCreateUpdate = lazy(() =>
  import("../../Components/Purchase/PurchaseCreateUpdate")
);
const PurchaseCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <PurchaseCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default PurchaseCreateUpdatePage;
