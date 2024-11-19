import React, { useEffect } from "react";
import { FaDatabase } from "react-icons/fa";
import { SiDask } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import ModuleBtn from "../components/ModuleBtn";
import Container from "../components/Container";
import LogOutBtn from "../../../components/LogOutBtn";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { set } from "lodash";
import useUserStore from "../../../store/useUserStore";

const DashboardPage = () => {
  const nav = useNavigate();
  const [token, setToken] = useCookies("token");
  const [user, setUserCookie] = useCookies("user");
  const { setUser } = useUserStore();
  useEffect(() => {
    setUser(user);
  }, [user]);
  if (!token.token || !user.user) {
    nav("/");
  }
  return (
    <section >
      <Container>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <ModuleBtn
              name={"Product"}
              icon={<FaDatabase className={"size-14"} />}
              url={"/dashboard/products"}
            />
          </div>{" "}
          <div>
            <ModuleBtn
              name={"Sale"}
              icon={<SiDask className={"size-14"} />}
              url={"/dashboard/sale"}
            />
          </div>{" "}
          <div>
            <ModuleBtn
              name={"Voucher"}
              icon={<IoNewspaper className={"size-14"} />}
              url={"/dashboard/voucher"}
            />
          </div>
          <div>
            <ModuleBtn
              name={"User"}
              icon={<BiUser className={"size-14"} />}
              url={"/dashboard/user"}
            />
          </div>
        </div>
      </Container>
      <div className=" mt-10">
        <LogOutBtn />
      </div>
    </section>
  );
};

export default DashboardPage;
