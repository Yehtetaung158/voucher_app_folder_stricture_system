import React, { useEffect } from "react";
import { FaDatabase } from "react-icons/fa";
import { SiDask } from "react-icons/si";
import { IoHomeOutline, IoNewspaper } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import ModuleBtn from "../components/ModuleBtn";
import Container from "../components/Container";
import LogOutBtn from "../../../components/LogOutBtn";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { set } from "lodash";
import useUserStore from "../../../store/useUserStore";
import { HiHome } from "react-icons/hi";

const DashboardPage = () => {
  return (
    <section>
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
              url={"/dashboard/profile"}
            />
          </div>
        </div>
      </Container>
      <div className=" mt-10 flex justify-between items-center">
        <Link to={"/"}>
          <button className=" justify-end text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mt-auto flex items-center gap-2">
            <IoHomeOutline className=" size-4" />
            <span>HOME</span>
          </button>
        </Link>
        <LogOutBtn />
      </div>
    </section>
  );
};

export default DashboardPage;
