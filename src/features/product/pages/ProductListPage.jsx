import React from 'react'
import ProductList from '../components/ProductList'
import BreadCrumb from '../../../components/BreadCrumb'

const ProductListPage = () => {
  return (
    <div>
      <BreadCrumb currentPage="Product"/>
      <ProductList/>
    </div>
  )
}

export default ProductListPage