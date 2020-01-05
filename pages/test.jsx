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

const ModalBasicExample = () => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header content='Add Comment' />
    <Divider />
    <Modal.Content>
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Image src='static/Images/global/avatar0.jpg' size='mini' />
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Text>How artistic!</Comment.Text>
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

export default ModalBasicExample
