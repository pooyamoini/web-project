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
import Link from "next/link";

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
    if (this.props.posts.length == 0) return  <h1 style={{color: 'white'}}>No Match</h1>;
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

  getResults() {
    const { activeSection } = this.state;

    if (activeSection == "accounts") {
      return (
        this.getAccounts()
      );
    }

    if (activeSection == "posts") {
      return (
       this.getPosts()
      );
    }

    if (activeSection == "channels") {
      return (
        this.getChannels()
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
            marginTop: "1rem",
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
