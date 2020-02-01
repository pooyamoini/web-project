import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Router from 'next/router'
import Navbar from '../../components/global/navbar-index'
import GloBalStyle from '../../components/global/globalStyle'
import { tokenIsValid } from '../../api/account-action/'
import { getProfileAPI } from '../../api/profile/'
import ProfileHeader from '../../components/profile-page/profile-header'
import ProfileData from '../../public/json-files/profile'
import ProfilePostsContainer from '../../components/profile-page/profile-posts-container'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { data: '', type: '' }
  }

  async componentDidMount () {
    const id = window.location.href.split('/')[4]
    const token = localStorage.getItem('token')
    if (token === null) {
      Router.push('/')
      return
    }
    if (id == 'profile') {
      try {
        this.setState({ type: 'self' })
        const res = await tokenIsValid(token)
        const account = res.data['account']
        const res1 = await getProfileAPI(account.username, token)
        this.setState({ data: res1.data['msg'] })
        return
      } catch (e) {
        Router.push('/')
        return
      }
    }
    this.setState({ type: 'other' })
    const res = await getProfileAPI(id, token)
    this.setState({ data: res.data['msg'] })
  }

  render () {
    const { data, type } = this.state
    return (
      <>
        <GloBalStyle />
        <Navbar />
        <ProfileHeader data={data} type={type}></ProfileHeader>
        <ProfilePostsContainer
          data={ProfileData}
          type={type}
        ></ProfilePostsContainer>
      </>
    )
  }
}

export default Home
