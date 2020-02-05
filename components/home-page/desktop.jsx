import React, { Component, createRef } from "react";
import {
  Grid,
  Rail,
  Sticky,
  Ref,
  Container,
  Pagination
} from "semantic-ui-react";
import RightContainer from "./rightContainer";
import styled from "styled-components";
import Post from "./post-desktop";

const ContainerC = styled(Container)`
  width: 85%;
  margin: 10px auto;
`;

class HomePagePosts extends Component {
  constructor(props) {
    super(props);
  }

  makePostsList() {
    const { contextRef, posts, page } = this.props;
    const postsList = posts.map((p, index) => {
      if(Math.floor(index/10) != page-1 ) return
      return (
        <Post
          title={p.title}
          image={p.image}
          date={p.date}
          src={p.profile ? p.profile : "static/Images/profiles/empty.png"}
          content={p.content}
          likes={p.likes}
          dislikes={p.dislikes}
          key={p.account}
          username={p.username}
          id={p.id}
          contextRef={contextRef}
        ></Post>
      );
    });
    return postsList;
  }

  render() {
    const postsList = this.makePostsList();
    return <ContainerC>{postsList}</ContainerC>;
  }
}

class HomePageDesktop extends Component {
  constructor(props) {
    super(props);
    this.handleStick = this.handleStick.bind(this);
    this.handleUnStick = this.handleUnStick.bind(this);
    this.state = { marginTop: "1rem", page: 1 };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ active: false }), 2500);
  }

  handleStick() {
    this.setState({ marginTop: "12rem" });
  }

  handleUnStick() {
    this.setState({ marginTop: "1rem" });
  }

  handlePageChange = (e, data) => {
    this.setState({page: data.activePage})
  }

  contextRef = createRef();
  render() {
    const { marginTop } = this.state;
    return (
      <>
        <Grid
          centered
          style={{
            marginTop: "5rem",
            width: "85%",
            marginLeft: "7.5%",
            marginRight: "7.5%"
          }}
        >
          <Grid.Column
            width={8}
            style={{
              marginLeft: "11rem",
              position: "absolte"
            }}
          >
            <Container>
              <HomePagePosts
                contextRef={this.contextRef}
                posts={this.props.posts}
                page={this.state.page}
              ></HomePagePosts>
            </Container>
          </Grid.Column>
          <Grid.Column width={4} style={{ marginLeft: "5rem" }}>
            <Ref innerRef={this.contextRef}>
              <Rail style={{ position: "absolute" }}>
                <Sticky
                  context={this.contextRef}
                  onStick={this.handleStick}
                  onUnstick={this.handleUnStick}
                >
                  <RightContainer
                    marginTop={marginTop}
                    content="Suggestion for Accounts"
                    type="account"
                    suggestions={this.props.suggestions}
                  />
                  <RightContainer content="Suggestion for Channel" />
                </Sticky>
              </Rail>
            </Ref>
          </Grid.Column>
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={Math.ceil(this.props.posts.length/10)}
          inverted
          onPageChange = {this.handlePageChange}
          style={{
            marginRight: '15%',
            marginBottom: '2rem'
          }}
        />
        </Grid>
      </>
    );
  }
}

export default HomePageDesktop;
