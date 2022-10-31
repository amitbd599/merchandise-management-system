import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseUpdate = lazy(() =>
  import("../../Components/Expense/ExpenseUpdate")
);
const ExpenseUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        {" "}
        <Suspense fallback={LazyLoader}>
          <ExpenseUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default ExpenseUpdatePage;
