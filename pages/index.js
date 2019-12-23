import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/largeNavbar";
import GloBalStyle from "../components/global/globalStyle";
import MainContainer from "../components/home-page/index";

const Home = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <MainContainer />
    </>
  );
};

export default Home;
