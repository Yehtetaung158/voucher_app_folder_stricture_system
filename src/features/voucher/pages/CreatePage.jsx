import React from "react";
import Container from "../../dashboard/components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductCreateFrom from "../components/ProductCreateFrom";

const VoucherCreatePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPage={"Create Voucher"}
          links={[{ title: "Voucher", path: "/dashboard/voucher" }]}
        />
        <ProductCreateFrom/>
      </Container>
    </section>
  );
};

export default VoucherCreatePage;
