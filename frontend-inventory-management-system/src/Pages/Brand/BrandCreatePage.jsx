import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const BrandCreate = lazy(() => import("../../Components/Brand/BrandCreate"));
const BrandCreatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <BrandCreate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default BrandCreatePage;
