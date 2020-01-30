import React, { Component } from 'react'
import Router from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { tokenIsValid } from '../api/account-action/'
import Navbar from '../components/global/navbar-index'
import GloBalStyle from '../components/global/globalStyle'
import MainContainer from '../components/home-page/index'
import Header from '../components/home-page-contents/home-header'
import HeaderData from '../public/headerSample'

class Home extends Component {
  async componentDidMount () {
    const token = localStorage.getItem('token')
    if (token === null) {
      Router.push('/')
      return
    }
    try {
      const res = await tokenIsValid(token)
      return
    } catch (e) {
      Router.push('/')
      return
    }
  }

  render () {
    return (
      <>
        <GloBalStyle />
        <Navbar />
        <Header data={HeaderData} />
        <MainContainer />
      </>
    )
  }
}

export default Home
