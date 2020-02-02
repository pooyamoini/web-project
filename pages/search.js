import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/navbar-index";
import GloBalStyle from "../components/global/globalStyle";
import Desktop from '../components/search/search';
const Search = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <Desktop/>
    </>
  )
}

export default Search
