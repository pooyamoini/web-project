import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import { signupAPI } from '../../api/account-action/'
import {
  Grid,
  Image,
  Button,
  Form as Fo,
  Checkbox,
  Input,
  Modal,
  Header
} from 'semantic-ui-react'

const Form = styled(Fo)`
  margin: 1rem auto;
  width: 50%;
`

function ShowMSG ({ msg, open, close, color }) {
  return (
    <Modal open={open}>
      <Header content='Your registration' />
      <Modal.Content>
        <p style={{ color }}>{msg}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={close}>
          Got it
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: 'signup',
      emailError: false,
      name: '',
      username: '',
      email: '',
      password: '',
      open: false,
      msg: '',
      color: ''
    }
    this.handleSignup = this.handleSignup.bind(this)
    this.closeModal = this.closeModal.bind(this)
    // this.handleChange = this.handleChange.bind(this);
  }

  async handleSignup () {
    try {
      const { name, username, email, password } = this.state // handling erros later.
      const res = await signupAPI({ name, username, password, email })
      this.setState({ open: true, msg: res.data['msg'], color: 'green' })
    } catch (e) {
      this.setState({ open: true, msg: e.response.data['msg'], color: 'red' })
    }
  }

  handleClick = (e, { name }) => this.setState({ mode: name })

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
    this.validateEmail()
  }

  closeModal () {
    this.setState({ open: false, msg: '', color: 'black' })
  }

  validateEmail () {
    const { email } = this.state
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.setState({ emailError: !re.test(String(email).toLowerCase()) })
  }

  getLoginForm () {
    return (
      <Form inverted size='large'>
        <Form.Field
          control={Input}
          name='username'
          label='Username'
          placeholder='Username'
          onChange={this.handleChange}
        ></Form.Field>
        <Form.Field
          control={Input}
          name='password'
          label='Password'
          placeholder='Password'
          type='password'
          onChange={this.handleChange}
        ></Form.Field>
        <Button type='submit' onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    )
  }

  getSignUpForm () {
    return (
      <Form inverted size='large'>
        <Form.Field
          control={Input}
          name='name'
          label='Name'
          placeholder='Ken Adams'
          onChange={this.handleChange}
        ></Form.Field>
        <Form.Field
          control={Input}
          name='username'
          label='Username'
          placeholder='Kenadams'
          onChange={this.handleChange}
        ></Form.Field>
        <Form.Field
          control={Input}
          name='email'
          label='Email'
          placeholder='kenadams@gmail.com'
          error={this.state.emailError}
          onChange={this.handleChange}
        ></Form.Field>
        <Form.Field
          control={Input}
          name='password'
          label='Password'
          placeholder='Password'
          type='password'
          onChange={this.handleChange}
        ></Form.Field>
        <Form.Field onChange={this.handleChange} required>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit' onClick={this.handleSignup}>
          Submit
        </Button>
      </Form>
    )
  }
  render () {
    const { open, msg, color } = this.state
    return (
      <>
        <ShowMSG open={open} msg={msg} close={this.closeModal} color={color}></ShowMSG>
        <Grid
          columns={2}
          style={{
            width: '100vw',
            heigth: '100vh',
            padding: '0',
            margin: '0'
          }}
        >
          <Grid.Column
            style={{
              padding: '0',
              margin: '0 '
            }}
          >
            <Image
              src='/static/Images/global/login.jpg'
              fluid
              style={{
                height: '100vh'
              }}
            ></Image>
          </Grid.Column>
          <Grid.Column
            textAlign='center'
            verticalAlign='top'
            style={{
              paddingTop: '10rem'
            }}
          >
            <Button.Group size='big'>
              <Button name='login' size='big' onClick={this.handleClick}>
                Login
              </Button>
              <Button.Or size='big' text='' />
              <Button
                name='signup'
                color='blue'
                size='big'
                onClick={this.handleClick}
              >
                Sign Up
              </Button>
            </Button.Group>

            {this.state.mode == 'login'
              ? this.getLoginForm()
              : this.getSignUpForm()}
          </Grid.Column>
        </Grid>
      </>
    )
  }
}
