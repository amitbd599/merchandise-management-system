import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ReturnList = lazy(() => import("../../Components/Return/ReturnList"));
const ReturnListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ReturnList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ReturnListPage;
