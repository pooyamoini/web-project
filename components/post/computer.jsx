import React, { Component } from 'react'
import {
  Card as Crd,
  Image,
  Grid,
  Segment as Seg,
  Modal,
  Button,
  Header,
  Form,
  TextArea
} from 'semantic-ui-react'
import Comments from './comments/computer'
import styled from 'styled-components'
import Theme from '../../public/theme'
import Link from 'next/link'
import FooterMenu from './footer-computer'
import { likeAPI } from '../../api/post/'
import { editPostAPI } from '../../api/post'

const Segment = styled(Seg)`
  padding: 0 !important;
  background: ${Theme.post.backgroundColor} !important;
  margin-bottom: 0 !important;
  color: white !important;
`

const Card = styled(Crd)`
  width: 100% !important;
  box-shadow: none !important;
  background-color: ${Theme.post.backgroundColor} !important;
`

const ImageAvatar = styled(Image)`
  border-radius: 50% !important;
  display: inline !important;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`

const Text = styled.a`
  font-size: 1rem;
  display: inline;
`

const Info = styled.p`
  float: right;
  margin-top: 0.6 rem;
  opacity: 0.6;
`

const Informations = ({ name, date, src, username }) => (
  <Link href={`../profile/${username}`}>
    <Segment basic>
      <ImageAvatar
        src={src ? '../' + src : '../static/Images/profiles/empty.png'}
        size='mini'
      />
      <Text>{name}</Text>
      <Info>{date}</Info>
    </Segment>
  </Link>
)

class Post extends Component {
  constructor (props) {
    super(props)
    const { likes, dislikes } = this.props
    this.state = {
      display: 'none',
      likes,
      dislikes,
      color: 'white',
      colorD: 'white',
      open: false
    }
    this.handleCommentClick = this.handleCommentClick.bind(this)
    this.handleLike = this.handleLike.bind(this)
    this.handleUndoLike = this.handleUndoLike.bind(this)
    this.handleDisLike = this.handleDisLike.bind(this)
    this.like = this.like.bind(this)
    this.dislike = this.dislike.bind(this)
    this.getImage = this.getImage.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount () {
    setTimeout(() => {
      this.handleLike()
    }, 1000)
  }

  handleClose () {
    this.setState({ open: false })
  }

  async like () {
    console.log('enter')
    const token = localStorage.getItem('token')
    await likeAPI(token, this.props.post.id_post, 'like')
    window.location.reload()
  }

  async dislike () {
    console.log('enter')
    const token = localStorage.getItem('token')
    await likeAPI(token, this.props.post.id_post, 'dislike')
    window.location.reload()
  }

  handleCommentClick () {
    const { display } = this.state
    const next = display === 'block' ? 'none' : 'block'
    this.setState({ display: next })
  }

  handleLike () {
    const { isliked, isdisliked } = this.props
    const color = isliked ? '#4267b2' : '#fff'
    const colorD = isdisliked ? '#4267b2' : '#fff'
    this.setState({ color, colorD })
  }

  handleDisLike () {
    const { dislikes, colorD } = this.state
    if (colorD === '#4267b2') {
      this.handleUndoDisLike()
      return
    }
    this.setState({ dislikes: dislikes + 1, colorD: '#4267b2' })
  }

  handleUndoLike () {
    const { likes } = this.state
    this.setState({ likes: likes - 1, color: '#fff' })
  }

  handleUndoDisLike () {
    const { dislikes } = this.state
    this.setState({ dislikes: dislikes - 1, colorD: '#fff' })
  }

  getImage (src) {
    if (src == '') return <></>
    return <Image src={'../' + src} wrapped ui={false} />
  }

  handleClick () {
    const { mine } = this.props
    if (mine) this.setState({ open: true })
  }

  render () {
    const { display, open } = this.state
    const { post, owner, date, mine, comments } = this.props
    console.log(post.content)
    return (
      <>
        <Edit
          open={open}
          close={this.handleClose}
          pid={this.props.post.id_post}
          doc={post.content}
        ></Edit>
        <Grid centered style={{ marginTop: '7rem' }}>
          <Grid.Column centered computer={7} mobile={16} tablet={13}>
            <Card>
              <Card.Content>
                <Informations
                  name={owner.name}
                  src={owner.profile ? owner.profile : ''}
                  username={owner.username}
                  date={date}
                />
                <Card.Description style={{ color: Theme.post.textColor }}>
                  <p onClick={this.handleClick}>{post.content}</p>
                </Card.Description>
              </Card.Content>
              {this.getImage(post.image)}
              <FooterMenu
                handleLike={this.handleLike}
                {...this.state}
                likes={
                  this.props.post.nlikes ? this.props.post.nlikes.length : 0
                }
                dislikes={
                  this.props.post.ndislikes
                    ? this.props.post.ndislikes.length
                    : 0
                }
                like={this.like}
                dislike={this.dislike}
                pid={this.props.post.id_post}
                mine={mine}
                handleCommentClick={this.handleCommentClick}
              />
              <Comments display={display} commentsData={comments} />
            </Card>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

class Edit extends Component {
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
    this.editPost = this.editPost.bind(this)
    this.setImage = this.setImage.bind(this)
  }

  componentDidMount () {
    const { open } = this.state
    setTimeout(() => {
      this.setState({ modalOpen: open, content: this.props.doc })
    }, 2000)
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

  async editPost () {
    const { content } = this.state
    const { pid } = this.props
    const token = localStorage.getItem('token')
    try {
      const res = await editPostAPI(token, pid, content)
      this.props.close()
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

  render () {
    const { content } = this.state
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.close}
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
              value={content}
              required
              onChange={this.handleChange}
              error={
                this.state.content == '' ? "Content Can't Be Empty" : false
              }
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={this.props.close}>
            Cancel
          </Button>
          <Button color='green' inverted onClick={this.editPost}>
            Next
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default Post
