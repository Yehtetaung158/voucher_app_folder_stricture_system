import React from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

const Sortable = ({ children, handleSort, sort_by, align }) => {
  const [params, setParams]=useSearchParams();
  return (
    <div
      className={`flex items-center gap-1 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <span className=" flex flex-col">
        <button
          className=" hover:bg-stone-300"
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "asc",
            limit: Number(params.get('limit')) ?? 5,
          })}
        >
          <LuChevronUp />
        </button>
        <button
          className=" hover:bg-stone-300"
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "desc",
            limit: Number(params.get('limit')) ?? 5,
          })}
        >
          <LuChevronDown />
        </button>
      </span>
      <span>{children}</span>
    </div>
  );
};

export default Sortable;