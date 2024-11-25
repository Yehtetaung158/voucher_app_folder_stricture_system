import React from "react";
import SaleCard from "../components/SaleCard";
import BreadCrumb from "../../../components/BreadCrumb";

const SalePage = () => {
  return (
    <div>
      <BreadCrumb currentPage="Sale" />
      <SaleCard />
    </div>
  );
};

export default SalePage;
