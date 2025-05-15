import React, { useState } from "react";
import SaleInformation from "./SaleInformation";
import SaleProductTable from "./SaleProductTable";
import { FaSpinner } from "react-icons/fa";
import ProductSelectForm from "./ProductSelectForm";
import { useForm } from "react-hook-form";
import { f } from "html2pdf.js";
import useSaleProductStore from "../../../store/useSaleProductStore";

const SaleCard = () => {
  const [mobileSellTable, setMobileSellTable] = useState(true);
  const { records } = useSaleProductStore();
  return (
    <div className=" flex max-sm:flex-col-reverse gap-4">
      {mobileSellTable && (
        <div className=" ">
          <ProductSelectForm />
          <div className=" max-sm:hidden">
            <SaleProductTable />
          </div>
          <button
            onClick={() => setMobileSellTable(false)}
            className=" sm:hidden bg-blue-500 text-white px-4 py-2 rounded-md relative"
          >
            {records.length > 0 && (
              <span className=" mt-4 absolute -top-2 -right-2 p-1 px-2 rounded-full bg-red-500">
                {records.length}
              </span>
            )}
            Sale ProductTable
          </button>
        </div>
      )}
      {mobileSellTable && (
        <div className=" ">
          <SaleInformation />
        </div>
      )}
      {
        !mobileSellTable && (
          <SaleProductTable />
        )
      }
    </div>
  );
};

export default SaleCard;
