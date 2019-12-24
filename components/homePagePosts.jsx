import React, { Component, createRef } from "react";
import {
  Container as Ctr,
  Grid,
  Image as Im,
  Card,
  Icon as Ic,
  Sticky,
  Rail,
  Ref
} from "semantic-ui-react";
import styled from "styled-components";

const Container = styled(Ctr)`
  width: 85%;
  margin: 10px auto;
`;

const Icon = styled(Ic)`
  margin: 5px;
`;

const Image = styled(Im)`
  marign: 10px;
`;

const Column = styled(Grid.Column)`
  margin: 10px;
`;

function Post(props) {
  let contextRef = createRef()
  return (
    <Grid columns={2}>
      <Column width={1}>
        <Ref innerRef={contextRef}>
          <Rail>
            <Sticky context={contextRef} offset={20}>
              <Image
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              ></Image>
            </Sticky>
          </Rail>
        </Ref>
      </Column>
      <Column width={6}>
        <Card>
          <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>{props.date}</Card.Meta>
            <Card.Description>{props.content}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>
              <Icon name="thumbs up" />
              {props.votes} Votes
              <Icon name="thumbs up" />
              {props.comments} Comments
            </p>
          </Card.Content>
        </Card>
      </Column>
    </Grid>
  );
}

export default class homePagePosts extends Component {
  makePostsList() {
    const posts = this.props.posts;
    const postsList = posts.map(post => (
      <Post
        title={post.title}
        date={post.date}
        content={post.content}
        votes={post.votes}
        comments={post.comments}
      ></Post>
    ));
    return postsList;
  }

  render() {
    const postsList = this.makePostsList();

    return <Container>{postsList}</Container>;
  }
}
