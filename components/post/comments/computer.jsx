import React, { Component } from 'react'
import {
  Button,
  Form,
  Header,
  Divider,
  Comment as CMT
} from 'semantic-ui-react'
import GenerateComments from "./generate-comments"
import samples from '../../../public/comments.json'
import EditIcon from '@material-ui/icons/Edit'

class CommentsPage extends Component {
  constructor (props) {
    super(props)
    this.state = { comments: samples }
    this.addComment = this.addComment.bind(this)
    this.addReply = this.addReply.bind(this)
  }

  addComment () {
    const content = document.getElementById('add-comment').value
    document.getElementById('add-comment').value = ''
    if (content == '') return
    const { comments } = this.state
    comments.push({
      name: 'Java Script',
      content,
      src: '/static/Images/global/avatar0.jpg',
      reply: [],
      date: '30 mins ago'
    })
    this.setState({ comments })
  }

  addReply (content, index, name, src) {
    const { comments } = this.state
    comments[index].reply.push({
      name,
      content,
      src,
      date: 'just now',
      reply: []
    })
    this.setState({ comments })
  }

  render () {
    const { display } = this.props
    const { comments } = this.state
    return (
      <CMT.Group style={{ marginTop: '5rem', marginBottom: '5rem', display }}>
        <Divider horizontal>
          <Header as='h3' color='grey'>
            Comments
          </Header>
        </Divider>
        <Form reply>
          <Form.TextArea
            style={{ marginLeft: '5%', width: '90%' }}
            id='add-comment'
          />
          <Button
            secondary
            positive
            style={{ marginBottom: '1rem', marginLeft: '5%' }}
            onClick={this.addComment}
          >
            add Comment
          </Button>
        </Form>
        <GenerateComments data={comments} addReply={this.addReply} />
      </CMT.Group>
    )
  }
}

export default CommentsPage
