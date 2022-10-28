import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ExpenseTypeCreate = lazy(() =>
  import("../../Components/ExpenseType/ExpenseTypeCreate")
);
const ExpenseTypeCreatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        {" "}
        <Suspense fallback={LazyLoader}>
          <ExpenseTypeCreate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default ExpenseTypeCreatePage;
