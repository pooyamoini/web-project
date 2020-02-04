import React, { Component } from "react";
import { Grid, Segment, Image, Card as Ca } from "semantic-ui-react";
import styled from "styled-components";
import Link from "next/link";
import Theme from "../../public/theme";

const Name = styled.span`
  font-size: 20px;
  margin-left: 1rem;
  color: white;
`;

const Meta = styled.span`
  float: right;
  margin-left: auto;
  margin-right: 7rem;
  color: white;
`;

const Card = styled(Ca)`
  width: 80vw !important;
  padding: 0 !important;
  border-radius: 0 !important;
  background-color: ${Theme.post.backgroundColor} !important;
  box-shadow: none !important;
`;

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid style={{ marginBottom: "5rem" }}>
        <Grid.Row textAlign="left" style={{ padding: "0" }}>
          <Segment
            basic
            style={{ padding: "0", marginLeft: "6.5rem", width: "100%" }}
          >
            <Image src={this.props.src} avatar />
            <Name>{this.props.name}</Name>
            <Meta>{this.props.date}</Meta>
          </Segment>
        </Grid.Row>
        <Grid.Row centered>
        <Link href={`/post/${this.props.id}`}>
            <Card>
              <Image src={this.props.image} wrapped ui={false} />
              <Card.Content textAlign="left">
                <Card.Description
                  style={{ fontSize: "20px", color: Theme.post.textColor }}
                >
                  {this.props.content.substr(0, 100)}
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Post;
