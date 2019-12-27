import styled from "styled-components";
import React, { Component } from "react";
import { Grid as Gr, GridColumn, Card, Image, Icon } from "semantic-ui-react";

const Grid = styled(Gr)`
  width: 80%;
  margin: 30px auto !important;
  margin-top: 6rem !important;
`;
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.getCard = this.getCard.bind(this);
  }

  getCard(type, title, date, votes, comments, image) {
    return (
      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{type}</Card.Header>
          <Card.Meta>{date}</Card.Meta>
          <Card.Description>{title}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name="thumbs up" />
            {votes} Votes
            <Icon name="thumbs up" />
            {comments} Comments
          </p>
        </Card.Content>
      </Card>
    );
  }

  render() {
    return (
      <Grid id="Grid" columns={4} divided>
        <GridColumn textAlign="center">
          {this.getCard(
            "Hot",
            this.props.data.Hot.Title,
            this.props.data.Hot.Date,
            this.props.data.Hot.Votes,
            this.props.data.Hot.Comments,
            this.props.data.Hot.Image
          )}
        </GridColumn>
        <GridColumn textAlign="center">
          {this.getCard(
            "New",
            this.props.data.New.Title,
            this.props.data.New.Date,
            this.props.data.New.Votes,
            this.props.data.New.Comments,
            this.props.data.New.Image
          )}
        </GridColumn>
        <GridColumn textAlign="center">
          {this.getCard(
            "Followed",
            this.props.data.Followed.Title,
            this.props.data.Followed.Date,
            this.props.data.Followed.Votes,
            this.props.data.Followed.Comments,
            this.props.data.Followed.Image
          )}
        </GridColumn>
        <GridColumn textAlign="center">
          {this.getCard(
            "Your Interest",
            this.props.data.YourInterest.Title,
            this.props.data.YourInterest.Date,
            this.props.data.YourInterest.Votes,
            this.props.data.YourInterest.Comments,
            this.props.data.YourInterest.Image
          )}
        </GridColumn>
      </Grid>
    );
  }
}
