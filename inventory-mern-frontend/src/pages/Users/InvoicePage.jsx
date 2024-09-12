import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const ShowInvoiceDetails = lazy(() => import('../../components/MasterLayout/ShowInvoiceDetails'));
const InvoicePage = () => {
    return (
        <Fragment>
            <>
                <Suspense fallback={<LazyLoader />}>
                    <ShowInvoiceDetails />
                </Suspense>
            </>
        </Fragment>
    );
};
export default InvoicePage;