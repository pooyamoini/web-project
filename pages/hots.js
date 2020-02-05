import React, { Component } from 'react'
import Router from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { tokenIsValid } from '../api/account-action/'
import { getSuggestionsAPI } from '../api/profile/'
import { getHomePageHotsAPI } from '../api/post/'
import Navbar from '../components/global/navbar-index'
import GloBalStyle from '../components/global/globalStyle'
import MainContainer from '../components/home-page/index'
import Header from '../components/home-page-contents/home-header'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      suggestions: '',
      posts: [],
      hot: [],
      news: [],
      follow: [],
      interest: []
    }
  }
  async componentDidMount () {
    const token = localStorage.getItem('token')
    if (token === null) {
      Router.push('/')
      return
    }
    try {
      await tokenIsValid(token)
      const res1 = await getSuggestionsAPI(token)
      const res2 = await getHomePageHotsAPI(token)
      this.setState({ posts: res2.data.msg.posts })
      let suggests = []
      res1.data['msg'].map(x => {
        let obj = {
          name: x['name'],
          username: x['username'],
          profile: x['profile']
        }
        suggests.push(obj)
      })
      const header = res2.data.msg.header
      this.setState({
        suggestions: suggests,
        hot: header['hot'],
        news: header['new'],
        follow: header['follow'],
        interest: header['interest']
      })
      return
    } catch (e) {
      Router.push('/')
      return
    }
  }

  render () {
    const { hot, news, follow, interest } = this.state
    return (
      <>
        <GloBalStyle />
        <Navbar />
        <Header {...{ hot, news, follow, interest }} />
        <MainContainer {...this.state} />
      </>
    )
  }
}

export default Home
