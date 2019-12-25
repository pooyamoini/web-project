import React, { Component, createRef } from "react";
import { Grid, Rail, Sticky, Ref } from "semantic-ui-react";
import RightContainer from "./rightContainer";

class HomePageDesktop extends Component {
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
        <Grid.Column
          width={8}
          style={{
            minHeight: "5000px",
            border: "1px solid #e6e6e6E6",
            marginLeft: "11rem"
          }}
        ></Grid.Column>
        <Grid.Column width={4} style={{ marginLeft: "10.5rem" }}>
          <Ref innerRef={this.contextRef}>
            <Rail style={{ position: "absolute" }}>
              <Sticky
                context={this.contextRef}
                onStick={this.handleStick}
                onUnstick={this.handleUnStick}
              >
                <RightContainer
                  marginTop={marginTop}
                  content="Suggestion for Accounts"
                  type="account"
                />
                <RightContainer content="Suggestion for Channel" />
              </Sticky>
            </Rail>
          </Ref>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HomePageDesktop;
