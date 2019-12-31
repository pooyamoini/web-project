import React, { Component } from 'react'
import {
  Card as Crd,
  Image,
  Grid,
  Segment as Seg,
  Menu as Men
} from 'semantic-ui-react'
import Content from '../../public/post-content'
import Comments from './comments/computer'
import styled from 'styled-components'
import Theme from '../../public/theme'
import LikesIcon from '@material-ui/icons/ThumbUpAlt'
import CommentIcon from '@material-ui/icons/ChatBubble'
import ShareIcon from '@material-ui/icons/Share'

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

const Menu = styled(Men)`
  border: 0 !important;
  box-shadow: none !important;
`

const Icon = styled(Menu.Item)`
  &:before {
    width: 0 !important;
  }
`

const Data = styled.p`
  font-size: 1rem;
  color: white;
  margin-right: 1rem !important;
  margin-top: 0.5rem !important;
`

const handleStyle = color => ({
  marginRight: '.75rem !important',
  color: color === undefined ? 'white' : color
})

class Post extends Component {
  constructor (props) {
    super(props)
    const { likes } = this.props
    this.state = { display: 'none', likes, color: 'white' }
    this.handleCommentClick = this.handleCommentClick.bind(this)
    this.handleLike = this.handleLike.bind(this)
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
      this.handleDisLike()
      return
    }
    this.setState({ likes: likes + 1, color: '#4267b2' })
  }

  handleDisLike () {
    const { likes } = this.state
    this.setState({ likes: likes - 1, color: '#fff' })
  }

  render () {
    const { display, color, likes } = this.state
    return (
      <Grid centered style={{ marginTop: '7rem' }}>
        <Grid.Column centered width={7}>
          <Card>
            <Card.Content>
              <Segment basic>
                <ImageAvatar
                  src='/static/Images/global/avatar2.jpg'
                  size='mini'
                />
                <Text>Kian Bakhtari</Text>
                <Info>3 hours ago</Info>
              </Segment>
              <Card.Description style={{ color: Theme.post.textColor }}>
                {Content}
              </Card.Description>
            </Card.Content>
            <Image
              src='/static/Images/global/post-page.jpg'
              wrapped
              ui={false}
            />
            <Menu
              floated='right'
              style={{ backgroundColor: Theme.post.backgroundColor }}
            >
              <Menu.Menu>
                {' '}
                <Icon>
                  <CommentIcon
                    fontSize='large'
                    style={handleStyle()}
                    onClick={this.handleCommentClick}
                  />
                  <Data>12 comments</Data>
                  <LikesIcon
                    fontSize='large'
                    style={handleStyle(color)}
                    onClick={this.handleLike}
                  />
                  <Data>{likes} Likes</Data>
                  <ShareIcon fontSize='large' style={handleStyle()} />
                </Icon>
              </Menu.Menu>
            </Menu>
            <Comments display={display} />
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Post
