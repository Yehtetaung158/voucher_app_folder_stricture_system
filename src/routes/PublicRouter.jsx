import React, { lazy, Suspense } from "react";
const HomePage = lazy(() => import("../features/public/Pages/HomePage"));
const AboutPage = lazy(() => import("../features/public/Pages/AboutPage"));
const ContactPage = lazy(() => import("../features/public/Pages/ContactPage"));


const PublicRouter = [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
];
export default PublicRouter;
