import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../../public/theme";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import Followers from "../../public/json-files/followers";
import {
  Grid as Gr,
  Segment as Seg,
  Card,
  Image,
  Dropdown,
  Button,
  Divider
} from "semantic-ui-react";

const Grid = styled(Gr)`
  width: 80%;
  margin: 5rem auto 0 !important;
  border-bottom: 2.5px solid rgb(102, 102, 102);
`;

const Segment = styled(Seg)`
  // border: none !important;
  color: white;
  background: transparent !important;
`;

const SegmentGroup = styled(Segment.Group)`
  border: none !important;
  box-shadow: none !important;
`;

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { followed: false };
  }

  changeFollow = () => {
    this.setState(prevState => ({
      followed: !prevState.followed
    }));
  };

  getButton() {
    if (this.props.type == "self") {
      return (
        <IconButton
          aria-label="setting"
          size="medium"
          style={{
            color: "white"
          }}
        >
          <SettingsIcon centered fontSize="large"></SettingsIcon>
        </IconButton>
      );
    }
    if (!this.state.followed) {
      return (
        <Button color="blue" onClick={this.changeFollow}>
          Follow
        </Button>
      );
    } else {
      return (
        <Button color="red" onClick={this.changeFollow}>
          Unfollow
        </Button>
      );
    }
  }

  render() {
    return (
      <SegmentGroup>
        <SegmentGroup horizontal>
          <Segment>
            <Image
              size="small"
              centered
              circular
              src={this.props.data.image}
            ></Image>
          </Segment>
          <SegmentGroup>
            <Segment
              style={{
                marginTop: "1rem",
                fontSize: "22px",
                fontWeight: "800"
              }}
            >
              {this.props.data.userName}
            </Segment>
            <Segment
              style={{
                marginTop: "0.5rem"
              }}
            >
              {this.getButton()}
            </Segment>
          </SegmentGroup>
        </SegmentGroup>
        <Segment
          style={{
            marginLeft: "1rem",
            fontSize: "20px"
          }}
        >
          {this.props.data.bio}
          <Divider inverted />
        </Segment>
        <SegmentGroup
          horizontal
          style={{
            height: "50% !important"
          }}
        >
          <Segment
            textAlign="center"
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginLeft: "1rem"
            }}
          >
            {this.props.data.postsNumber} <br></br>
            Posts
          </Segment>
          <Segment
            textAlign="center"
            style={{
              fontSize: "18px",
              fontWeight: "700"
            }}
          >
            {this.props.data.followersNumber} <br />
            <Dropdown
              inline
              text=" Followers"
              pointing={false}
              options={Followers}
              scrolling
              fluid
              icon="none"
              style={{
                width: "120%",
                marginLeft: "1.5rem",
                fontWeight: "0 !important"
              }}
            />
          </Segment>
          <Segment
            textAlign="center"
            style={{
              fontSize: "18px",
              fontWeight: "700"
            }}
          >
            {this.props.data.followingNumber} <br />
            <Dropdown
              inline
              text=" Following"
              pointing={false}
              options={Followers}
              scrolling
              fluid
              icon="none"
              style={{
                width: "120%",
                marginLeft: "1.5rem",
                fontWeight: "0 !important"
              }}
            />
          </Segment>
        </SegmentGroup>
        <Divider inverted />
      </SegmentGroup>
    );
  }
}
