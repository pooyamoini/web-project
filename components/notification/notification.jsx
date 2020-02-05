import React, { Component } from "react";
import styled from "styled-components";
import { Segment as Seg, Image } from "semantic-ui-react";
import { notifAPI } from "../../api/notification/";
import Link from "next/link";

const Segment = styled(Seg)`
  background: transparent !important;
  font-size: 1.5rem !important;
  margin-top: -1rem !important;
`;

const SegmentGroup = styled(Segment.Group)`
  // border-top: solid 0.5px lightgray !important;
  border-bottom: solid 0.5px lightgray !important;
  margin-bottom: 1.5rem !important;
  // margin: 0 !important;
`;

const Time = styled.p`
  margin: auto !important;
`;

export default class notification extends Component {
  constructor(props) {
    super(props);
    this.state = {'follows': [], 'comments': [], 'likes': [], 'dislikes': []}
  }

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const results = await notifAPI(token);
    this.setState(results.data["msg"]);
  }

  getFollows() {
    const list = this.state.follows.map(follow => (
      <Link href={`../profile/${follow.username}`}>
      <SegmentGroup>
        <Segment>
          <Image
            size="tiny"
            circular
            src={
              follow.profile
                ? "../" + follow.profile
                : "../static/Images/profiles/empty.png"
            }
          />
        </Segment>
        <Segment inverted style={{marginTop: '-1.5rem !important;'}}>{follow.name} started following you</Segment>
      </SegmentGroup>
      </Link>
    ));
    return list;
  }

  getLikes() {
    const list = this.state.likes.map(like => (
      <Link href={`../post/${like.post.id_post}`}>
      <SegmentGroup>
        <Segment>
          <Image
            size="tiny"
            circular
            src={
              like.account.profile
                ? "../" + like.account.profile
                : "../static/Images/profiles/empty.png"
            }
          />
        </Segment>
        <Segment inverted>{like.account.name} liked one of your posts</Segment>
      </SegmentGroup>
      </Link>
    ));
    return list;
  }

  getDisikes() {
    const list = this.state.dislikes.map(dislike => (
      <Link href={`../post/${dislike.post.id_post}`}>
      <SegmentGroup>
        <Segment>
          <Image
            size="tiny"
            circular
            src={
              dislike.account.profile
                ? "../" + dislike.account.profile
                : "../static/Images/profiles/empty.png"
            }
          />
        </Segment>
        <Segment inverted>{dislike.account.name} disliked one of your posts</Segment>
      </SegmentGroup>
      </Link>
    ));
    return list;
  }

  render() {
    return (
      <Segment
        style={{
          margin: "5rem auto",
          paddingTop: '4rem',
          width: "60%"
        }}
      >
        {this.getFollows()}
        {this.getLikes()}
        {this.getDisikes()}
      </Segment>
    );
  }
}
