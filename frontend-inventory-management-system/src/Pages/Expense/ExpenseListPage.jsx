import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseList = lazy(() => import("../../Components/Expense/ExpenseList"));
const ExpenseListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ExpenseList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ExpenseListPage;
