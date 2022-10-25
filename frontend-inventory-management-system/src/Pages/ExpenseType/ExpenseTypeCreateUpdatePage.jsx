import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseTypeCreateUpdate = lazy(() =>
  import("../../Components/ExpenseType/ExpenseTypeCreateUpdate")
);
const ExpenseTypeCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ExpenseTypeCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ExpenseTypeCreateUpdatePage;
