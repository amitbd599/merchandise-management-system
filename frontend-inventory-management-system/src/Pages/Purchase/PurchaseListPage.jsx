import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const PurchaseList = lazy(() =>
  import("../../Components/Purchase/PurchaseList")
);
const PurchaseListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <PurchaseList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default PurchaseListPage;
