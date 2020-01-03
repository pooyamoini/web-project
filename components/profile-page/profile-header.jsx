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
  Button
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
  // border: none !important;
  // box-shadow: none !important;
`;

export default class ProfileHeader extends Component {
  constructor(props){
    super(props);
    this.state = {followed: false}
  }


  changeFollow = () =>{
    this.setState(prevState => ({
      followed: !prevState.followed
    }));
  }
  
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
    if(!this.state.followed){
      return(
        <Button color='blue' onClick={this.changeFollow}>Follow</Button>
      );
    } else{
      return(
        <Button color='red' onClick={this.changeFollow}>Unfollow</Button>
      );
    }
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column width={5}>
          <Image
            size="small"
            centered
            circular
            src={this.props.data.image}
          ></Image>
        </Grid.Column>
        <Grid.Column width={7}>
          <SegmentGroup>
            <SegmentGroup horizontal>
              <Segment
                style={{
                  "margin-top": "1rem"
                }}
              >
                {this.props.data.userName}
              </Segment>
              <Segment textAlign="center">
                {this.getButton()}
              </Segment>
            </SegmentGroup>
            <SegmentGroup horizontal>
              <Segment>{this.props.data.postsNumber} Posts</Segment>
              <Segment>
                <Dropdown
                  inline
                  text={this.props.data.followersNumber + " Followers"}
                  pointing={false}
                  options={Followers}
                  scrolling
                  fluid
                  icon="none"
                  style={{
                    width: "120%"
                  }}
                />
              </Segment>
              <Segment>
                <Dropdown
                  inline
                  text={this.props.data.followingNumber + " Following"}
                  pointing={false}
                  options={Followers}
                  scrolling
                  fluid
                  icon="none"
                  style={{
                    width: "120%"
                  }}
                />
              </Segment>
            </SegmentGroup>
            <Segment>{this.props.data.bio}</Segment>
          </SegmentGroup>
        </Grid.Column>
      </Grid>
    );
  }
}
