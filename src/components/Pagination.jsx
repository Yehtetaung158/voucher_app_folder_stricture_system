import { get, set } from "lodash";
import React, { useState } from "react";
import { HiArrowLeft, HiArrowLongLeft, HiArrowRight } from "react-icons/hi2";
import {
  MdDoubleArrow,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const Pagination = ({
  moduleName,
  links: { prev, next, last, first } = {
    prev: null,
    next: null,
    last: null,
    first: null,
  },
  // meta: { total, to, from, links },
  meta: { total, to, from, links, current_page, last_page, path } = {
    total: null,
    to: null,
    from: null,
    current_page: null,
    last_page: null,
    links: [],
    path: "",
  },
  met,
  updateFetchUrl,
}) => {
  const pageLimits = [5, 10, 25, 50, 100, 150, 200];
  const [currentLimit, setCurrentLimit] = useState(5);
  const [params, setParams] = useSearchParams();

  const handleRowLimitSelect = (e) => {
    setCurrentLimit(e.target.value);
    setParams({ limit: Number(e.target.value) });
    const currentLimit = Number(e.target.value) ?? 5;
    updateFetchUrl(
      `${import.meta.env.VITE_API_URL}/${moduleName}?limit=${currentLimit}`
    );
  };
  return (
    <div className="flex justify-between items-center px-6">
      {/* Help text */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <b>{from ?? 0}</b> to <b>{to ?? 0}</b> of <b>{total ?? 0}</b>{" "}
        Entries
      </span>
      {/* Buttons */}
      <div className=" flex gap-2 justify-center items-center">
        <div className=" flex items-center gap-2">
          <label
            htmlFor="countries"
            className="block text-gray-700 text-sm text-nowrap dark:text-white"
          >
            Rows per page
          </label>
          <select
            onChange={handleRowLimitSelect}
            className="flex items-center justify-center h-10 text-sm font-medium border-y border rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            value={currentLimit}
          >
            {pageLimits.map(
              (limit, index) =>
                limit <= total && (
                  <option key={index} value={limit}>
                    {limit}
                  </option>
                )
            )}
            {total && <option value={total}>All ({total})</option>}
          </select>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-400">
          Showing <b>{current_page ?? 0}</b> page of <b>{last_page ?? 0}</b>{" "}
          pages
        </div>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={() => updateFetchUrl(first)}
            className="flex items-center justify-center size-10 text-sm font-medium text-stone-900  border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none "
          >
            {" "}
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button
            onClick={() => updateFetchUrl(prev)}
            className="flex items-center justify-center size-10 text-sm font-medium text-stone-900  border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none "
          >
            {" "}
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={() => updateFetchUrl(next)}
            className="flex items-center justify-center size-10 text-sm font-medium text-stone-900  border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none "
          >
            {" "}
            <MdKeyboardArrowRight />
          </button>
          <button
            onClick={() => updateFetchUrl(last)}
            className="flex items-center justify-center size-10 text-sm font-medium text-stone-900  border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none "
          >
            {" "}
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
