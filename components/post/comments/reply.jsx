import React, { Component } from 'react'
import { Comment, Form, Button } from 'semantic-ui-react'
import Theme from '../../../public/theme'

export const Reply = ({ display, name, handle }) => (
  <Form reply style={{ display }}>
    <Form.TextArea
      style={{ marginLeft: '5%', width: '90%', height: '20%' }}
      id={'reply'.concat(name)}
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

  submit () {
    const { addReply, name, src } = this.props
    const value = document.getElementById('reply'.concat(name)).value
    document.getElementById('reply'.concat(name)).value = ''
    addReply(name, value, src)
    this.doneReply()
  }

  render () {
    const { name, content, src, date } = this.props
    const { display } = this.state
    const color = Theme.post.textColor
    const gStyle = { color }
    return (
      <Comment style={{ marginLeft: '1rem' }}>
        <Comment.Avatar src={src} />
        <Comment.Content>
          <Comment.Author style={gStyle} as='a'>
            {name}
          </Comment.Author>
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
        <Reply name={name} display={display} handle={this.submit} />
      </Comment>
    )
  }
}

export default CommentG
