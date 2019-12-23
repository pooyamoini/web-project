import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/largeNavbar";
import GloBalStyle from "../components/global/globalStyle";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
    </>
  );
};

export default Home;
