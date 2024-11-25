import React, { useState } from "react";
import SaleInformation from "./SaleInformation";
import SaleProductTable from "./SaleProductTable";
import { FaSpinner } from "react-icons/fa";
import ProductSelectForm from "./ProductSelectForm";
import { useForm } from "react-hook-form";

const SaleCard = () => {
  return (
    <div className=" flex">
      <div className=" ">
      <ProductSelectForm />
      <SaleProductTable />
      </div>
      <div className=" ">
      <SaleInformation />
      </div>
    </div>
  );
};

export default SaleCard;
