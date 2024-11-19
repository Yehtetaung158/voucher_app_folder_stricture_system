import React, { Suspense } from "react";
// import DashboardLaoud from '../components/DashboardLaoud'
import Header from "../components/Header";
import Container from "../components/Container";
import { Outlet } from "react-router-dom";

const DashboardLaoud = () => {
  return (
    <Container>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default DashboardLaoud;
