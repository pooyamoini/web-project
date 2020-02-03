import React, { Component } from 'react'
import Router from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { tokenIsValid } from '../api/account-action/'
import { getSuggestionsAPI } from '../api/profile/'
import { getHomePageNewsAPI } from '../api/post/'
import Navbar from '../components/global/navbar-index'
import GloBalStyle from '../components/global/globalStyle'
import MainContainer from '../components/home-page/index'
import Header from '../components/home-page-contents/home-header'
import HeaderData from '../public/headerSample'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      suggestions: '',
      posts: [],
      hot: [],
      news: [],
      follow: [],
      x: {}
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
      const res2 = await getHomePageNewsAPI(token)
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
        x: header['new']
      })
      return
    } catch (e) {
      Router.push('/')
      return
    }
  }

  render () {
    const { hot, news, follow, x } = this.state
    return (
      <>
        <GloBalStyle />
        <Navbar />
        <Header {...{ hot, news, follow, x }} />
        <MainContainer {...this.state} />
      </>
    )
  }
}

export default Home
