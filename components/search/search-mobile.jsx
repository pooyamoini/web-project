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
