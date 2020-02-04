import React, { Component } from 'react'
import { Comment, Form, Button } from 'semantic-ui-react'
import Theme from '../../../public/theme'
import Link from 'next/link'
import { replyCommentAPI } from '../../../api/comment/'

export const Reply = ({ display, name, handle, handleChange }) => (
  <Form reply style={{ display }}>
    <Form.TextArea
      style={{ marginLeft: '5%', width: '90%', height: '20%' }}
      id={'reply'.concat(name)}
      onChange={handleChange}
    />
    <Button
      secondary
      positive
      style={{ marginBottom: '1rem', marginLeft: '5%' }}
      onClick={handle}
    >
      add Reply
    </Button>
  </Form>
)

class CommentG extends Component {
  constructor (props) {
    super(props)
    this.state = { display: 'none' }
    this.toReply = this.toReply.bind(this)
    this.doneReply = this.doneReply.bind(this)
    this.submit = this.submit.bind(this)
  }

  doneReply () {
    this.setState({ display: 'none' })
    const { name } = this.props
  }

  toReply () {
    const { display } = this.state
    if (display === 'block') {
      this.setState({ display: 'none' })
      return
    }
    this.setState({ display: 'block' })
  }

  async submit () {
    const { name, cid } = this.props
    const value = document.getElementById('reply'.concat(name)).value
    document.getElementById('reply'.concat(name)).value = ''
    const token = localStorage.getItem('token')
    const pid = window.location.href.split('/')[4]
    await replyCommentAPI(token, pid, cid, value)
    window.location.reload()
    this.doneReply()
  }

  render () {
    const { name, content, account, date } = this.props
    const { display } = this.state
    const color = Theme.post.textColor
    const gStyle = { color }
    return (
      <Comment style={{ marginLeft: '1rem' }}>
        <Comment.Avatar
          src={
            account.profile
              ? '../' + account.profile
              : '../static/Images/profiles/empty.png'
          }
        />
        <Comment.Content>
          <Link href={`/profile/${account.username}`}>
            <Comment.Author style={gStyle} as='a'>
              {account.name}
            </Comment.Author>
          </Link>
          <Comment.Metadata style={{ color: 'grey' }}>
            <div>{date}</div>
          </Comment.Metadata>
          <Comment.Text style={gStyle}>{content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action style={{ color: 'grey' }} onClick={this.toReply}>
              Reply
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Reply
          name={name}
          display={display}
          handle={this.submit}
          handleChange={this.props.handleChange}
        />
      </Comment>
    )
  }
}

export default CommentG
