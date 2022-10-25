import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const SaleReport = lazy(() => import("../../Components/Report/SaleReport"));
const SaleReportPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <SaleReport />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default SaleReportPage;
