import React from 'react'
import Container from '../../dashboard/components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import UserNameChange from '../components/UserNameCard'

const ChangeNamePage = () => {
  return (
    <div>
    <Container>
      <BreadCrumb currentPage={"Change Name"}
          links={[{ title: "User", path: "/dashboard/profile" }]}/>
      <UserNameChange/>
    </Container>
  </div>
  )
}

export default ChangeNamePage