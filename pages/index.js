import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/navbar-index";
import GloBalStyle from "../components/global/globalStyle";
import MainContainer from "../components/home-page/index";
import Header from "../components/home-page-contents/mainPageHeader";
import HeaderData from "../public/headerSample";
import ProfileHeader from '../components/profile-page/profile-header'
import ProfileHeaderMobile from '../components/profile-page/profile-header-mobile'
import ProfileData from "../public/json-files/profile"
import ProfilePostsContainer from "../components/profile-page/profile-posts-container"

const Home = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <ProfileHeader></ProfileHeader>
      <ProfilePostsContainer data = {ProfileData} type = 'self'></ProfilePostsContainer>
    </>
  )
}

export default Home
