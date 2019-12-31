import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Theme from '../../../public/theme'
import Samples from '../../../public/comments'
import ModalReply from '../reply-computer'

const globalStyle = {
  color: Theme.post.textColor
}

const CommentComp = ({ src, name, time, content, reply, id, func }) => {
  let Replies = () => <div />
  if (reply !== undefined)
    Replies = () => (
      <Comment.Group>
        {reply.map(x => (
          <CommentComp {...x} key={x} />
        ))}
      </Comment.Group>
    )
  const props = { name, src, content, id }
  return (
    <Comment>
      <Comment.Avatar src={src} />
      <Comment.Content>
        <Comment.Author as='a' style={globalStyle}>
          {name}
        </Comment.Author>
        <Comment.Metadata style={globalStyle}>
          <div>{time}</div>
        </Comment.Metadata>
        <Comment.Text style={globalStyle}>{content}</Comment.Text>
        <Comment.Actions>
          <ModalReply Trigger={Comment.Action} {...props} handleFunc={func} />
        </Comment.Actions>
      </Comment.Content>
      <Replies />
    </Comment>
  )
}

const GenerateComments = ({ data, func }) =>
  data.map(x => <CommentComp {...x} func={func} key={x.content} />)

class CommentsPage extends Component {
  constructor (props) {
    super(props)
    this.state = { comments: Samples }
    this.addComment = this.addComment.bind(this)
    this.addReply = this.addReply.bind(this)
  }

  addComment () {
    const name = 'Luis Suarez'
    const src = '/static/Images/global/me.jpg'
    const content = document.getElementById('comtextfield').value
    document.getElementById('comtextfield').value = ''
    let time = new Date()
    const { comments } = this.state
    time = time
      .getHours()
      .toString()
      .concat(' hours ago')
    comments.push({
      name,
      src,
      content,
      time
    })
    this.setState({ comments })
  }

  addReply (id) {
    const name = 'Luis Suarez'
    const src = '/static/Images/global/me.jpg'
    const content = document.getElementById('reply-field').value
    if (content == '') return
    document.getElementById('reply-field').value = ''
    let time = new Date()
    const { comments } = this.state
    time = time
      .getHours()
      .toString()
      .concat(' hours ago')
    comments[comments.map(x => x.id).indexOf(id)]['reply'].push({
      name,
      src,
      content,
      time
    })
    this.setState({ comments })
  }

  render () {
    const { display } = this.props
    const { comments } = this.state
    return (
      <Comment.Group style={{ paddingLeft: '1rem !important', display }}>
        <Header as='h3' dividing color='grey'>
          Comments
        </Header>
        <GenerateComments func={this.addReply} data={comments} />
        <Form reply onSubmit={this.addComment}>
          <Form.TextArea
            style={{ opacity: '0.65' }}
            name='textfield'
            id='comtextfield'
          />
          <Button secondary positive style={{ marginBottom: '1rem' }}>
            Add Comment
          </Button>
        </Form>
      </Comment.Group>
    )
  }
}

export default CommentsPage
