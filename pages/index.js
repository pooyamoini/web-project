import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/largeNavbar";
import GloBalStyle from "../components/global/globalStyle";
import MainContainer from "../components/home-page/index";
import { Grid } from "semantic-ui-react";
const Home = () => {
  return (
    <Grid>
      <GloBalStyle />
      <Navbar />
      <MainContainer />
    </Grid>
  );
};

export default Home;
