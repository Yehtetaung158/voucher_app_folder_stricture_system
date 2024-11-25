import React from 'react'
import Container from '../../dashboard/components/Container';
import BreadCrumb from '../../../components/BreadCrumb';
import UserProfileCard from '../components/UserProfileCard';

const UserProfilePage = () => {
    return (
      <section>
        <Container>
          <BreadCrumb currentPage={"User"} />
          <UserProfileCard/>
        </Container>
      </section>
    );
}

export default UserProfilePage