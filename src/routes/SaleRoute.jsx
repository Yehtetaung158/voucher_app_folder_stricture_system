import React, { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";
const SalePage = lazy(() => import("../features/sale/pages/SalePage"));

const SaleRoute = [{ path: "sale", element: <Suspense fallback={<PageLoading />}><SalePage /></Suspense> }];

export default SaleRoute;
