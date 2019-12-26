import React, { Component, createRef } from "react";
import image from "../public/Images/global/post.jpg";
import {
  Container as Ctr,
  Grid,
  Image,
  Card as Ca,
  Icon as Ic,
  Sticky,
  Rail,
  Ref,
  Segment
} from "semantic-ui-react";
import styled from "styled-components";

const Container = styled(Ctr)`
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
    let contextRef = createRef();
    return (
      <Grid columns={2}>
        <Column width={1}>
          <Ref innerRef={contextRef}>
            <Rail>
              <Segment basic>
                <Sticky context={contextRef} active={true} pushing>
                  <Image
                    size="tiny"
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    style={{ left: "-100px", zIndex: "999999" }}
                  ></Image>
                </Sticky>
              </Segment>
            </Rail>
          </Ref>
        </Column>
        <Column width={16}>
          <Card fluid>
            {getImage(this.props.image)}
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
              <Card.Meta>{this.props.date}</Card.Meta>
              <Card.Description>{this.props.content}</Card.Description>
            </Card.Content>
            <Card.Content extra>
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

export default class homePagePosts extends Component {
  makePostsList() {
    const posts = this.props.posts;
    const postsList = posts.map(post => (
      <Post
        title={post.title}
        image={post.image}
        date={post.date}
        content={post.content}
        votes={post.votes}
        comments={post.comments}
        key={post.title}
      ></Post>
    ));
    return postsList;
  }

  render() {
    const postsList = this.makePostsList();
    return <Container>{postsList}</Container>;
  }
}
