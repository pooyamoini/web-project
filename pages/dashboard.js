import React, { Component } from 'react'
import Router from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { tokenIsValid } from '../api/account-action/'
import { getSuggestionsAPI } from '../api/profile/'
import Navbar from '../components/global/navbar-index'
import GloBalStyle from '../components/global/globalStyle'
import MainContainer from '../components/home-page/index'
import Header from '../components/home-page-contents/home-header'
import HeaderData from '../public/headerSample'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { suggestions: '' }
  }
  async componentDidMount () {
    const token = localStorage.getItem('token')
    if (token === null) {
      Router.push('/')
      return
    }
    try {
      const res = await tokenIsValid(token)
      const res1 = await getSuggestionsAPI(token)
      let suggests = []
      res1.data['msg'].map(x => {
        let obj = {
          name: x['name'],
          username: x['username'],
          profile: x['profile']
        }
        suggests.push(obj)
      })
      this.setState({ suggestions: suggests })
      return
    } catch (e) {
      Router.push('/')
      return
    }
  }

  render () {
    const { suggestions } = this.state
    return (
      <>
        <GloBalStyle />
        <Navbar />
        <Header data={HeaderData} />
        <MainContainer suggestions={suggestions} />
      </>
    )
  }
}

export default Home
