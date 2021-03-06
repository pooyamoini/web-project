import React, { Component } from "react";
import styled from "styled-components";
import { Segment as Seg, Image, Pagination } from "semantic-ui-react";
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
    this.state = {
      follows: [],
      comments: [],
      likes: [],
      dislikes: [],
      page: 1
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const results = await notifAPI(token);
    this.setState(results.data["msg"]);
  }

  getFollows() {
    const list = this.state.follows.map((follow, index) => {
      if (Math.floor(index / 3) != this.state.page - 1) return;
      return (
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
            <Segment inverted style={{ marginTop: "-1.5rem !important;" }}>
              {follow.name} started following you
            </Segment>
          </SegmentGroup>
        </Link>
      );
    });
    return list;
  }

  getLikes() {
    const list = this.state.likes.map((like, index) => {
      if (Math.floor(index / 3) != this.state.page - 1) return;
      return (
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
            <Segment inverted>
              {like.account.name} liked one of your posts
            </Segment>
          </SegmentGroup>
        </Link>
      );
    });
    return list;
  }

  getDisikes() {
    const list = this.state.dislikes.map((dislike, index) => {
      if (Math.floor(index / 3) != this.state.page - 1) return;
      return (
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
            <Segment inverted>
              {dislike.account.name} disliked one of your posts
            </Segment>
          </SegmentGroup>
        </Link>
      );
    });
    return list;
  }

  getComments() {
    const list = this.state.comments.map((comment, index) => {
      if (Math.floor(index / 3) != this.state.page - 1) return;
      return (
        <Link href={`../post/${comment.post.id_post}`}>
          <SegmentGroup>
            <Segment>
              <Image
                size="tiny"
                circular
                src={
                  comment.account.profile
                    ? "../" + comment.account.profile
                    : "../static/Images/profiles/empty.png"
                }
              />
            </Segment>
            <Segment inverted>
              {comment.account.name} made a comment on one of your posts
            </Segment>
          </SegmentGroup>
        </Link>
      );
    });

    return list;
  }

  handlePageChange = (e, data) => {
    this.setState({ page: data.activePage });
  };

  render() {
    const { follows, comments, likes, dislikes } = this.state;
    return (
      <Segment.Group
        style={{
          margin: "5rem auto",
          paddingTop: "4rem",
          width: "60%"
        }}
      >
        {this.getFollows()}
        {this.getLikes()}
        {this.getDisikes()}
        {this.getComments()}
        <Segment textAlign='center'>
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={Math.ceil(
              (follows.length +
                comments.length +
                likes.length +
                dislikes.length) /
                10
            )}
            inverted
            onPageChange={this.handlePageChange}
            style={{
              margin: "0 auto",
              marginBottom: "2rem"
            }}
          />
        </Segment>
      </Segment.Group>
    );
  }
}
