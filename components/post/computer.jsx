import React, { Component } from 'react'
import { Card as Crd, Image, Grid, Segment as Seg } from 'semantic-ui-react'
import Comments from './comments/computer'
import styled from 'styled-components'
import Theme from '../../public/theme'
import Link from 'next/link'
import FooterMenu from './footer-computer'
import { likeAPI } from '../../api/post/'

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

const Informations = ({ name, time, src, username }) => (
  <Link href={`../profile/${username}`}>
    <Segment basic>
      <ImageAvatar src={'../' + src} size='mini' />
      <Text>{name}</Text>
      <Info>3 hours ago</Info>
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
      colorD: 'white'
    }
    this.handleCommentClick = this.handleCommentClick.bind(this)
    this.handleLike = this.handleLike.bind(this)
    this.handleUndoLike = this.handleUndoLike.bind(this)
    this.handleDisLike = this.handleDisLike.bind(this)
    this.like = this.like.bind(this)
    this.dislike = this.dislike.bind(this)
  }

  componentDidMount () {
    setTimeout(() => {
      this.handleLike()
    }, 1000)
  }

  async like () {
    console.log('enter')
    const token = localStorage.getItem('token')
    const res = await likeAPI(token, this.props.post.id_post, 'like')
    window.location.reload()
  }

  async dislike () {
    console.log('enter')
    const token = localStorage.getItem('token')
    const res = await likeAPI(token, this.props.post.id_post, 'dislike')
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

  render () {
    const { display } = this.state
    const { post, owner } = this.props
    return (
      <Grid centered style={{ marginTop: '7rem' }}>
        <Grid.Column centered computer={7} mobile={16} tablet={13}>
          <Card>
            <Card.Content>
              <Informations
                name={owner.name}
                src={owner.profile ? owner.profile : ''}
                username={owner.username}
              />
              <Card.Description style={{ color: Theme.post.textColor }}>
                {post.content}
              </Card.Description>
            </Card.Content>
            <Image src={'../' + post.image} wrapped ui={false} />
            <FooterMenu
              handleLike={this.handleLike}
              {...this.state}
              likes={this.props.post.nlikes ? this.props.post.nlikes.length : 0}
              dislikes={
                this.props.post.ndislikes ? this.props.post.ndislikes.length : 0
              }
              like={this.like}
              dislike={this.dislike}
              pid={this.props.post.id_post}
            />
            <Comments display={display} />
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Post
