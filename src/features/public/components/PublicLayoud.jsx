import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";

const PublicLayoud = () => {
  return (
    <main className=" flex min-h-screen flex-col">
      <Header />
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayoud;
