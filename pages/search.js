import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/navbar-index";
import GloBalStyle from "../components/global/globalStyle";
import Computer from '../components/search/search-desktop';
import Mobile from '../components/search/search-mobile';
import NoSSR from 'react-no-ssr'
import { Responsive, Segment } from 'semantic-ui-react'

const Search = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <Segment.Group basic>
        <NoSSR>
          <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
            <Mobile/>
          </Responsive>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            maxWidth={Responsive.onlyComputer.maxWidth}
          >
            <Computer/>
          </Responsive>
        </NoSSR>
      </Segment.Group>
    </>
  )
}

export default Search
