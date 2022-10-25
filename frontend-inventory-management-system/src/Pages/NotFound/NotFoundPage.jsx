import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const NotFound = lazy(() => import("../../Components/NotFound/NotFound"));
const NotFoundPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <NotFound />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default NotFoundPage;
