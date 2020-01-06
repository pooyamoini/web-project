import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/navbar-index";
import GloBalStyle from "../components/global/globalStyle";
import ProfileHeader from '../components/profile-page/profile-header'
import ProfileData from "../public/json-files/profile"
import ProfilePostsContainer from "../components/profile-page/profile-posts-container"
const Home = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <ProfileHeader type = 'self'></ProfileHeader>
      <ProfilePostsContainer data = {ProfileData} type = 'self'></ProfilePostsContainer> 
    </>
  )
}

export default Home