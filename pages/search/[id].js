import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../../components/global/navbar-index";
import GloBalStyle from "../../components/global/globalStyle";
import Computer from "../../components/search/search-desktop";
import Mobile from "../../components/search/search-mobile";
import NoSSR from "react-no-ssr";
import { Responsive, Segment } from "semantic-ui-react";
import { searchAPI } from "../../api/search/";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { accounts: [], posts: [], channels: [] } };
  }

  async componentDidMount() {
    const name = window.location.href.split("/")[4];
    const results = await searchAPI(name);
    this.setState({ data: results.data["msg"] });
  }

  render() {
    return (
      <>
        <GloBalStyle />
        <Navbar />
        <Segment.Group basic>
          <NoSSR>
            <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
              <Mobile
                accounts={this.state.data["accounts"]}
                posts={this.state.data["posts"]}
                channels={this.state.data["accounts"]}
              />
            </Responsive>
            <Responsive
              minWidth={Responsive.onlyComputer.minWidth}
              maxWidth={Responsive.onlyComputer.maxWidth}
            >
              <Computer
                accounts={this.state.data["accounts"]}
                posts={this.state.data["posts"]}
                channels={this.state.data["accounts"]}
              />
            </Responsive>
          </NoSSR>
        </Segment.Group>
      </>
    );
  }
}
