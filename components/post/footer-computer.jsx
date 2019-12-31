import React from 'react'
import { Menu as Men, Modal } from 'semantic-ui-react'
import styled from 'styled-components'
import LikesIcon from '@material-ui/icons/ThumbUpAlt'
import DisLikeIcon from '@material-ui/icons/ThumbDown'
import CommentIcon from '@material-ui/icons/ChatBubble'
import ShareIcon from '@material-ui/icons/Share'
import Theme from '../../public/theme'

const Data = styled.p`
  font-size: 1rem;
  color: white;
  margin-right: 1rem !important;
  margin-top: 0.5rem !important;
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

const handleStyle = color => ({
  marginRight: '.75rem !important',
  color: color === undefined ? 'white' : color
})

const FooterMenu = props => (
  <Menu floated='right' style={{ backgroundColor: Theme.post.backgroundColor }}>
    <Menu.Menu>
      {' '}
      <Icon>
        <CommentIcon
          fontSize='large'
          style={handleStyle()}
          onClick={props.handleCommentClick}
        />
        <Data>12 comments</Data>
        <LikesIcon
          fontSize='large'
          style={handleStyle(props.color)}
          onClick={props.handleLike}
        />
        <Data>{props.likes} Likes</Data>
        <DisLikeIcon fontSize='large' style={handleStyle()} />
        <Data>{props.disLikes} Dislikes</Data>
        <Modal trigger={<ShareIcon fontSize='large' style={handleStyle()} />}>
          <Modal.Content>
            <p>http://www.localhost:3000/post/2483931074231</p>
          </Modal.Content>
        </Modal>
      </Icon>
    </Menu.Menu>
  </Menu>
)

export default FooterMenu
