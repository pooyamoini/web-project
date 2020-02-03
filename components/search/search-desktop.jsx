import React, { Component } from "react";
import styled from "styled-components";
import { Segment as Seg, Image, Divider } from "semantic-ui-react";
import Post from "../profile-page/profile-post";

const Segment = styled(Seg)`
  background: transparent !important;
  font-size: 1.5rem !important;
`;

export default class Search extends Component {
  constructor(props) {
    super(props);
    // this.getAccounts = this.getAccounts.bind(this);
  }

  getAccounts() {
    const list = this.props.accounts.map(account => (
      <>
        <Segment>
          <Image size="tiny" circular centered src={account.src} />
        </Segment>
        <Segment inverted style={{ borderBottom: "solid 0.5px darkgray" }}>
          {account.name}
        </Segment>
      </>
    ));
    return list;
  }

  getPosts() {
    const list = this.props.posts.map(post => (
      <>
        <Segment style={{ width: "70%", margin: "0 auto" }} textAlign="center">
          <Post
            src={post.src}
            name={post.name}
            date={post.date}
            id={post.id}
            image={post.image}
            desc={post.desc}
          />
        </Segment>
      </>
    ));
    return list;
  }

  getChannels() {
    const list = this.props.channels.map(channel => (
      <>
        <Segment>
          <Image size="tiny" circular centered src={channel.src} />
        </Segment>
        <Segment inverted style={{ borderBottom: "solid 0.5px darkgray" }}>
          {channel.name}
        </Segment>
      </>
    ));
    return list;
  }

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
          {this.getAccounts()}

        </Segment>

        <Segment
          textAlign="center"
          style={{
            width: "50%",
            padding: 0
          }}
        >
          <Segment inverted>Posts</Segment>
          {this.getPosts()}
          
        </Segment>

        <Segment
          textAlign="center"
          style={{
            borderLeft: "solid 1px lightgray",
            width: "25%"
          }}
        >
          <Segment inverted>Channels</Segment>
          {this.getChannels()}
        </Segment>
      </Segment.Group>
    );
  }
}
