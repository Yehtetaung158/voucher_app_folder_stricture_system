import React from 'react'
import Container from '../../dashboard/components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import UserPasswordCard from '../components/UserPasswordCard'

const ChangePasswordPage = () => {
  return (
    <div>
    <Container>
      <BreadCrumb currentPage={"Change Image"}
          links={[{ title: "User", path: "/dashboard/profile" }]}/>
      <UserPasswordCard/>
    </Container>
  </div>
  )
}

export default ChangePasswordPage