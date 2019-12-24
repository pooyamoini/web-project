import React, { Component, createRef } from "react";
import image from '../public/Images/global/post.jpg'
import {
  Container as Ctr,
  Grid,
  Image,
  Card as Ca,
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

const Column = styled(Grid.Column)`
  margin-left: 20px;
`;

const Card = styled(Ca)`
  padding: 10px !important;
  margin-top: -35px !important;
  border-radius: 0 !important;
`;

function getImage(source){
  if(source == "")
    return
  return(
    <Image
          src={image}
          style={{
            'border-radius':'0 !important;'
          }}
          size={"medium"}
          wrapped
          ui={false}       
    />
  );
}

function Post(props) {
  let contextRef = createRef();
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
      <Column width={8}>
        <Card fluid>
          {getImage(props.image)}
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
        image={post.image}
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
