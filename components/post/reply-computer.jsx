import React from 'react'
import {
  Button,
  Header,
  Form,
  Modal,
  Divider,
  Comment,
  Image
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Theme from '../../public/theme'

const globalStyle = {
  color: Theme.post.textColor
}

const ModalReply = ({ Trigger, name, content, src }) => (
  <Modal
    trigger={<Trigger style={globalStyle}>reply</Trigger>}
    basic
    size='small'
  >
    <Header content='Add Comment' />
    <Divider />
    <Modal.Content>
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Image src={src} size='mini' />
            <Comment.Author as='a' style={globalStyle}>
              {name}
            </Comment.Author>
            <Comment.Text style={globalStyle}>{content}</Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
      <Form reply>
        <Form.TextArea
          style={{ opacity: '0.65' }}
          name='textfield'
          id='comtextfield'
        />
        <Button secondary positive style={{ marginBottom: '1rem' }}>
          Add Reply
        </Button>
      </Form>
    </Modal.Content>
  </Modal>
)

export default ModalReply
