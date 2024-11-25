import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoading from "../components/PageLoading";

const UserProfilePage = lazy(() => import("../features/user-profile/pages/UserProfilePage"));
const ChangeNamePage = lazy(() => import("../features/user-profile/pages/ChangeNamePage"));
const ChangeEmailPage = lazy(() => import("../features/user-profile/pages/ChangeEmailPage"));
const ChangePasswordPage = lazy(() => import("../features/user-profile/pages/ChangePasswordPage"));
const ChagneProfileImg = lazy(() => import("../features/user-profile/pages/ChagneProfileImg"));

const UserRoute = [
  {
    path: "profile",
    element: (
      <Suspense fallback={<PageLoading/>}>
        <UserProfilePage />
      </Suspense>
    ),
  },
  {
    path: "profile/change_img",
    element: (
      <Suspense fallback={<PageLoading/>}>
        <ChagneProfileImg />
      </Suspense>
    ),
  },
  {
    path: "profile/change_name",
    element: (
      <Suspense fallback={<PageLoading/>}>
        <ChangeNamePage />
      </Suspense>
    ),
  },
  {
    path: "profile/change_email",
    element: (
      <Suspense fallback={<PageLoading/>}>
        <ChangeEmailPage />
      </Suspense>
    ),
  },
  {
    path: "profile/change_password",
    element: (
      <Suspense fallback={<PageLoading/>}>
        <ChangePasswordPage />
      </Suspense>
    ),
  },
];

export default UserRoute;


