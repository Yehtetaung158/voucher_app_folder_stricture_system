import React from "react";
import HomePage from "../features/public/Pages/HomePage";
import AboutPage from "../features/public/Pages/AboutPage";
import ContactPage from "../features/public/Pages/ContactPage";

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
