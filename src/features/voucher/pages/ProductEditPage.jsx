import React from "react";
import Container from "../../dashboard/components/Container";
import BreadCrumb from '../../../components/BreadCrumb'
import { useParams } from "react-router-dom";
import ProductEdit from "../components/ProductEdit";

const ProductEditPage = () => {
  const { id } = useParams();
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPage={"Create Edit"}
          links={[{ title: "Product", path: "/dashboard/products" }]}
        />
        <ProductEdit id={id}/>
      </Container>
    </section>
  );
};

export default ProductEditPage;
