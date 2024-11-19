import React, { Suspense } from "react";
import ProductRoute from "./ProductRoute";
import DashboardLaoud from "../features/dashboard/components/DashboardLaoud";
import DashboardPage from "../features/dashboard/pages/DashboardPage";

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
    ],
  },
];
export default DashboardLaoudRoute;
