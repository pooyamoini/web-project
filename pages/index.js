import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/largeNavbar";
import GloBalStyle from "../components/global/globalStyle";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import HomePageHeaderPhone from "../components/homePageHeaderPhone";
import headerSample from '../public/headerSample.json';


const Home = () => {
  return (
    <>
      <GloBalStyle />
      <HomePageHeaderPhone data = {headerSample}></HomePageHeaderPhone>
    </>
  );
};

export default Home;
