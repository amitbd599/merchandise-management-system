import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ProductList = lazy(() => import("../../Components/Product/ProductList"));
const ProductListPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ProductList />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ProductListPage;
