import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/auth";
import useUserStore from "../../../store/useUserStore";
import Logo from "../../../components/Logo";
import ButtonSpinner from "../../../components/ButtonSpinner";

const LoginForm = () => {
  const [, setToken] = useCookies("token");
  const [, setUserCookie] = useCookies("user");
  const nav = useNavigate();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const formHandle = async (data) => {
    try {
      const response = await login(data);
      const json = await response.json();
      setToken("token", json.token);
      setUserCookie("user", JSON.stringify(json.user));
      if (response.status === 200) {
        toast.success("Login successfully");
        nav("/dashboard");
      } else {
        toast.error("Something is wrong");
      }
    } catch (error) {
      toast.error("Failed to login. Please try again.");
    } finally {
      reset();
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Link to="/" className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <Logo />
      </Link>
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(formHandle)}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900 text-start"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email")}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2 relative">
              <input
                {...register("password")}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 "
              >
                {showPassword ? (
                  <AiFillEyeInvisible
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiFillEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </button>
            </div>
          </div>
          <div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isSubmitting ? <>Loading ...<ButtonSpinner/></> : "Sign in"}
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          I don't have an account.
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            <span className="underline">Register</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
