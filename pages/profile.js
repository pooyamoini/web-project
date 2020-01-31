import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Router from 'next/router'
import Navbar from '../components/global/navbar-index'
import GloBalStyle from '../components/global/globalStyle'
import { tokenIsValid } from '../api/account-action/'
import ProfileHeader from '../components/profile-page/profile-header'
import ProfileData from '../public/json-files/profile'
import ProfilePostsContainer from '../components/profile-page/profile-posts-container'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { data: '', type: '' }
  }

  async componentDidMount () {
    const token = localStorage.getItem('token')
    if (token === null) {
      Router.push('/')
      return
    }
    try {
      const res = await tokenIsValid(token)
      const account = res.data['account']
      this.setState({ data: account })
      return
    } catch (e) {
      Router.push('/')
      return
    }
  }

  render () {
    const { data } = this.state
    return (
      <>
        <GloBalStyle />
        <Navbar />
        <ProfileHeader data={data} type='other'></ProfileHeader>
        <ProfilePostsContainer
          data={ProfileData}
          type='other'
        ></ProfilePostsContainer>
      </>
    )
  }
}

export default Home
