import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const CategoryList = lazy(() =>
  import("../../Components/Category/CategoryList")
);
const CategoryListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <CategoryList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CategoryListPage;
