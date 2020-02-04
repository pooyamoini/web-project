import React, { Component } from 'react'
import {
  Button,
  Form,
  Header,
  Divider,
  Comment as CMT
} from 'semantic-ui-react'
import GenerateComments from './generate-comments'
import samples from '../../../public/comments.json'
import { addCommentsAPI } from '../../../api/comment/'

class CommentsPage extends Component {
  constructor (props) {
    super(props)
    this.state = { comments: samples, id: '' }
    this.addComment = this.addComment.bind(this)
  }

  componentDidMount () {
    const id = window.location.href.split('/')[4]
    this.setState({ id })
  }

  async addComment () {
    const content = document.getElementById('add-comment').value
    document.getElementById('add-comment').value = ''
    const id = window.location.href.split('/')[4]
    const token = localStorage.getItem('token')
    await addCommentsAPI(token, id, content)
    window.location.reload()
  }

  render () {
    const { display, commentsData, id } = this.props
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
        <GenerateComments data={comments} comments={commentsData}/>
      </CMT.Group>
    )
  }
}

export default CommentsPage
