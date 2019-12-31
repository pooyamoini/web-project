import React, { Component } from 'react'
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

class ModalReply extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOpen () {
    this.setState({ open: true })
  }

  handleClose () {
    this.setState({ open: false })
  }

  handleSubmit () {
    this.props.handleFunc(this.props.id);
    this.handleClose()
  }

  render () {
    const { Trigger, name, content, src } = this.props
    const { open } = this.state
    return (
      <Modal
        trigger={
          <Trigger style={globalStyle} onClick={this.handleOpen}>
            reply
          </Trigger>
        }
        basic
        size='small'
        open={open}
        onClose={this.handleClose}
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
              id='reply-field'
            />
            <Button
              secondary
              positive
              style={{ marginBottom: '1rem' }}
              onClick={this.handleSubmit}
            >
              Add Reply
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ModalReply
