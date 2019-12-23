import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/largeNavbar";
import GloBalStyle from "../components/global/globalStyle";
<<<<<<< HEAD
import MainContainer from "../components/home-page/index";
=======
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
>>>>>>> 8f080d60ee0baabc51554d6c895df64457142688

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
