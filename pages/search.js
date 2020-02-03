import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/global/navbar-index";
import GloBalStyle from "../components/global/globalStyle";
import Computer from "../components/search/search-desktop";
import Mobile from "../components/search/search-mobile";
import NoSSR from "react-no-ssr";
import { Responsive, Segment } from "semantic-ui-react";

const Search = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <Segment.Group basic>
        <NoSSR>
          <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
            <Mobile
              accounts={[
                {
                  src: "static/Images/profiles/me.jpg",
                  name: "Alireza Mohammadian"
                },
                {
                  src: "static/Images/profiles/avatar0.jpg",
                  name: "Kian Bakhtari"
                }
              ]}
              posts={[
                {
                  src: "static/Images/profiles/me.jpg",
                  name: "Alireza Mohammadian",
                  date: "3 min ago",
                  id: "5",
                  image: "static/Images/photos/test10.png",
                  desc: "la la la da da da"
                },
                {
                  src: "static/Images/profiles/avatar0.jpg",
                  name: "Pouya Moeini",
                  date: "3 min ago",
                  id: "5",
                  image: "static/Images/photos/test10.png",
                  desc: "la la la da da da"
                }
              ]}
              channels={[
                {
                  src: "static/Images/profiles/me.jpg",
                  name: "Alireza Mohammadian"
                },
                {
                  src: "static/Images/profiles/avatar0.jpg",
                  name: "Kian Bakhtari"
                }
              ]}
            />
          </Responsive>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            maxWidth={Responsive.onlyComputer.maxWidth}
          >
            <Computer
              accounts={[
                {
                  src: "static/Images/profiles/me.jpg",
                  name: "Alireza Mohammadian"
                },
                {
                  src: "static/Images/profiles/avatar0.jpg",
                  name: "Kian Bakhtari"
                }
              ]}
              posts={[
                {
                  src: "static/Images/profiles/me.jpg",
                  name: "Alireza Mohammadian",
                  date: "3 min ago",
                  id: "5",
                  image: "static/Images/photos/test10.png",
                  desc: "la la la da da da"
                },
                {
                  src: "static/Images/profiles/avatar0.jpg",
                  name: "Pouya Moeini",
                  date: "3 min ago",
                  id: "5",
                  image: "static/Images/photos/test10.png",
                  desc: "la la la da da da"
                }
              ]}
              channels={[
                {
                  src: "static/Images/profiles/me.jpg",
                  name: "Alireza Mohammadian"
                },
                {
                  src: "static/Images/profiles/avatar0.jpg",
                  name: "Kian Bakhtari"
                }
              ]}
            />
          </Responsive>
        </NoSSR>
      </Segment.Group>
    </>
  );
};

export default Search;
