import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import { useCookies } from "react-cookie";
import { remove } from "lodash";

const LogOutBtn = () => {
  const navigate = useNavigate();
  const { removeUser } = useUserStore();
  const [cookies, , removeCookie] = useCookies(["user", "token"]);

  // Access cookies and handle default value
  const userFromCookie = cookies.user;

  // Handle the logout process
  const handleLogout = () => {
    removeCookie("user");
    removeCookie("token");
    removeUser();
    // removeUser(); // Make sure to actually remove the user from the store
  };

  useEffect(() => {
    if (!userFromCookie) {
      navigate("/"); // Navigate to home if no user found in cookies
    }
  }, [userFromCookie, navigate]);

  return (
    <button
      onClick={handleLogout}
      className="justify-end text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mt-auto"
    >
      <span>Logout</span>
    </button>
  );
};

export default LogOutBtn;

