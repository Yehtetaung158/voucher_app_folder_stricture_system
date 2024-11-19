import React from "react";
import Container from "../../dashboard/components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductCreateFrom from "../components/ProductCreateFrom";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPage={"Create Product"}
          links={[{ title: "Product", path: "/dashboard/products" }]}
        />
        <ProductCreateFrom/>
      </Container>
    </section>
  );
};

export default ProductCreatePage;
