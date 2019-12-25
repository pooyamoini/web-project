import React, { Component } from "react";
import { Container as Co, Transition, Card, Image, Icon } from "semantic-ui-react";
import styled from 'styled-components'

const Container = styled(Co)`
    width: 60% !important;
    margin: 20px auto !important;
    background-color: red !important;
`;


const cardType = ["Hot", "New", "Followed", "YourInterest"];

export default class HomePageHeaderPhone extends Component {
  constructor(props) {
    super(props);
    this.state = { visibleCard: cardType[0] };
    this.getVisibleCard = this.getVisibleCard.bind(this);
  }

  getCard(type, title, date, votes, image) {
    return (
      <Card fluid>
        <Image
          src={image}
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

  getVisibleCard(){
    if(this.state.visibleCard == 'Hot'){
        return this.getCard(
            "Hot",
            this.props.data.Hot.Title,
            this.props.data.Hot.Date,
            this.props.data.Hot.Votes,
            this.props.data.Hot.Image
          )
    }
    if(this.state.visibleCard == 'New'){
        return this.getCard(
            "New",
            this.props.data.New.Title,
            this.props.data.New.Date,
            this.props.data.New.Votes,
            this.props.data.New.Image
            )
    }
    if(this.state.visibleCard == 'Followed'){
        return this.getCard(
            "Followed",
            this.props.data.Followed.Title,
            this.props.data.Followed.Date,
            this.props.data.Followed.Votes,
            this.props.data.Followed.Image
            )
    }
    if(this.state.visibleCard == 'YourInterest'){
        return this.getCard(
            "Your Interest",
            this.props.data.YourInterest.Title,
            this.props.data.YourInterest.Date,
            this.props.data.YourInterest.Votes,
            this.props.data.YourInterest.Image
            )
    }
  }

  changeVisibleCard(){
    let i = cardType.indexOf(this.state.visibleCard);
    if(++i > 3){
        i = 0;
    }
    this.setState({visibleCard: cardType[i]})
  }

  componentDidMount(){
      this.timer = setInterval(
          () => this.changeVisibleCard(),
          6000
      );
  }

  componentWillUnmount(){
      clearInterval(this.timer)
  }

  render() {
    return (
      <Container>
        <Transition.Group animation={"fade up"} duration={1000}>
          {this.getVisibleCard()}
        </Transition.Group>
      </Container>
    );
  }
}
