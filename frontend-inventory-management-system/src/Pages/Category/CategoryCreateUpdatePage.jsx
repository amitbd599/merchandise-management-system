import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const CategoryCreateUpdate = lazy(() =>
  import("../../Components/Category/CategoryCreateUpdate")
);
const CategoryCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <CategoryCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CategoryCreateUpdatePage;
