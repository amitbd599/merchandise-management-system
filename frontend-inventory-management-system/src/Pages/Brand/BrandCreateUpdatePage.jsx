import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const BrandCreateUpdate = lazy(() =>
  import("../../Components/Brand/BrandCreateUpdate")
);
const BrandCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <BrandCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default BrandCreateUpdatePage;
