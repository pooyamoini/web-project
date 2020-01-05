import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/navbar-index";
import GloBalStyle from "../components/global/globalStyle";
import ProfileData from "../public/json-files/profile"
import EditProfile from '../components/profile-page/edit-profile'
const Home = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <EditProfile data = {ProfileData}></EditProfile>   
    </>
  )
}

export default Home
