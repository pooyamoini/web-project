import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Theme from '../../../public/theme'

const globalStyle = {
  color: Theme.post.textColor
}

const CommentExampleComment = () => (
  <Comment.Group style={{ paddingLeft: '1rem !important' }}>
    <Header as='h3' dividing color='grey'>
      Comments
    </Header>
    <Comment>
      <Comment.Avatar src='/static/Images/global/avatar2.jpg' />
      <Comment.Content>
        <Comment.Author as='a' style={globalStyle}>
          Matt
        </Comment.Author>
        <Comment.Metadata style={globalStyle}>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text style={globalStyle}>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action style={globalStyle}>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='/static/Images/global/avatar1.jpg' />
      <Comment.Content>
        <Comment.Author as='a' style={globalStyle}>
          Elliot Fu
        </Comment.Author>
        <Comment.Metadata style={globalStyle}>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text style={globalStyle}>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action style={globalStyle}>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='/static/Images/global/avatar.jpg' />
          <Comment.Content>
            <Comment.Author as='a' style={globalStyle}>
              Jenny Hess
            </Comment.Author>
            <Comment.Metadata style={globalStyle}>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text style={globalStyle}>
              Elliot you are always so right
            </Comment.Text>
            <Comment.Actions style={globalStyle}>
              <Comment.Action style={globalStyle}>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>
    <Form reply>
      <Form.TextArea style={{ opacity: '0.65' }} />
      <Button secondary positive style={{ marginBottom: '1rem' }}>
        Add Reply
      </Button>
    </Form>
  </Comment.Group>
)

export default CommentExampleComment
