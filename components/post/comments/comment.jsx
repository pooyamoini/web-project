import React, { Component } from 'react'
import { Comment, Form, Button } from 'semantic-ui-react'
import Theme from '../../../public/theme'

class CommentComp extends Component {
  constructor (props) {
    super(props)
    this.state = { displayReply: 'none', open: false }
    this.toReply = this.toReply.bind(this)
    this.doneReply = this.doneReply.bind(this)
  }

  doneReply () {
    // post data
    this.setState({ displayReply: 'none' })
  }

  toReply () {
    const { displayReply } = this.state
    if (displayReply === 'block') {
      this.setState({ displayReply: 'none' })
      return
    }
    this.setState({ displayReply: 'block' })
  }

  render () {
    const { name, date, content, src } = this.props
    const color = Theme.post.textColor
    const gStyle = { color }
    return (
      <Comment style={{ marginLeft: '1rem' }}>
        <Comment.Avatar src={src} />
        <Comment.Content>
          <Comment.Author style={gStyle} as='a'>
            {name}
          </Comment.Author>
          <Comment.Metadata style={{color: 'grey'}}>
            <div>{date}</div>
          </Comment.Metadata>
          <Comment.Text style={gStyle}>{content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action style={{color: 'grey'}}>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    )
  }
}

export default CommentComp
