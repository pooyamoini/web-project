import React, { Component } from "react";
import styled from "styled-components";
import { Segment as Seg, Image } from "semantic-ui-react";

const Segment = styled(Seg)`
  background: transparent !important;
  font-size: 18px !important;
`;

const SegmentGroup = styled(Segment.Group)`
  border: solid 0.5px lightgray !important;
  margin: 0 !important;
`;

const Time = styled.p`
//   display: inline !important;
  margin: auto !important;
`;

export default class notification extends Component {
  render() {
    return (
      <Segment
        style={{
          margin: "5rem auto",
          width: "60%"
        }}
      >
        <SegmentGroup style={{}}>
          <Segment.Group inverted horizontal>
            <Segment>
              <Image size="tiny" circular src="static/Images/profiles/me.jpg" />
            </Segment>
            <Segment inverted textAlign = 'right'>
              <Time>30 mins ago</Time>
            </Segment>
          </Segment.Group>
          <Segment inverted>Alireza started following you</Segment>
        </SegmentGroup>

        <SegmentGroup style={{}}>
          <Segment.Group inverted horizontal>
            <Segment>
              <Image size="tiny" circular src="static/Images/profiles/me.jpg" />
            </Segment>
            <Segment inverted textAlign = 'right'>
              <Time>30 mins ago</Time>
            </Segment>
          </Segment.Group>
          <Segment inverted>Alireza made a comment on your post</Segment>
        </SegmentGroup>


      </Segment>
    );
  }
}
