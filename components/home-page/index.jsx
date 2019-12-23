import React, { Component, createRef } from "react";
import {
  Grid,
  Image,
  Rail,
  Sticky,
  Header,
  Segment,
  Ref
} from "semantic-ui-react";
import RightContainer from "./rightContainer";

class GridExampleColumnWidth extends Component {
  constructor(props) {
    super(props);
    this.handleStick = this.handleStick.bind(this);
    this.handleUnStick = this.handleUnStick.bind(this);
    this.state = { marginTop: "1rem" };
  }

  handleStick() {
    console.log("STICK");
    this.setState({ marginTop: "10rem" });
  }

  handleUnStick() {
    this.setState({ marginTop: "1rem" });
  }

  contextRef = createRef();
  render() {
    const { marginTop } = this.state;
    return (
      <Grid
        centered
        style={{
          marginTop: "5rem",
          width: "85%",
          marginLeft: "7.5%",
          marginRight: "7.5%"
        }}
      >
        <Grid.Column width={12} style={{ minHeight: "5000px" }}></Grid.Column>
        <Grid.Column width={4}>
          <Ref innerRef={this.contextRef}>
            <Rail style={{ position: "absolute" }}>
              <Sticky
                context={this.contextRef}
                onStick={this.handleStick}
                onUnstick={this.handleUnStick}
              >
                <RightContainer marginTop={marginTop} />
                <RightContainer />
              </Sticky>
            </Rail>
          </Ref>
        </Grid.Column>
      </Grid>
    );
  }
}

export default GridExampleColumnWidth;
