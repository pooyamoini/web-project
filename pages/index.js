import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/largeNavbar";
import GloBalStyle from "../components/global/globalStyle";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import HomePagePosts from "../components/homePagePosts"
import homePagePostsJson from '../public/home-page-posts.json';
const Home = () => {
  return (
    <>
      <GloBalStyle />
      {/* <Navbar /> */}
      <HomePagePosts posts={homePagePostsJson}></HomePagePosts>
    </>
  );
};

export default Home;
