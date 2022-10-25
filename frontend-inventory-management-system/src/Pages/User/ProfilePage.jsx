import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const Profile = lazy(() => import("../../Components/User/Profile"));
const ProfilePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <Profile />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ProfilePage;
