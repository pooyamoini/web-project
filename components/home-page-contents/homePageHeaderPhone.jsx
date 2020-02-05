import React, { Component } from "react";
import {
  Container as Co,
  Transition,
  Card,
  Image,
  Icon as Ic
} from "semantic-ui-react";
import styled from "styled-components";
import Theme from "../../public/theme";
import Link from "next/link";
import Router from 'next/router'

const Container = styled(Co)`
  width: 90% !important;
  margin: -25% auto 0 !important;
`;
const Icon = styled(Ic)`
  visibility: hidden;
`;

const cardType = ["Hot", "New", "Followed", "YourInterest"];

export default class HomePageHeaderPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCard: cardType[0],
      duration: 1000,
      visibility: {
        Hot: true,
        New: false,
        Followed: false,
        YourInterest: false
      },
      nnews: ["", ""],
      nhot: ["", ""],
      nfollow: ["", ""],
      nx: ["", ""]
    };
    this.changeVisibleCard = this.changeVisibleCard.bind(this);
    this.showNextCard = this.showNextCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.changeVisibleCard(), 5000);
    setTimeout(() => {
      const { news, hot, follow, interest } = this.props;
      const nnews = this.getLikes(news);
      const nhot = this.getLikes(hot);
      const nfollow = this.getLikes(follow);
      const nx = this.getLikes(interest);
      this.setState({ nnews, nhot, nfollow, nx });
    }, 2000);
  }

  getLikes(list) {
    try {
      return [list.nlikes.length, list.ndislikes.length];
    } catch (e) {
      return ["", ""];
    }
  }

  handleClick(id){
    return function name() {
      Router.push(`/post/${id}`)
    }
  }

  getCard(type, title, date, votes, comments, image, id) {
    return (
      <Card
        centered
        style={{
          width: "95vw",
          marginTop: "8rem",
          marginBottom: "8rem",
          "background-color": Theme.post.backgroundColor,
          "box-shadow": "none"
        }}
        onClick={this.handleClick(id)}
      >
          <Image src={image} wrapped ui={false} size="big"/>
          <Card.Content>
            <Card.Header
              style={{
                color: Theme.post.headarColor
              }}
            >
              {type}
            </Card.Header>
            <Card.Meta
              style={{
                color: Theme.post.dateColor
              }}
            >
              {date}
            </Card.Meta>
            <Card.Description
              style={{
                color: Theme.post.textColor
              }}
            >
              {title}
            </Card.Description>
          </Card.Content>
          <Card.Content
            extra
            style={{
              color: Theme.post.dateColor
            }}
          >
            <p>
              <Icon name="thumbs up" />
              {votes} Likes
              <Icon name="thumbs up" />
              {comments} Dislikes
            </p>
          </Card.Content>
      </Card>
    );
  }

  changeVisibleCard() {
    let dic = this.state.visibility;
    let i = cardType.indexOf(this.state.visibleCard);
    if (++i > 3) {
      i = 0;
    }
    dic[this.state.visibleCard] = false;
    this.setState({
      visibleCard: cardType[i],
      visibility: dic
    });
    setTimeout(this.showNextCard, this.state.duration);
  }

  showNextCard() {
    let dic = this.state.visibility;
    dic[this.state.visibleCard] = true;
    this.setState({
      visibility: dic
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Container>
        <Transition
          visible={this.state.visibility["Hot"]}
          animation="fade up"
          duration={this.state.duration}
        >
          {this.getCard(
            "Hot",
            this.props.hot.content,
            this.props.hot.account,
            this.state.nhot[0],
            this.state.nhot[1],
            this.props.hot.image,
            this.props.hot.id_post
          )}
        </Transition>
        <Transition
          visible={this.state.visibility["New"]}
          animation="fade up"
          duration={this.state.duration}
        >
          {this.getCard(
            "New",
            this.props.news.content,
            this.props.news.account,
            this.state.nnews[0],
            this.state.nnews[1],
            this.props.news.image,
            this.props.news.id_post
          )}
        </Transition>
        <Transition
          visible={this.state.visibility["Followed"]}
          animation="fade up"
          duration={this.state.duration}
        >
          {this.getCard(
            "Followed",
            this.props.follow.content,
            this.props.follow.account,
            this.state.nfollow[0],
            this.state.nfollow[1],
            this.props.follow.image,
            this.props.follow.id_post
          )}
        </Transition>
        <Transition
          visible={this.state.visibility["YourInterest"]}
          animation="fade up"
          duration={this.state.duration}
        >
          {this.getCard(
            "Your Interest",
            this.props.interest.content,
            this.props.interest.account,
            this.state.nx[0],
            this.state.nx[1],
            this.props.interest.image,
            this.props.interest.id_post
          )}
        </Transition>
      </Container>
    );
  }
}
