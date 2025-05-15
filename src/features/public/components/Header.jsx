import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import useUserStore from "../../../store/useUserStore";
import { useCookies } from "react-cookie";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser, removerUser } = useUserStore(); 
  // const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]); 



  // const userCookies = cookies.user || null; 
  // useEffect(() => {
  //   if (userCookies) {
  //     setUser({ user: userCookies }); 
  //   } else {
  //     setUser({ user: null });
  //   }
  // }, [userCookies, setUser]); 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleLogout = () => {
  //   removeCookie("user");
  //   removeCookie("token");
  //   removerUser();
  // };


  const UserProfile = () => (
    <div className="flex gap-5 items-center">
      <img
        className="size-12 rounded-full"
        src={
          user?.profile_image ||
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        }
        alt="user profile"
      />
      <div>
        <h1 className="text-3xl font-bold">{user?.name}</h1>
      </div>
    </div>
  );

  const NavLinks = () => (
    <>
      <NavLink
        to="/"
        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent"
      >
        Contact
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent"
        >
          Dashboard
        </NavLink>
      )}
      {/* {user?.user && (
        <button
          onClick={handleLogout}
          className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent"
        >
          Logout
        </button>
      )} */}
    </>
  );

  return (
    <header>
      <nav className=" bg- border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 bg-white flex justify-between items-center">
        <div className="flex flex-wrap justify-between items-center w-full">
          {user ? (
            <UserProfile />
          ) : (
            <div className="flex items-center lg:order-2">
              <Link
                to="/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <button
          type="button"
          className="relative inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleDropdown}
        >
          <BiMenu className="w-6 h-6" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
            <NavLinks />
          </div>
        )}

        <div className="hidden lg:flex lg:items-center lg:justify-between w-full lg:w-auto">
          <ul className="flex space-x-8 mt-0 font-medium">
            <NavLinks />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
