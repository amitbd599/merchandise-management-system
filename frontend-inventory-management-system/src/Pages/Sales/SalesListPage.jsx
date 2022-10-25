import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const SalesList = lazy(() => import("../../Components/Sales/SalesList"));
const SalesListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <SalesList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default SalesListPage;
