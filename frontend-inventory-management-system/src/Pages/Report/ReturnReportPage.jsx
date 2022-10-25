import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ReturnReport = lazy(() => import("../../Components/Report/ReturnReport"));
const ReturnReportPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ReturnReport />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ReturnReportPage;
