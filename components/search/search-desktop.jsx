import React, { Component } from "react";
import styled from "styled-components";
import { Segment as Seg, Image, Divider } from "semantic-ui-react";
import Post from "../profile-page/profile-post";
import Link from "next/link";

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
    if (this.props.accounts.length == 0) return  <h1 style={{color: 'white'}}>No Match</h1>;
    const list = this.props.accounts.map(account => (
      <>
        <Segment>
          <Link href={`../profile/${account.username}`}>
            <Image
              size="tiny"
              circular
              centered
              src={
                account.profile
                  ? "../" + account.profile
                  : "../static/Images/profiles/empty.png"
              }
            />
          </Link>
        </Segment>
        <Segment inverted style={{ borderBottom: "solid 0.5px darkgray" }}>
          <Link href={`../profile/${account.username}`}>{account.name}</Link>
        </Segment>
      </>
    ));
    return list;
  }

  getPosts() {
    if (this.props.posts.length == 0) return <h1 style={{color: 'white'}}>No Match</h1>;
    const list = this.props.posts.map(post => (
      <>
        <Segment style={{ width: "70%", margin: "0 auto" }} textAlign="center">
          <Post
            src={
              post.account.profile
                ? "../" + post.account.profile
                : "../static/Images/profiles/empty.png"
            }
            name={post.account.name}
            date={''}
            id={post.id_post}
            image={post.image}
            desc={post.content}
          />
        </Segment>
      </>
    ));
    return list;
  }

  getChannels() {
    if (this.props.accounts.length == 0) return <h1 style={{color: 'white'}}>No Match</h1>;
    const list = this.props.accounts.map(account => (
      <>
        <Segment>
          <Link href={`../profile/${account.username}`}>
            <Image
              size="tiny"
              circular
              centered
              src={
                account.profile
                  ? "../" + account.profile
                  : "../static/Images/profiles/empty.png"
              }
            />
          </Link>
        </Segment>
        <Segment inverted style={{ borderBottom: "solid 0.5px darkgray" }}>
          <Link href={`../profile/${account.username}`}>{account.name}</Link>
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
