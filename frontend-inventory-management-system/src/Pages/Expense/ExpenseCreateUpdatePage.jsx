import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseCreateUpdate = lazy(() =>
  import("../../Components/Expense/ExpenseCreateUpdate")
);
const ExpenseCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ExpenseCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ExpenseCreateUpdatePage; 
