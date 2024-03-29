import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Menu as Me,
  Container,
  Button,
  Header,
  Modal,
  Input,
  Form as Fo,
  TextArea,
  Grid as Gr,
  Responsive,
  Segment
} from 'semantic-ui-react'
import { createPostAPI } from '../../api/post/'
import AddIcon from '@material-ui/icons/Add'
import Post from '../profile-page/profile-post'
import NoSSR from 'react-no-ssr'

const Menu = styled(Me)`
  color: white !important;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  border-color: rgb(102, 102, 102) !important;
`

const Grid = styled(Gr)`
  margin: 1.5rem auto !important;
`

const GridColumnStyleDesktop = {
  width: '30%',
  margin: '1rem'
}

const GridColumnStyleTablet = {
  width: '45%',
  margin: '1rem '
}

const GridColumnStyleMobile = {
  width: '90%',
  margin: '1rem'
}

const Form = styled(Fo)``

class NewPost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false,
      imageModalOpen: false,
      contentModalOpen: false,
      image: '',
      content: '',
      submittedImage: '',
      submittedContent: ''
    }
    this.createPost = this.createPost.bind(this)
    this.setImage = this.setImage.bind(this)
  }

  handleClose = () => {
    this.setState({
      image: '',
      content: '',
      modalOpen: false,
      imageModalOpen: false,
      contentModalOpen: false
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  async createPost () {
    const { content, image } = this.state
    const token = localStorage.getItem('token')
    try {
      const imagePath = image ? 'static/Images/photos/' + image : ''
      const res = await createPostAPI({ content, image: imagePath, token })
      this.handleClose()
      window.location.reload()
    } catch (e) {
      alert('some thing wrong happend')
    }
  }

  handleSubmit = () => {
    const { image, content } = this.state
    this.setState({
      submittedImage: image,
      submittedConent: content
    })
    this.handleClose()
  }

  openImageModal = () => {
    this.setState({ imageModalOpen: true })
  }

  openContentModal = () => {
    this.setState({ contentModalOpen: true })
  }

  setImage () {
    const x = document.getElementById('input-img')
    const nameImg = x.files.item(0).name
    this.setState({ image: nameImg })
  }

  getImageModal () {
    return (
      <Modal
        open={this.state.imageModalOpen}
        onClose={this.handleClose}
        trigger={
          <Button color='green' inverted onClick={this.openImageModal}>
            Next
          </Button>
        }
        basic
        size='small'
      >
        <Header content='Select an Image' />
        <Modal.Content>
          <Form inverted size='large'>
            <Form.Field
              control={Input}
              label='Image'
              name='image'
              placeholder='Url'
              onChange={this.handleChange}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={this.handleClose}>
            Cancel
          </Button>
          <Button color='green' inverted onClick={this.createPost}>
            Done
          </Button>
          <input
            type='file'
            accept='image/*'
            required
            id='input-img'
            onChange={this.setImage}
          />
        </Modal.Actions>
      </Modal>
    )
  }

  render () {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={
          <Button
            icon
            circular
            onClick={this.handleOpen}
            size='small'
            style={{
              'background-color': 'white',
              color: 'black',
              'margin-right': '2rem',
              visibility: this.props.active
            }}
          >
            <AddIcon size='large' />
          </Button>
        }
        basic
        size='small'
      >
        <Header content='Write The Content' />
        <Modal.Content>
          <Form inverted size='large'>
            <Form.Field
              control={TextArea}
              label='Content'
              name='content'
              placeholder='...'
              required
              onChange={this.handleChange}
              error={
                this.state.content == '' ? "Content Can't Be Empty" : false
              }
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={this.handleClose}>
            Cancel
          </Button>
          {this.getImageModal()}
        </Modal.Actions>
      </Modal>
    )
  }
}

export default class ProfilePostsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { activeSection: 'your posts' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeSection: name })

  makePosts (postsList, account, date, n, row) {
    const list = []
    postsList.forEach(function (post, index) {
      if (index % n != row) return
      list.push(
        <Post
          name={post.account}
          src={
            account.profile
              ? '../' + account.profile
              : '../static/Images/profiles/empty.png'
          }
          key={post.title}
          desc={post.content}
          image={post.image}
          id={post.id_post}
          date={date[index]}
        ></Post>
      )
    })
    return list
  }

  getNewPost () {
    if (this.props.type != 'self') return
    return (
      <NewPost
        active={this.state.activeSection == 'your posts' ? 'visible' : 'hidden'}
      />
    )
  }

  getMenu () {
    if (this.props.type != 'self') return
    return (
      <Menu
        inverted
        borderless
        pointing
        secondary
        compact
        width={2}
        size='massive'
        style={{
          'margin-top': '-1.7rem'
        }}
      >
        <Menu.Item
          name='your posts'
          active={this.state.activeSection == 'your posts'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='followed posts'
          active={this.state.activeSection == 'followed posts'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }

  getPosts (postsList, account, date) {
    return (
      <Segment.Group basic>
        <NoSSR>
          <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Grid columns={1}>
              <Grid.Column style={GridColumnStyleMobile}>
                {this.makePosts(postsList, account, date, 1, 0)}
              </Grid.Column>
            </Grid>
          </Responsive>
          <Responsive
            minWidth={Responsive.onlyTablet.minWidth}
            maxWidth={Responsive.onlyTablet.maxWidth}
          >
            <Grid columns={2}>
              <Grid.Column style={GridColumnStyleTablet}>
                {this.makePosts(postsList, account, date, 2, 0)}
              </Grid.Column>
              <Grid.Column style={GridColumnStyleTablet}>
                {this.makePosts(postsList, account, date, 2, 1)}
              </Grid.Column>
            </Grid>
          </Responsive>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            maxWidth={Responsive.onlyComputer.maxWidth}
          >
            <Grid columns={3}>
              <Grid.Column style={GridColumnStyleDesktop}>
                {this.makePosts(postsList, account, date, 3, 0)}
              </Grid.Column>
              <Grid.Column style={GridColumnStyleDesktop}>
                {this.makePosts(postsList, account, date, 3, 1)}
              </Grid.Column>
              <Grid.Column style={GridColumnStyleDesktop}>
                {this.makePosts(postsList, account, date, 3, 2)}
              </Grid.Column>
            </Grid>
          </Responsive>
        </NoSSR>
      </Segment.Group>
    )
  }

  render () {
    let postsList = []
    if (this.props.type == 'self') {
      postsList =
        this.state.activeSection == 'your posts'
          ? this.props.data.yourPosts
          : this.props.data.followedPosts
    } else {
      postsList = this.props.data.yourPosts
    }
    return (
      <Container
        textAlign='center'
        style={{
          width: '90%;',
          margin: '1rem auto !important;'
        }}
      >
        {this.getNewPost()}
        {this.getMenu()}
        {this.getPosts(this.props.posts, this.props.account, this.props.date)}
      </Container>
    )
  }
}
