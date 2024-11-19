import React from "react";
import { HiArrowLeft, HiArrowLongLeft, HiArrowRight } from "react-icons/hi2";
import {
  MdDoubleArrow,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  links: { prev, next, last, first } = {
    prev: null,
    next: null,
    last: null,
    first: null,
  },
  // meta: { total, to, from, links },
  meta: { total, to, from, links,current_page,last_page } = {
    total: null,
    to: null,
    from: null,
    current_page: null,
    last_page: null,
    links: [],
  },
  met,
  updateFetchUrl,
}) => {
  console.log(met);
  return (
    <div className="flex justify-between items-center px-6">
      {/* Help text */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <b>{from ?? 0}</b> to <b>{to ?? 0}</b> of <b>{total ?? 0}</b>{" "}
        Entries
      </span>
      {/* Buttons */}
      <div className=" flex gap-2 justify-center items-center">
        <div className="text-sm text-gray-700 dark:text-gray-400">Showing <b>{current_page ?? 0}</b> page of <b>{last_page ?? 0}</b> pages</div>
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
