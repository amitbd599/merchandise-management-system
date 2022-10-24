import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
const Dashboard = lazy(() => import("../../Components/Dashboard/Dashboard"));
const DashboardPage = () => {
  return (
    <Fragment>
      <Suspense fallback={LazyLoader}>
        <Dashboard />
      </Suspense>
    </Fragment>
  );
};

export default DashboardPage;
