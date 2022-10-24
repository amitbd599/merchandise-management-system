import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const Dashboard = lazy(() => import("../../Components/Dashboard/Dashboard"));
const DashboardPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <Dashboard />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default DashboardPage;
