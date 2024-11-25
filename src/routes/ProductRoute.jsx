import React, { Suspense } from "react";
import { lazy } from "react";
const ProductListPage = lazy(() => import("../features/product/pages/ProductListPage"));
const ProductCreatePage = lazy(() => import("../features/product/pages/ProductCreatePage"));
const ProductEditPage = lazy(() => import("../features/product/pages/ProductEditPage"));

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
