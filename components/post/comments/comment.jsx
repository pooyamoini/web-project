import React, { Component } from 'react'
import {
  Comment,
  Modal,
  Header,
  Button,
  Form,
  TextArea
} from 'semantic-ui-react'
import Theme from '../../../public/theme'
import { Reply } from './reply'
import CommentG from './reply'
import Link from 'next/link'
import {
  replyCommentAPI,
  deleteMainCommentAPI,
  editMainCommentAPI
} from '../../../api/comment'
import { tokenIsValid } from '../../../api/account-action/'

class CommentComp extends Component {
  constructor (props) {
    super(props)
    this.toReply = this.toReply.bind(this)
    this.addReply = this.addReply.bind(this)
    this.doneReply = this.doneReply.bind(this)
    this.GenerateReplies = this.GenerateReplies.bind(this)
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toEdit = this.toEdit.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.delete = this.delete.bind(this)
    const { reply } = this.props
    this.state = {
      display: 'none',
      reply,
      content: '',
      mine: false,
      open: false
    }
  }

  async componentDidMount () {
    const token = localStorage.getItem('token')
    const res = await tokenIsValid(token)
    const { account } = this.props
    this.setState({ mine: res.data.account.username === account })
  }

  toEdit () {
    const { mine } = this.state
    if (mine) this.setState({ open: true })
  }

  async delete () {
    const { cid } = this.props
    await deleteMainCommentAPI(cid)
    window.location.reload()
  }

  handleClose () {
    this.setState({ open: false })
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

  addReply (name, content, src, date = 'just now') {
    const { reply } = this.state
    reply.push({
      name,
      src,
      content,
      date
    })
    this.setState({ reply })
  }

  handleChange (e) {
    this.setState({ content: e.target.value })
  }

  async submit () {
    const { cid } = this.props
    const content = this.state.content
    const id = window.location.href.split('/')[4]
    const token = localStorage.getItem('token')
    await replyCommentAPI(token, id, cid, content)
    window.location.reload()
  }

  GenerateReplies ({ replies, addReply, cid }) {
    if (replies === undefined || replies.length === 0) return <></>
    return (
      <Comment.Group>
        {replies.map(x => (
          <CommentG {...x} key={x} addReply={addReply} cid={cid} />
        ))}
      </Comment.Group>
    )
  }

  render () {
    const { account, main, src, replies, cid } = this.props
    const { display, open } = this.state
    console.log(this.props)
    const color = Theme.post.textColor
    const gStyle = { color }
    return (
      <>
        <Edit
          open={open}
          close={this.handleClose}
          pid={cid}
          doc={main}
          delete={this.delete}
        ></Edit>
        <Comment style={{ marginLeft: '1rem' }}>
          <Comment.Avatar
            src={src ? src : '../static/Images/profiles/empty.png'}
          />
          <Comment.Content>
            <Link href={`/profile/${account}`}>
              <Comment.Author style={gStyle} as='a'>
                {account}
              </Comment.Author>
            </Link>
            <Comment.Metadata style={{ color: 'grey' }}></Comment.Metadata>
            <Comment.Text style={gStyle} onClick={this.toEdit}>
              {main}
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action style={{ color: 'grey' }} onClick={this.toReply}>
                Reply
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Reply
            display={display}
            name={name}
            handle={this.submit}
            cid={cid}
            handleChange={this.handleChange}
          />
          <this.GenerateReplies
            replies={replies}
            addReply={this.addReply}
            cid={cid}
          />
        </Comment>
      </>
    )
  }
}

class Edit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false,
      imageModalOpen: false,
      contentModalOpen: false,
      image: '',
      content: '',
      submittedImage: '',
      submittedContent: ''
    }
    this.editPost = this.editPost.bind(this)
    this.setImage = this.setImage.bind(this)
  }

  componentDidMount () {
    const { open } = this.state
    setTimeout(() => {
      this.setState({ modalOpen: open, content: this.props.doc })
    }, 2000)
  }

  handleClose = () => {
    this.setState({
      image: '',
      content: '',
      modalOpen: false,
      imageModalOpen: false,
      contentModalOpen: false
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  async editPost () {
    const { content } = this.state
    const { pid } = this.props
    const token = localStorage.getItem('token')
    try {
      const res = await editMainCommentAPI(pid, content)
      window.location.reload()
    } catch (e) {
      alert('some thing wrong happend')
    }
  }

  handleSubmit = () => {
    const { image, content } = this.state
    this.setState({
      submittedImage: image,
      submittedConent: content
    })
    this.handleClose()
  }

  openImageModal = () => {
    this.setState({ imageModalOpen: true })
  }

  openContentModal = () => {
    this.setState({ contentModalOpen: true })
  }

  setImage () {
    const x = document.getElementById('input-img')
    const nameImg = x.files.item(0).name
    this.setState({ image: nameImg })
  }

  render () {
    const { content } = this.state
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.close}
        basic
        size='small'
      >
        <Header content='Write The Content' />
        <Modal.Content>
          <Form inverted size='large'>
            <Form.Field
              control={TextArea}
              label='Content'
              name='content'
              value={content}
              required
              onChange={this.handleChange}
              error={
                this.state.content == '' ? "Content Can't Be Empty" : false
              }
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={this.props.close}>
            Cancel
          </Button>
          <Button color='green' inverted onClick={this.editPost}>
            Done
          </Button>
          <Button
            basic
            color='red'
            inverted
            style={{ backgroundColor: 'red !important' }}
            onClick={this.props.delete}
          >
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default CommentComp
