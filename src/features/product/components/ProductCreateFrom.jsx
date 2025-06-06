import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { pulsar } from "ldrs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { createFetcher } from "../../../services/product";

pulsar.register();

const ProductCreateFrom = () => {
  const notify = () => toast.success("Product is seved");
  const [isSending, setIsSending] = useState(false);
  const [token] = useCookies(["token"]);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleForm = async (data) => {
    setIsSending(true);
    await createFetcher({products_name:data.products_name,price:data.price});
    reset();
    setIsSending(false);
    notify();
    if (data.back) {
      nav("/dashboard/products");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="max-w-sm mx-auto mt-5 text-start"
    >
      <div className=" mb-3">
        <h1 className=" text-2xl font-bold text-gray-700">Product Create</h1>
        <p className=" text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          doloribus labore ea.
        </p>
      </div>

      <div className="mb-5">
        <label
          htmlFor="name"
          className={` ${
            errors.products_name ? "text-red-500" : "text-gray-900"
          } block mb-2 text-sm font-medium  dark:text-white`}
        >
          Product Name
        </label>
        <input
          {...register("products_name", {
            required: true,
            minLength: 3,
            maxLength: 30,
          })}
          type="name"
          id="products_name"
          className={` ${
            errors.products_name
              ? " border-red-500 focus:ring-red-500 focus:border-red-500 "
              : " border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          } bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          placeholder="Kyaw Kyaw`}
        />
        {errors.products_name?.type === "required" && (
          <p className=" text-red-500 text-xs">First name is required</p>
        )}
        {errors.products_name?.type === "minLength" && (
          <p className=" text-red-500 text-xs">Name must more than 3</p>
        )}
        {errors.products_name?.type === "maxLength" && (
          <p className=" text-red-500 text-xs">Name must lass then 30</p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className={` ${
            errors.price ? "text-red-500" : "text-gray-900"
          } block mb-2 text-sm font-medium  dark:text-white`}
        >
          Price
        </label>
        <input
          {...register("price", { required: true, min: 100, max: 30000 })}
          type="number"
          id="price"
          className={` ${
            errors.price
              ? " border-red-500 focus:ring-red-500 focus:border-red-500 "
              : " border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          } bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          placeholder="Kyaw Kyaw`}
        />
        {errors.price?.type === "required" && (
          <p className=" text-red-500 text-xs">First price is required</p>
        )}
        {errors.price?.type === "min" && (
          <p className=" text-red-500 text-xs">price must more than 100</p>
        )}
        {errors.price?.type === "max" && (
          <p className=" text-red-500 text-xs">price must lass then 30000</p>
        )}
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            defaultValue
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>

        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>

      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="back"
            {...register("back")}
            type="checkbox"
            defaultValue
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>

        <label
          htmlFor="back"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Back to product list after saving
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isSending ? (
          <span className=" inline-flex gap-2">
            <>Saving</>
            <l-pulsar size="20" speed="1.75" color="white"></l-pulsar>
          </span>
        ) : (
          <>Save</>
        )}
      </button>
    </form>
  );
};

export default ProductCreateFrom;
