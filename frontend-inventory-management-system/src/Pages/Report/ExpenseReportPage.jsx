import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseReport = lazy(() =>
  import("../../Components/Report/ExpenseReport")
);
const ExpenseReportPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ExpenseReport />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ExpenseReportPage;
