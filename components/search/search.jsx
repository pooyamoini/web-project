import React, { Component } from "react";
import styled from "styled-components";
import { Segment as Seg, Image, Divider } from "semantic-ui-react";
import Post from "../profile-page/profile-post";

const Segment = styled(Seg)`
  background: transparent !important;
  font-size: 1.5rem !important;
`;

export default class Search extends Component {
  render() {
    return (
      <Segment.Group
        horizontal
        style={{
          backgroundColor: "transparent",
          margin: "3rem auto"
        }}
      >
        <Segment
          textAlign="center"
          style={{
            borderRight: "solid 1px lightgray",
            width: "25%"
          }}
        >
          <Segment inverted>Accounts</Segment>
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
        </Segment>

        <Segment
          textAlign="center"
          style={{
            width: "50%",
            padding: 0
          }}
        >
          <Segment inverted>Posts</Segment>
          <Segment
            style={{ width: "70%", margin: "0 auto" }}
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
            style={{ width: "70%", margin: "0 auto" }}
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
        </Segment>

        <Segment
          textAlign="center"
          style={{
            borderLeft: "solid 1px lightgray",
            width: "25%"
          }}
        >
          <Segment inverted>Channels</Segment>
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
        </Segment>
      </Segment.Group>
    );
  }
}
