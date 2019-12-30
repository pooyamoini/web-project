import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/navbar-index";
import GloBalStyle from "../components/global/globalStyle";
import MainContainer from "../components/home-page/index";
import Header from "../components/home-page-contents/mainPageHeader";
import HeaderData from "../public/headerSample";
import ProfileHeader from '../components/profile-page/profile-header'
import ProfileData from "../public/json-files/profile"
import ProfilePosts from "../components/profile-page/profile-posts"
const Home = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <ProfileHeader data = {ProfileData}></ProfileHeader>
      <ProfilePosts></ProfilePosts>
    </>
  );
};

export default Home;
