import React, { Suspense } from "react";
import { lazy } from "react";
import ProductListPage from "../features/product/pages/ProductListPage";
import ProductCreatePage from "../features/product/pages/ProductCreatePage";
import ProductEditPage from "../features/product/pages/ProductEditPage";

const ProductRoute = [
  {
    path: "products",
    element: <ProductListPage />,
  },
  {
    path: "products/edit/:id",
    element: <ProductEditPage />,
  },
  {
    path: "products/create",
    element: <ProductCreatePage />,
  },
];
export default ProductRoute;
