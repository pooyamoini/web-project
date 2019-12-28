import React, { Component, createRef } from "react";
import {
  Grid,
  Rail,
  Sticky,
  Ref,
  Container,
  Icon as Ic,
  Card as Ca,
  Segment,
  Image
} from "semantic-ui-react";
import RightContainer from "./rightContainer";
import homePagePostsJson from "../../public/home-page-posts.json";
import styled from "styled-components";
import image from "../../public/Images/global/post.jpg";
import Theme from '../../public/theme';

const ContainerC = styled(Container)`
  width: 85%;
  margin: 10px auto;
`;

const Icon = styled(Ic)`
  margin: 5px;
`;

const Column = styled(Grid.Column)`
  margin-left: 20px;
`;

const Card = styled(Ca)`
  padding: 10px !important;
  margin-top: -35px !important;
  border-radius: 0 !important;
  background-color: ${Theme.post.backgroundColor} !important;
  border-color: ${Theme.post.backgroundColor} !important;
  box-shadow: none !important;
`;

function getImage(source) {
  if (source == "") return;
  return (
    <Image
      src={image}
      style={{
        "border-radius": "0 !important;"
      }}
      size={"medium"}
      wrapped
      ui={false}
    />
  );
}

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contextRef } = this.props;
    const src = this.props.src;
    return (
      <Grid columns={2}>
        <Column width={1}>
          <Ref innerRef={contextRef}>
            <Rail>
              <Segment basic>
                <Sticky context={contextRef} offset={35}>
                  <Image
                    size="tiny"
                    src={src}
                    style={{
                      left: "-8rem",
                      zIndex: "999999",
                      marginTop: "2.5rem"
                    }}
                  ></Image>
                </Sticky>
              </Segment>
            </Rail>
          </Ref>
        </Column>
        <Column width={16} style={{ padding: "0 !important" }}>
          <Card fluid>
            {getImage(this.props.image)}
            <Card.Content>
              <Card.Header style ={{
                color : Theme.post.headarColor,
              }}>{this.props.title}</Card.Header>
              <Card.Meta style ={{
                color: Theme.post.dateColor
              }}>{this.props.date}</Card.Meta>
              <Card.Description style={{
                color: Theme.post.textColor
              }}>{this.props.content}</Card.Description>
            </Card.Content>
            <Card.Content extra style={{
              color : Theme.post.dateColor,
            }}>
              <p>
                <Icon name="thumbs up" />
                {this.props.votes} Votes
                <Icon name="thumbs up" />
                {this.props.comments} Comments
              </p>
            </Card.Content>
          </Card>
        </Column>
      </Grid>
    );
  }
}

class HomePagePosts extends Component {
  makePostsList() {
    const posts = this.props.posts;
    const { contextRef } = this.props;
    const postsList = posts.map(post => {
      return (
        <Post
          title={post.title}
          image={post.image}
          date={post.date}
          content={post.content}
          votes={post.votes}
          comments={post.comments}
          key={post.title}
          src={post.src}
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
    this.state = { marginTop: "1rem" };
  }

  handleStick() {
    this.setState({ marginTop: "12rem" });
  }

  handleUnStick() {
    this.setState({ marginTop: "1rem" });
  }

  contextRef = createRef();
  render() {
    const { marginTop } = this.state;
    return (
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
              posts={homePagePostsJson}
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
                />
                <RightContainer content="Suggestion for Channel" />
              </Sticky>
            </Rail>
          </Ref>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HomePageDesktop;
