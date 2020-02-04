import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import Theme from '../../../public/theme'
import { Reply } from './reply'
import CommentG from './reply'
import Link from 'next/link'
import { replyCommentAPI } from '../../../api/comment'

class CommentComp extends Component {
  constructor (props) {
    super(props)
    this.toReply = this.toReply.bind(this)
    this.addReply = this.addReply.bind(this)
    this.doneReply = this.doneReply.bind(this)
    this.GenerateReplies = this.GenerateReplies.bind(this)
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    const { reply } = this.props
    this.state = { display: 'none', reply, content: '' }
  }

  doneReply () {
    this.setState({ display: 'none' })
  }

  toReply () {
    const { display } = this.state
    if (display === 'block') {
      this.setState({ display: 'none' })
      return
    }
    this.setState({ display: 'block' })
  }

  addReply (name, content, src, date = 'just now') {
    const { reply } = this.state
    reply.push({
      name,
      src,
      content,
      date
    })
    this.setState({ reply })
  }

  handleChange (e) {
    this.setState({ content: e.target.value })
  }

  async submit () {
    const { cid } = this.props
    const content = this.state.content
    const id = window.location.href.split('/')[4]
    const token = localStorage.getItem('token')
    await replyCommentAPI(token, id, cid, content)
    window.location.reload()
  }

  GenerateReplies ({ replies, addReply, cid }) {
    if (replies === undefined || replies.length === 0) return <></>
    return (
      <Comment.Group>
        {replies.map(x => (
          <CommentG {...x} key={x} addReply={addReply} cid={cid}/>
        ))}
      </Comment.Group>
    )
  }

  render () {
    const { account, main, src, replies, cid } = this.props
    const { display } = this.state
    const color = Theme.post.textColor
    const gStyle = { color }
    return (
      <Comment style={{ marginLeft: '1rem' }}>
        <Comment.Avatar
          src={src ? src : '../static/Images/profiles/empty.png'}
        />
        <Comment.Content>
          <Link href={`/profile/${account}`}>
            <Comment.Author style={gStyle} as='a'>
              {account}
            </Comment.Author>
          </Link>
          <Comment.Metadata style={{ color: 'grey' }}>
          </Comment.Metadata>
          <Comment.Text style={gStyle}>{main}</Comment.Text>
          <Comment.Actions>
            <Comment.Action style={{ color: 'grey' }} onClick={this.toReply}>
              Reply
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Reply
          display={display}
          name={name}
          handle={this.submit}
          cid={cid}
          handleChange={this.handleChange}
        />
        <this.GenerateReplies
          replies={replies}
          addReply={this.addReply}
          cid={cid}
        />
      </Comment>
    )
  }
}

export default CommentComp
