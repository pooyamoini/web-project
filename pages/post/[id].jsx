import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import GloBalStyle from '../../components/global/globalStyle'
import Navbar from '../../components/global/navbar-index'
import Post from '../../components/post/computer'
import { getPostAPI } from '../../api/post/'
import { tokenIsValid } from '../../api/account-action/'
import Router from 'next/router'

class PostPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: '',
      owner: '',
      isliked: '',
      isdisliked: '',
      date: '',
      mine: false
    }
  }

  async componentDidMount () {
    const id = window.location.href.split('/')[4]
    const token = localStorage.getItem('token')
    if (token === null) {
      Router.push('/')
      return
    }
    try {
      const res0 = await tokenIsValid(token)
      const res = await getPostAPI(token, id)
      this.setState({
        post: res.data.msg['post'],
        owner: res.data.msg['account'],
        isliked: res.data.msg.isliked,
        mine:
          res.data.msg['account'].username === res0.data['account']['username'],
        isdisliked: res.data.msg.isDisliked,
        date: res.data.msg.date
      })
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
        <Post {...this.state} />
      </>
    )
  }
}

export default PostPage
