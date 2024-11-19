import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { HiEye } from "react-icons/hi";
import { HiEyeSlash } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { register as authRegister } from "../../../services/auth";

const RegisterPage = () => {
  const nav = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fromSubmithandler = async (data) => {
    const respont = await authRegister(data);
    const json = await respont.json();
    console.log("I am json", json);
    if (respont.status === 200) {
      toast.success("Register successfully");
      nav("/login");
    } else {
      toast.error("Something is worng!");
    }
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-200 flex-col justify-center px-6 py-12 lg:px-8">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <svg
          className="mx-auto h-12 w-auto"
          xmlns="http://www.w3.org/2000/svg"
          width={300}
          height={150}
          viewBox="0 0 300 150"
        >
          <defs>
            <linearGradient
              id="metallicGradientY"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#FFD700", stopOpacity: 1 }}
              />{" "}
              <stop
                offset="100%"
                style={{ stopColor: "#FFA500", stopOpacity: 1 }}
              />{" "}
            </linearGradient>
            <linearGradient
              id="metallicGradientH"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#00FF00", stopOpacity: 1 }}
              />{" "}
              <stop
                offset="100%"
                style={{ stopColor: "#008000", stopOpacity: 1 }}
              />{" "}
            </linearGradient>
            <linearGradient
              id="metallicGradientA"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#1E90FF", stopOpacity: 1 }}
              />{" "}
              <stop
                offset="100%"
                style={{ stopColor: "#0000FF", stopOpacity: 1 }}
              />{" "}
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={4} result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <text
            x={30}
            y={90}
            fontFamily="Arial"
            fontSize={72}
            fontWeight="bold"
            filter="url(#glow)"
          >
            <tspan fill="url(#metallicGradientY)">Y</tspan>
            <tspan fill="url(#metallicGradientH)">H</tspan>
            <tspan fill="url(#metallicGradientA)">A</tspan>
          </text>
        </svg>
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(fromSubmithandler)}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900 text-start"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                {...register("name")}
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
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
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute inset-y-0 end-0 flex items-center px-2 text-gray-400"
              >
                {showPassword ? <HiEyeSlash /> : <HiEye />}
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password_confirmation"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirmation Password
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("password_confirmation")}
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                // type="text"
                autoComplete="current-password_confirmation"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          If you have an account.
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            <span className="underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
