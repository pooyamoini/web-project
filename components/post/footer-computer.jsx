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
  margin-left: 0.5rem !important;
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
  color: color === undefined ? 'white' : color
})

const FooterMenu = props => (
  <Menu
    fluid
    style={{ backgroundColor: Theme.post.backgroundColor }}
    widths={4}
  >
    <Icon position='left'>
      <CommentIcon
        fontSize='large'
        style={handleStyle()}
        onClick={props.handleCommentClick}
      />
      <Data>12 comments</Data>
    </Icon>
    <Icon position='left'>
      <LikesIcon
        fontSize='large'
        style={handleStyle(props.color)}
        onClick={props.handleLike}
      />
      <Data>{props.likes} Likes</Data>
    </Icon>
    <Icon position='left'>
      <DisLikeIcon
        fontSize='large'
        style={handleStyle(props.colorD)}
        onClick={props.handleDisLike}
      />
      <Data>{props.dislikes} Dis Likes</Data>
    </Icon>
    <Icon position='right'>
      <Modal trigger={<ShareIcon fontSize='large' style={handleStyle()} />}>
        <Modal.Content>
          <p>http://www.localhost:3000/post/2483931074231</p>
        </Modal.Content>
      </Modal>
    </Icon>
  </Menu>
)

export default FooterMenu
