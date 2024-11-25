import React, { Suspense, useEffect } from "react";
// import DashboardLaoud from '../components/DashboardLaoud'
import Header from "../components/Header";
import Container from "../components/Container";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useUserStore from "../../../store/useUserStore";
import PageLoading from "../../../components/PageLoading";

const DashboardLaoud = () => {
  const nav = useNavigate();
  const [token, setToken] = useCookies("token");
  const [user, setUserCookie] = useCookies("user");
  const { setUser } = useUserStore();
  useEffect(() => {
    if (user.user) {
      setUser(user.user);
    }
  }, [user]);
  if (!token || !user) {
    nav("/");
  }
  return (
    <Container>
      <Header />
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default DashboardLaoud;
