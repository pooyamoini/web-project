import styled from "styled-components";
import React, { Component } from "react";
import { Grid as Gr, GridColumn , Card, Image, Icon } from "semantic-ui-react";

const Grid = styled(Gr)`
  width: 80%;
  margin: 30px auto !important;
`;
export default class Header extends Component {
  getCard(type, title, date, votes) {
    return (
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{type}</Card.Header>
          <Card.Meta>{title}</Card.Meta>
          <Card.Description>{date}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name="thumbs up" />
            {votes} Votes
          </p>
        </Card.Content>
      </Card>
    );
  }

  render() {
    return (
      <Grid id="Grid" columns={4} divided>
        <GridColumn>
          {this.getCard(
            "Hot",
            this.props.data.Hot.Title,
            this.props.data.Hot.Date,
            this.props.data.Hot.Votes
          )}
        </GridColumn>
        <GridColumn>
          {this.getCard(
            "New",
            this.props.data.New.Title,
            this.props.data.New.Date,
            this.props.data.New.Votes
          )}
        </GridColumn>
        <GridColumn>
          {this.getCard(
            "Followed",
            this.props.data.Followed.Title,
            this.props.data.Followed.Date,
            this.props.data.Followed.Votes
          )}
        </GridColumn>
        <GridColumn>
          {this.getCard(
            "Your Interest",
            this.props.data.YourInterest.Title,
            this.props.data.YourInterest.Date,
            this.props.data.YourInterest.Votes
          )}
        </GridColumn>
      </Grid>
    );
  }
}
