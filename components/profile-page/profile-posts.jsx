import React, { Component } from "react";
import styled from "styled-components";
import {
  Menu as Me,
  Container,
  Button,
  Header,
  Modal
} from "semantic-ui-react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const Menu = styled(Me)`
  color: white !important;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  border-color: rgb(102, 102, 102) !important;
`;

const MenuItem = styled(Menu.Item)``;

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleClose = () => this.setState({ modalOpen: false });

  handleOpen = () => this.setState({ modalOpen: true });

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={
          <Button
            icon
            circular
            onClick = {this.handleOpen}
            size="small"
            style={{
              "background-color": "white",
              color: "black",
              "margin-right": "2rem",
              visibility: this.props.active
            }}
          >
            <AddIcon size="large" />
          </Button>
        }
        basic
        size="small"
      >
        <Header content="Create New Post" />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={this.handleClose}>
            Cancel
          </Button>
          <Button color="green" inverted onClick={this.handleClose}>
            Done
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default class ProfilePosts extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSection: "your posts" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeSection: name });

  render() {
    const { activeSection } = this.state;

    return (
      <Container
        textAlign="center"
        style={{
          width: "70%;",
          margin: "1rem auto !important;"
        }}
      >
        <NewPost
          active={activeSection == "your posts" ? "visible" : "hidden"}
        />
        <Menu
          inverted
          borderless
          pointing
          secondary
          compact
          width={2}
          size="massive"
          style={{
            "margin-top": "-1.7rem"
          }}
        >
          <MenuItem
            name="your posts"
            active={activeSection == "your posts"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="followed posts"
            active={activeSection == "followed posts"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Container>
    );
  }
}
