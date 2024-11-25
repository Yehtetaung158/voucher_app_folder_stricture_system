import React, {lazy, Suspense } from "react";
import ProductRoute from "./ProductRoute";
import DashboardLaoud from "../features/dashboard/components/DashboardLaoud";
const DashboardPage = lazy(() => import("../features/dashboard/pages/DashboardPage"));
import VoucherRoute from "./VoucherRoute";
import SaleRoute from "./SaleRoute";
import UserRoute from "./UserRoute";

const DashboardLaoudRoute = [
  {
    path: "dashboard",
    element: <DashboardLaoud />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...ProductRoute,
      ...VoucherRoute,
      ...SaleRoute,
      ...UserRoute,
    ],
  },
];
export default DashboardLaoudRoute;
