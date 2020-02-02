import React, { Component } from "react";
import styled from "styled-components";
import {
  Segment as Seg,
  Image,
  Divider,
  Container,
  Menu
} from "semantic-ui-react";
import Post from "../profile-page/profile-post";

const Segment = styled(Seg)`
  background: transparent !important;
  font-size: 1.5rem !important;
`;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSection: "accounts" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeSection: name });

  getResults() {
    const { activeSection } = this.state;

    if (activeSection == "accounts") {
      return (
        <>
          <Segment>
            <Image
              size="tiny"
              circular
              centered
              src="static/Images/profiles/me.jpg"
            />
          </Segment>
          <Segment inverted style={{ borderBottom: "solid 0.5px darkgray" }}>
            Alireza Mohammadian
          </Segment>

          <Segment>
            <Image
              size="tiny"
              circular
              centered
              src="static/Images/profiles/me.jpg"
            />
          </Segment>
          <Segment inverted style={{ borderBottom: "solid 0.5px darkgray" }}>
            Alireza Mohammadian
          </Segment>
        </>
      );
    }

    if (activeSection == "posts") {
      return (
        <>
          <Segment
            style={{ width: "80%", margin: "0 auto" }}
            textAlign="center"
          >
            <Post
              src="static/Images/profiles/avatar0.jpg"
              name="kain"
              date="3 mins ago"
              id="5"
              image="static/Images/photos/test10.png"
              desc="da da da la ba ba ba"
            ></Post>
          </Segment>

          <Segment
            style={{ width: "80%", margin: "0 auto" }}
            textAlign="center"
          >
            <Post
              src="static/Images/profiles/avatar0.jpg"
              name="kain"
              date="3 mins ago"
              id="5"
              image="static/Images/photos/p7.png"
              desc="da da da la ba ba ba"
            ></Post>
          </Segment>
        </>
      );
    }

    if (activeSection == "channels") {
      return (
        <>
          <Segment>
            <Image
              size="tiny"
              circular
              centered
              src="static/Images/profiles/me.jpg"
            />
          </Segment>
          <Segment inverted style={{ borderBottom: "solid 0.5px darkgray" }}>
            Alireza Mohammadian
          </Segment>

          <Segment>
            <Image
              size="tiny"
              circular
              centered
              src="static/Images/profiles/me.jpg"
            />
          </Segment>
          <Segment inverted style={{ borderBottom: "solid 0.5px darkgray" }}>
            Alireza Mohammadian
          </Segment>
        </>
      );
    }
  }

  render() {
    return (
      <Container
        textAlign="center"
        style={{
          width: "70%;"
        }}
      >
        <Menu
          inverted
          borderless
          pointing
          secondary
          compact
          width={3}
          size="massive"
          style={{
            marginTop: "-1.7rem",
            marginBottom: "2rem"
          }}
        >
          <Menu.Item
            name="accounts"
            active={this.state.activeSection == "accounts"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="posts"
            active={this.state.activeSection == "posts"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="channels"
            active={this.state.activeSection == "channels"}
            onClick={this.handleItemClick}
          />
        </Menu>
        {this.getResults()}
      </Container>
    );
  }
}
