import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const SalesCreateUpdate = lazy(() =>
  import("../../Components/Sales/SalesCreateUpdate")
);
const SalesCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <SalesCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default SalesCreateUpdatePage;
