import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import Theme from '../../../public/theme'
import { Reply } from './reply'
import CommentG from './reply'
import Link from 'next/link'

class CommentComp extends Component {
  constructor (props) {
    super(props)
    this.toReply = this.toReply.bind(this)
    this.addReply = this.addReply.bind(this)
    this.doneReply = this.doneReply.bind(this)
    this.GenerateReplies = this.GenerateReplies.bind(this)
    this.submit = this.submit.bind(this)
    const { reply } = this.props
    this.state = { display: 'none', reply }
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

  submit () {
    const { name } = this.props
    const nameW = 'pooya'
    const src = 'static/Images/global/avater3.jpg'
    const content = document.getElementById('reply'.concat(name)).value
    document.getElementById('reply'.concat(name)).value = ''
    this.addReply(nameW, content, src)
    this.doneReply()
  }

  GenerateReplies ({ replies, addReply }) {
    if (replies === undefined || replies.length === 0) return <></>
    return (
      <Comment.Group>
        {replies.map(x => (
          <CommentG {...x} key={x} addReply={addReply} />
        ))}
      </Comment.Group>
    )
  }

  render () {
    const { account, main, src } = this.props
    const { display, reply } = this.state
    const { replies } = this.props
    console.log(replies)
    const color = Theme.post.textColor
    const gStyle = { color }
    return (
      <Link href={`/profile/${account}`}>
        <Comment style={{ marginLeft: '1rem' }}>
          <Comment.Avatar
            src={src ? src : '../static/Images/profiles/empty.png'}
          />
          <Comment.Content>
            <Comment.Author style={gStyle} as='a'>
              {account}
            </Comment.Author>
            <Comment.Metadata style={{ color: 'grey' }}>
              <div>12 hours age</div>
            </Comment.Metadata>
            <Comment.Text style={gStyle}>{main}</Comment.Text>
            <Comment.Actions>
              <Comment.Action style={{ color: 'grey' }} onClick={this.toReply}>
                Reply
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Reply display={display} name={name} handle={this.submit} />
          <this.GenerateReplies replies={replies} addReply={this.addReply} />
        </Comment>
      </Link>
    )
  }
}

export default CommentComp
