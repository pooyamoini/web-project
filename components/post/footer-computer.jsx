import React, { Component } from 'react'
import { Menu as Men, Modal } from 'semantic-ui-react'
import styled from 'styled-components'
import { deletePostAPI } from '../../api/post/'
import LikesIcon from '@material-ui/icons/ThumbUpAlt'
import DisLikeIcon from '@material-ui/icons/ThumbDown'
import CommentIcon from '@material-ui/icons/ChatBubble'
import DeleteIcon from '@material-ui/icons/Delete'
import ShareIcon from '@material-ui/icons/Share'
import Router from 'next/router'
import Theme from '../../public/theme'

const Data = styled.p`
  font-size: 1rem;
  color: white;
  margin-left: 0.5rem !important;
  margin-right: 1rem !important;
  margin-top: 0.5rem !important;
  display: none;
`

const Menu = styled(Men)`
  border: 0 !important;
  box-shadow: none !important;
  margin-top: 0 !important;
`

const Icon = styled(Menu.Item)`
  &:before {
    width: 0 !important;
  }
  color: white !important;
`

const handleStyle = color => ({
  color: color === undefined ? 'white' : color
})

class FooterMenu extends Component {
  constructor (props) {
    super(props)
    this.getDeleteIcon = this.getDeleteIcon.bind(this)
    this.delete = this.delete.bind(this)
  }

  getDeleteIcon () {
    const { mine } = this.props
    if (mine) {
      return (
        <Icon>
          <DeleteIcon
            onClick={this.delete}
            fontSize='large'
            color='error'
          ></DeleteIcon>
        </Icon>
      )
    }
    return <></>
  }

  async delete () {
    const { pid } = this.props
    const token = localStorage.getItem('token')
    try {
      const res = await deletePostAPI(token, pid)
      Router.push('/profile/profile')
      return
    } catch (e) {
      Router.push('/')
    }
  }

  render () {
    const { mine } = this.props
    const width = mine ? 5 : 4
    return (
      <>
        <Menu
          fluid
          style={{ backgroundColor: Theme.post.backgroundColor }}
          widths={width}
        >
          <Icon position='left'>
            <CommentIcon
              fontSize='large'
              style={handleStyle()}
              onClick={this.props.handleCommentClick}
            />
            <Data>12 comments</Data>
          </Icon>
          <Icon position='left' onClick={this.props.like}>
            <LikesIcon fontSize='large' style={handleStyle(this.props.color)} />
            <Data>{this.props.likes} Likes</Data>
          </Icon>
          <Icon position='left' onClick={this.props.dislike}>
            <DisLikeIcon
              fontSize='large'
              style={handleStyle(this.props.colorD)}
            />
            <Data>{this.props.dislikes} dislikes</Data>
          </Icon>
          {this.getDeleteIcon()}
          <Icon position='right'>
            <Modal
              trigger={<ShareIcon fontSize='large' style={handleStyle()} />}
            >
              <Modal.Content>
                <p>http://www.localhost:3000/post/{this.props.pid}</p>
              </Modal.Content>
            </Modal>
          </Icon>
        </Menu>
        <Menu text widths={4}>
          <Icon name={`${this.props.ncomments}  comments`} />
          <Icon>{this.props.likes} likes</Icon>
          <Icon>{this.props.dislikes} dislikes</Icon>
          <Icon name='' />
        </Menu>
      </>
    )
  }
}

export default FooterMenu
