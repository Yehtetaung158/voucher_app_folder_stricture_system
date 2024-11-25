import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSaleProductStore from "../../../store/useSaleProductStore";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const SaleInformation = () => {
  const [isSending, setIsSending] = useState(false);
  const nav = useNavigate();
  const [token] = useCookies(["token"]);
  const { records, isLoading, removeRecord, changeRecordQuantity, mutate } =
    useSaleProductStore();

  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      changeRecordQuantity(id, -1);
    }
  };

  const increaceQuantity = (id) => {
    changeRecordQuantity(id, +1);
  };

  function generateVoucherId(length = 8) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let voucherId = "";
    for (let i = 0; i < length; i++) {
      voucherId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return voucherId;
  }

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const total = records.reduce((a, b) => a + b.cost, 0);
  const tax = total * 0.05;
  const grandTotal = total + tax;

  const handleForm = async (data) => {
    setIsSending(true);
    const currentVoucher = {
      voucher_id: data.voucherId,
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      sale_date: data.saleDate,
      all_correct: true,
      records,
      total: total,
      tax: tax,
      net_total: grandTotal,
    };
    const response = await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    setIsSending(false);

    const json = await response.json();

    if (response.status === 201) {
      reset();
      if (data.back) {
        return nav(`/dashboard/voucher/detail/${json.data.id}`);
      }
    }
  };

  return (
    <form
      id="voucherInfo"
      onSubmit={handleSubmit(handleForm)}
      className="flex flex-col h-full "
    >
      <div className="flex flex-col">
        <label
          htmlFor="voucherId"
          className={` ${
            errors.voucherId ? "text-red-500" : "text-gray-900"
          } block mb-2 text-sm font-medium  dark:text-white`}
        >
          Voucher ID
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            {...register("voucherId", {
              required: true,
              maxLength: 30,
            })}
            type="text"
            name="voucherId"
            id="voucherId"
            defaultValue={generateVoucherId()}
            className={` ${
              errors.voucherId
                ? " border-red-500 focus:ring-red-500 focus:border-red-500 "
                : " border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
    placeholder="Kyaw Kyaw`}
          />
        </div>
        {errors.voucherId?.type === "required" && (
          <p className=" text-red-500 text-xs">VoucherId is required</p>
        )}
        {errors.voucherId?.type === "maxLength" && (
          <p className=" text-red-500 text-xs">VoucherId must lass then 30</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="customerName"
          className={` ${
            errors.customerName ? "text-red-500" : "text-gray-900"
          } block mb-2 text-sm font-medium  dark:text-white`}
        >
          Customer Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            {...register("customerName", {
              required: true,
              maxLength: 30,
              minLength: 3,
            })}
            type="text"
            name="customerName"
            id="customerName"
            className={` ${
              errors.customerName
                ? " border-red-500 focus:ring-red-500 focus:border-red-500 "
                : " border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
      placeholder="Kyaw Kyaw`}
          />
        </div>
        {errors.customerName?.type === "required" && (
          <p className=" text-red-500 text-xs">CustomerName is required</p>
        )}
        {errors.customerName?.type === "maxLength" && (
          <p className=" text-red-500 text-xs">
            CustomerName must lass then 30
          </p>
        )}
        {errors.customerName?.type === "minLength" && (
          <p className=" text-red-500 text-xs">
            CustomerName must greater then 3
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="customerEmail"
          className={` ${
            errors.customerEmail ? "text-red-500" : "text-gray-900"
          } block mb-2 text-sm font-medium  dark:text-white`}
        >
          Customer Email
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            {...register("customerEmail", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            type="email"
            name="customerEmail"
            id="customerEmail"
            className={` ${
              errors.customerEmail
                ? " border-red-500 focus:ring-red-500 focus:border-red-500 "
                : " border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
        placeholder="Kyaw Kyaw`}
          />
        </div>
        {errors.customerEmail?.type === "required" && (
          <p className=" text-red-500 text-xs">CustomerEmail is required</p>
        )}
        {errors.customerEmail?.type === "pattern" && (
          <p className=" text-red-500 text-xs">
            CustomerEmail is not valid, please enter a valid email
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="saleDate"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Sale Date
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            {...register("saleDate")}
            type="date"
            name="saleDate"
            id="saleDate"
            defaultValue={getCurrentDate()}
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex items-start justify-center mt-auto flex-col pt-5 gap-3">
        <div className="flex items-center gap-2">
          <input
            {...register("isAccept")}
            className="w-4 h-4  text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            form="voucherInfo"
            type="checkbox"
            id="isAccept"
            name="isAccept"
            required
          />
          <label htmlFor="isAccept">Accept all data</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            {...register("back")}
            className="w-4 h-4  text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            form="voucherInfo"
            type="checkbox"
            id="back"
            name="back"
          />
          <label htmlFor="back">Redirect to voucher detail</label>
        </div>
        <button
          form="voucherInfo"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          {isSending ? <FaSpinner className="animate-spin" /> : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default SaleInformation;
