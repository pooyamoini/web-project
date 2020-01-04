import React, { Component } from 'react'
import { Comment, Form, Button } from 'semantic-ui-react'
import Theme from '../../../public/theme'
import EditIcon from '@material-ui/icons/Edit'

const Reply = ({ display }) => (
  <Form reply style={{ display }}>
    <Form.TextArea style={{ marginLeft: '5%', width: '90%', height: '20%' }} />
    <Button
      secondary
      positive
      style={{ marginBottom: '1rem', marginLeft: '5%' }}
    >
      add Reply
    </Button>
  </Form>
)

class CommentComp extends Component {
  constructor (props) {
    super(props)
    this.state = { display: 'none', Replies: <></> }
    this.toReply = this.toReply.bind(this)
    this.doneReply = this.doneReply.bind(this)
    this.handleReplies = this.handleReplies.bind(this)
  }

  componentDidMount () {
    this.handleReplies(this.props.replies)
  }

  handleReplies (replies) {
    if (replies == undefined || replies.length == 0) return
    this.setState({
      Replies: replies.map(x => {
        return (
          <Comment.Group key={x}>
            <CommentComp key={x} {...x} />
          </Comment.Group>
        )
      })
    })
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

  render () {
    const { name, date, content, src } = this.props
    const color = Theme.post.textColor
    const { display, Replies } = this.state
    const gStyle = { color }
    return (
      <>
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
                <EditIcon fontSize="small" style={{ color: 'grey' }} />
            </Comment.Actions>
          </Comment.Content>
          <Reply display={display} />
          {Replies}
        </Comment>
      </>
    )
  }
}

export default CommentComp
