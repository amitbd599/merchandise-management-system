import React, { Fragment, Suspense } from "react";
import { lazy } from "react";
import LazyLoader from "../../Components/MasterLayout/LazyLoader";
import MasterLayout from "../../Components/MasterLayout/MasterLayout";
const ProductCreateUpdate = lazy(() =>
  import("../../Components/Product/ProductCreateUpdate")
);
const ProductCreateUpdatePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={LazyLoader}>
          <ProductCreateUpdate />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default ProductCreateUpdatePage;
