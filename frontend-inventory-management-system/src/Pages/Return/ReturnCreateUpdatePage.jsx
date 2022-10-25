import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ReturnCreateUpdate = lazy(() =>
  import("../../Components/Return/ReturnCreateUpdate")
);
const ReturnCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ReturnCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default ReturnCreateUpdatePage;
