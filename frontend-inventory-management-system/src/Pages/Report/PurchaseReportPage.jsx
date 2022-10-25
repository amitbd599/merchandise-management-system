import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const PurchaseReport = lazy(() =>
  import("../../Components/Report/PurchaseReport")
);
const PurchaseReportPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <PurchaseReport />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default PurchaseReportPage;
