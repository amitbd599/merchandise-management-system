import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseTypeList = lazy(() =>
  import("../../Components/ExpenseType/ExpenseTypeList")
);
const ExpenseTypeListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ExpenseTypeList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ExpenseTypeListPage;
