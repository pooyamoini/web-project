import React, { Component } from "react";
import {
  Grid,
  Rail,
  Sticky,
  Ref,
  Icon as Ic,
  Card as Ca,
  Segment,
  Image
} from "semantic-ui-react";
import styled from "styled-components";
import image from "../../public/Images/global/post.jpg";
import Theme from '../../public/theme';

const Column = styled(Grid.Column)`
  margin-left: 20px;
`;

const Card = styled(Ca)`
  padding: 10px !important;
  margin-top: -35px !important;
  border-radius: 0 !important;
  background-color: ${Theme.post.backgroundColor} !important;
  box-shadow: none !important;
`;

const Icon = styled(Ic)`
  margin: 5px;
  visibility: hidden;
`;

function getImage(source) {
  if (source == "") return;
  return (
    <Image
      src={image}
      style={{
        "border-radius": "0 !important;"
      }}
      size="medium"
      wrapped
      ui={false}
    />
  );
}

const Post = props => {
  const { contextRef } = props;
  const src = props.src;
  return (
    <Grid columns={2}>
      <Column width={1}>
        <Ref innerRef={contextRef}>
          <Rail>
            <Segment basic>
              <Sticky context={contextRef} offset={35}>
                <Image
                  size="tiny"
                  src={props.src}
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
          {getImage(props.image)}
          <Card.Content>
            <Card.Header style={{
              color: Theme.post.headarColor
            }}>{props.title}</Card.Header>
            <Card.Meta style={{
              color: Theme.post.dateColor
            }}>{props.date}</Card.Meta>
            <Card.Description style={{
              color: Theme.post.textColor
            }}>{props.content}</Card.Description>
          </Card.Content>
          <Card.Content extra style={{
            color: Theme.post.dateColor
          }}>
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
};

export default Post;
