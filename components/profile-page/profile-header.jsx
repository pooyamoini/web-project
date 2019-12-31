import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../../public/theme";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import { Grid as Gr, Segment as Seg, Card, Image } from "semantic-ui-react";

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
              <Segment style={{
                'margin-top': '1rem'
              }}>{this.props.data.userName}</Segment>
              <Segment textAlign="center">
                <IconButton aria-label="setting" size='medium' style={{
                  color: 'white',
                }}>
                  <SettingsIcon centered fontSize="large"></SettingsIcon>
                </IconButton>
              </Segment>
            </SegmentGroup>
            <SegmentGroup horizontal>
              <Segment>{this.props.data.postsNumber} Posts</Segment>
              <Segment>{this.props.data.followersNumber} Followers</Segment>
              <Segment>{this.props.data.followingNumber} Following</Segment>
            </SegmentGroup>
            <Segment>{this.props.data.bio}</Segment>
          </SegmentGroup>
        </Grid.Column>
      </Grid>
    );
  }
}
