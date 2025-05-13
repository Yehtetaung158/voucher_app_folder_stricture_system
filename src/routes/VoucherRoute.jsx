import React, { Suspense } from "react";
import { lazy } from "react";
import PageLoading from "../components/PageLoading";
import VoucherCreatePage from "../features/voucher/pages/CreatePage";
const VoucherListPage = lazy(() => import("../features/voucher/pages/VoucherListPage"));
const VoucherDetailPage = lazy(() => import("../features/voucher/pages/VoucherDetailPage"));

const VoucherRoute = [
  {
    path: "voucher",
    element: <Suspense fallback={<PageLoading/>}><VoucherListPage /></Suspense>,
  },{
    path: "voucher/create",
    element: <Suspense fallback={<PageLoading/>}><VoucherCreatePage /></Suspense>,
  },
  {
    path: "voucher/detail/:id",
    element: <Suspense fallback={<PageLoading/>}><VoucherDetailPage /></Suspense>,
  },

];
export default VoucherRoute;
