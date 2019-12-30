import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../../public/theme";
import SettingsIcon from "@material-ui/icons/Settings";

import { Grid as Gr, Segment as Seg, Card, Image } from "semantic-ui-react";

const Grid = styled(Gr)`
  width: 100%;
  margin: 5rem auto !important;
`;

const Segment = styled(Seg)`
  border: none !important;
  color: white;
  background: transparent !important;
`;

const SegmentGroup = styled(Segment.Group)`
  border: none !important;
  box-shadow: none !important;
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
              <Segment>{this.props.data.userName}</Segment>
              <Segment>
                <SettingsIcon centered fontSize="large"></SettingsIcon>
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
