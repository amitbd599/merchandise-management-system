import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const BrandList = lazy(() => import("../../Components/Brand/BrandList"));
const BrandListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <BrandList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default BrandListPage;
