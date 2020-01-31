import React, { Component } from 'react'
import {
  Menu,
  Grid,
  Input as In,
  Button,
  GridColumn,
  Select
} from 'semantic-ui-react'
import styled from 'styled-components'
import { editProfileAPI } from '../../api/account-action/'

const Label = styled.label`
  color: white !important;
  font-size: 20px !important;
`

const Input = styled(In)`
  width: 50% !important;
`

const labels = {
  name: 'Name',
  username: 'User Name',
  profile: 'Profile Photo',
  bio: 'Bio',
  email: 'Email',
  phone_number: 'Phone Number',
  country: 'Country',
  password: 'Old Password',
  newPassword: 'New Password',
  confirmNewPassword: 'Confirm New Password'
}

const genderOptions = [
  { key: 'male', text: 'Male', value: 'male' },
  { key: 'female', text: 'Female', value: 'female' },
  { key: 'other', text: 'Other', value: 'other' }
]

export default class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSection: 'edit profile',
      value: this.props.data['gender'],
      name: '',
      username: '',
      profile: '',
      bio: '',
      email: '',
      phone_number: '',
      country: '',
      password: '',
      newPassword: '',
      confirmNewPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.setStates = this.setStates.bind(this)
    this.handleGender = this.handleGender.bind(this)
  }

  componentDidMount () {
    setTimeout(() => {
      this.setStates()
    }, 1000)
  }

  setStates () {
    const { data } = this.props
    const {
      name,
      username,
      profile,
      bio,
      email,
      phone_number,
      country,
      password
    } = data
    this.setState({
      name,
      username,
      profile,
      bio,
      email,
      phone_number,
      country,
      password
    })
  }

  handleGender (e) {
    const value = e.target.textContent
    this.setState({ gender: value })
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeSection: name })
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleChangeInput = name => {
    function action (e) {
      this.setState({ [name]: e.target.value })
    }
    return action.bind(this)
  }

  async handleSubmit () {
    try {
      let data = this.state
      data['token'] = localStorage.getItem('token')
      const res = await editProfileAPI(data)
      window.location.reload()
    } catch (e) {
      alert('some thing wrong happen:(')
      console.log(e)
    }
  }

  getFormRow (name, type = 'text') {
    return (
      <Grid.Row columns={2}>
        <Grid.Column textAlign='right' width={4}>
          <Label>{labels[name]}</Label>
        </Grid.Column>
        <Grid.Column textAlign='left' width={12}>
          <Input
            type={type}
            defaultValue={this.props.data[name]}
            onChange={this.handleChangeInput(name)}
          ></Input>
        </Grid.Column>
      </Grid.Row>
    )
  }

  getGenderRow () {
    return (
      <Grid.Row columns={2}>
        <Grid.Column textAlign='right' width={4}>
          <Label>Gender</Label>
        </Grid.Column>
        <Grid.Column textAlign='left' width={12}>
          <Select
            style={{
              width: '50%'
            }}
            options={genderOptions}
            defaultValue={this.props.gender}
            onChange={this.handleGender}
          />
        </Grid.Column>
      </Grid.Row>
    )
  }

  getEditProfileForm () {
    return (
      <Grid
        style={{
          display: this.state.activeSection == 'edit profile' ? 'block' : 'none'
        }}
      >
        {this.getFormRow('name')}
        {this.getFormRow('username')}
        {this.getGenderRow()}
        {this.getFormRow('profile')}
        {this.getFormRow('bio')}
        {this.getFormRow('email')}
        {this.getFormRow('phone_number')}
        {this.getFormRow('country')}
        <Grid.Row columns={2}>
          <GridColumn width={4}></GridColumn>
          <GridColumn textAlign='left'>
            <Button type='submit' color='blue' onClick={this.handleSubmit}>
              Submit
            </Button>
          </GridColumn>
        </Grid.Row>
      </Grid>
    )
  }

  getChangePasswordForm () {
    return (
      <Grid
        style={{
          display:
            this.state.activeSection == 'change password' ? 'block' : 'none'
        }}
      >
        {this.getFormRow('password', 'password')}
        {this.getFormRow('newPassword', 'password')}
        {this.getFormRow('confirmNewPassword', 'password')}
        <Grid.Row columns={2}>
          <GridColumn width={4}></GridColumn>
          <GridColumn>
            <Button type='submit' color='blue' onClick={this.handleSubmit}>
              Change Password
            </Button>
          </GridColumn>
        </Grid.Row>
      </Grid>
    )
  }

  render () {
    const { activeSection } = this.state

    return (
      <Grid
        style={{
          margin: '10% auto',
          padding: '10px',
          width: '90%',
          backgroundColor: 'rgb(22, 27, 44)',
          borderRadius: '10px'
        }}
      >
        <Grid.Column width={4}>
          <Menu fluid vertical tabular inverted>
            <Menu.Item
              name='edit profile'
              active={activeSection === 'edit profile'}
              onClick={this.handleItemClick}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '18px'
              }}
            />
            <Menu.Item
              name='change password'
              active={activeSection === 'change password'}
              onClick={this.handleItemClick}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '18px'
              }}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column
          width={12}
          textAlign='left'
          style={{
            marginTop: '2rem'
          }}
        >
          {this.getEditProfileForm()}
          {this.getChangePasswordForm()}
        </Grid.Column>
      </Grid>
    )
  }
}
