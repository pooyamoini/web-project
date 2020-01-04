import React, { Component } from 'react'
import {
  Card as Crd,
  Image,
  Grid,
  Segment as Seg,
} from 'semantic-ui-react'
import Content from '../../public/post-content'
import Comments from './comments/computer'
import styled from 'styled-components'
import Theme from '../../public/theme'
import FooterMenu from './footer-computer'

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

const Informations = () => (
  <Segment basic>
    <ImageAvatar src='/static/Images/global/avatar2.jpg' size='mini' />
    <Text>Kian Bakhtari</Text>
    <Info>3 hours ago</Info>
  </Segment>
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
  }

  handleCommentClick () {
    const { display } = this.state
    const next = display === 'block' ? 'none' : 'block'
    this.setState({ display: next })
  }

  handleLike () {
    const { likes, color } = this.state
    if (color === '#4267b2') {
      this.handleUndoLike()
      return
    }
    this.setState({ likes: likes + 1, color: '#4267b2' })
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
    return (
      <Grid centered style={{ marginTop: '7rem' }}>
        <Grid.Column centered width={7}>
          <Card>
            <Card.Content>
              <Informations />
              <Card.Description style={{ color: Theme.post.textColor }}>
                {Content}
              </Card.Description>
            </Card.Content>
            <Image
              src='/static/Images/global/post-page.jpg'
              wrapped
              ui={false}
            />
            <FooterMenu
              handleLike={this.handleLike}
              handleCommentClick={this.handleCommentClick}
              handleDisLike={this.handleDisLike}
              {...this.state}
            />
            <Comments display={display} />
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Post
