import React, { Component } from "react";
import styled from "styled-components";
import {
  Menu as Me,
  Container,
  Button,
  Header,
  Modal,
  Input,
  Form as Fo,
  TextArea,
  Grid
} from "semantic-ui-react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Post from "../profile-page/profile-post";

const Menu = styled(Me)`
  color: white !important;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  border-color: rgb(102, 102, 102) !important;
`;

const GridColumn = styled(Grid.Column)`
  width: 30% !important; 
  margin: 1rem !important;
`;

const Form = styled(Fo)``;

const MenuItem = styled(Menu.Item)``;

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      title: "",
      image: "",
      content: "",
      submittedTitle: "",
      submittedImage: "",
      submittedContent: ""
    };
  }

  handleClose = () => {
    this.setState({ title: "", image: "", content: "" });
    this.setState({ modalOpen: false });
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { title, image, content } = this.state;
    if (title == "" || content == "") return;
    this.setState({
      submittedTitle: title,
      submittedImage: image,
      submittedConent: content
    });
    this.handleClose();
  };

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={
          <Button
            icon
            circular
            onClick={this.handleOpen}
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
          <Form inverted size="large">
            <Form.Field
              control={Input}
              label="Title"
              name="title"
              placeholder="Title"
              required
              onChange={this.handleChange}
              error={this.state.title == "" ? "Title Can't Be Empty" : false}
            />
            <Form.Field
              control={Input}
              label="Image"
              name=" image"
              placeholder="Url"
              onChange={this.handleChange}
            />
            <Form.Field
              control={TextArea}
              label="Content"
              name="content"
              placeholder="..."
              required
              onChange={this.handleChange}
              error={
                this.state.content == "" ? "Content Can't Be Empty" : false
              }
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={this.handleClose}>
            Cancel
          </Button>
          <Button color="green" inverted onClick={this.handleSubmit}>
            Done
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default class ProfilePostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSection: "your posts" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeSection: name });

  makePosts(postsList, row) {

    const list = [];
    postsList.forEach(function(post, index) {
      if (index % 3 != row) return;
      list.push(
        <Post
          name={post.title}
          src={post.src}
          key={post.title}
          desc={post.content}
          image={post.image}
        ></Post>
      );
    });
    return list;
  }

  render() {
    const { activeSection } = this.state;
    const postsList =
      activeSection == "your posts"
        ? this.props.data.yourPosts
        : this.props.data.followedPosts;
    return (
      <Container
        textAlign="center"
        style={{
          width: "90%;",
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
        <Grid columns={3} style={{
          width: '100%',
          margin: '3rem'
        }}>
          <GridColumn>{this.makePosts(postsList, 0)}</GridColumn>
          <GridColumn>{this.makePosts(postsList, 1)}</GridColumn>
          <GridColumn>{this.makePosts(postsList, 2)}</GridColumn>
        </Grid>
      </Container>
    );
  }
}
