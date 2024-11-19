import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PublicLayoud from "../features/public/components/PublicLayoud";
import NotFound from "../components/NotFound";
import AuthRoute from "./AuthRoute";
import DashboardLaoudRoute from "./DashboardRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayoud />,
    errorElement: <NotFound />,
    children: [...PublicRouter],
  },
  ...AuthRoute,
  ...DashboardLaoudRoute,
]);

export default router;
