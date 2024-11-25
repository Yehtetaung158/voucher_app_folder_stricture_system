import React from "react";
import ProductSkeletonLoader from "./ProductSkeletonLoader";
import useSaleProductStore from "../../../store/useSaleProductStore";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { fetcher } from "../../../services/product";
import useSWR from "swr";

const SaleProductTable = () => {

    const { data, error, isLoading } = useSWR(
        `${import.meta.env.VITE_API_URL}/products`,
        fetcher
      );

    const {records,removeRecord}=useSaleProductStore();

    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.05;
    const grandTotal = total + tax;

  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Cost
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <ProductSkeletonLoader loadingRow={5} />
          ) : records.length === 0 ? (
            <>
              <tr className="text-center">
                <td colSpan="5" className="px-6 py-4 text-gray-500">
                  No products available.
                </td>
              </tr>
            </>
          ) : (
            records?.map((record, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 group "
              >
                <td className="px-6 py-4">{index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {record.product.product_name}
                </th>
                <td className="px-6 py-4">${record.product.price}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => decreaseQuantity(record.id, record.quantity)}
                    className=" opacity-0 group-hover:opacity-100"
                  >
                    <FaMinus />
                  </button>
                  <span>{record.quantity}</span>
                  <button
                    onClick={() => increaceQuantity(record.id)}
                    className=" opacity-0 group-hover:opacity-100"
                  >
                    <FaPlus />
                  </button>
                </td>
                <td
                  onClick={() => {
                    removeRecord(record.id),
                      toast.success("Record deleted successfully");
                  }}
                  className="px-6 py-4"
                >
                  <MdDelete className=" size-6 text-red-600 hover:text-red-800 " />
                </td>
                <td className="px-6 py-4">
                  ${parseInt(record.product.price) * parseInt(record.quantity)}
                </td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              colSpan="5"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-end"
            >
              Total
            </th>
            <td className="px-6 py-4">${total}</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan="5"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-end"
            >
              Tax(5%)
            </th>
            <td className="px-6 py-4">${tax}</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan="5"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-end"
            >
              grandTotal
            </th>
            <td className="px-6 py-4">${grandTotal}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default SaleProductTable;
