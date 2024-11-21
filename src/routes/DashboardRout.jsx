import React, { Suspense } from "react";
import ProductRoute from "./ProductRoute";
import DashboardLaoud from "../features/dashboard/components/DashboardLaoud";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import VoucherRoute from "./VoucherRoute";

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
    ],
  },
];
export default DashboardLaoudRoute;
