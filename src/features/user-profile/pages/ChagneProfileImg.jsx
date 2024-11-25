import React from 'react'
import Container from '../../dashboard/components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import UserImageChange from '../components/UserImageCard'

const ChagneProfileImg = () => {
  return (
    <div>
    <Container>
      <BreadCrumb currentPage={"Change Image"}
          links={[{ title: "User", path: "/dashboard/profile" }]}/>
      <UserImageChange/>
    </Container>
  </div>
  )
}

export default ChagneProfileImg
