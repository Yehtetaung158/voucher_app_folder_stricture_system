import React from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import VoucherList from '../components/VoucherList'

const VoucherListPage = () => {
  return (
    <div>
      <BreadCrumb currentPage="Voucher"/>
      <VoucherList/>
    </div>
  )
}

export default VoucherListPage