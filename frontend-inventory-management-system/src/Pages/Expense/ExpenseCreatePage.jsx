import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseCreate = lazy(() =>
  import("../../Components/Expense/ExpenseCreate")
);
const ExpenseCreatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        {" "}
        <Suspense fallback={LazyLoader}>
          <ExpenseCreate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default ExpenseCreatePage;
