import React, { Suspense } from "react";
import { lazy } from "react";
import VoucherListPage from "../features/voucher/pages/VoucherListPage";
import VoucherDetailPage from "../features/voucher/pages/VoucherDetailPage";

const VoucherRoute = [
  {
    path: "voucher",
    element: <VoucherListPage />,
  },
  {
    path: "voucher/detail/:id",
    element: <VoucherDetailPage />,
  },
];
export default VoucherRoute;
