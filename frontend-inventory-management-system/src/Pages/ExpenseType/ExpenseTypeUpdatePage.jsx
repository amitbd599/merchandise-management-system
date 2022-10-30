import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseTypeUpdate = lazy(() =>
  import("../../Components/ExpenseType/ExpenseTypeUpdate")
);
const ExpenseTypeUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ExpenseTypeUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ExpenseTypeUpdatePage;
