import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Router from 'next/router'
import Navbar from '../../components/global/navbar-index'
import GloBalStyle from '../../components/global/globalStyle'
import { tokenIsValid } from '../../api/account-action/'
import { getProfileAPI, getFolFolAPI } from '../../api/profile/'
import ProfileHeader from '../../components/profile-page/profile-header'
import ProfileData from '../../public/json-files/profile'
import ProfilePostsContainer from '../../components/profile-page/profile-posts-container'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { data: '', type: '', followers: '', followings: '' }
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
        const res2 = await getFolFolAPI(token, account.username)
        this.setFolFol(res2.data.msg.followers, res2.data.msg.followings)
        this.setState({ data: res1.data['msg'] })
        return
      } catch (e) {
        Router.push('/')
        return
      }
    }
    this.setState({ type: 'other' })
    const res = await getProfileAPI(id, token)
    const res2 = await getFolFolAPI(token, id)
    this.setFolFol(res2.data.msg.followers, res2.data.msg.followings)
    this.setState({ data: res.data['msg'] })
  }

  async setFolFol (followersData, followingsData) {
    let folow = followersData.map(x => ({
      text: x.name,
      key: x.name,
      value: x.username,
      image: { avatar: 'true', src: '../' + x.profile }
    }))
    let folowing = followingsData.map(x => ({
      text: x.name,
      key: x.name,
      value: x.username,
      image: { avatar: 'true', src: '../' + x.profile }
    }))
    this.setState({ followers: folow, followings: folowing })
  }

  render () {
    const { data, type, followers, followings } = this.state
    return (
      <>
        <GloBalStyle />
        <Navbar />
        <ProfileHeader
          data={data}
          type={type}
          followers={followers}
          followings={followings}
        ></ProfileHeader>
        <ProfilePostsContainer
          data={ProfileData}
          type={type}
        ></ProfilePostsContainer>
      </>
    )
  }
}

export default Home
