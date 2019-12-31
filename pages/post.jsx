import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import GloBalStyle from '../components/global/globalStyle'
import Navbar from '../components/global/navbar-index'
import Post from '../components/post/computer'

const PostPage = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <Post likes={7} dislikes={3} />
    </>
  )
}

export default PostPage
