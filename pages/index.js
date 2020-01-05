import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Navbar from '../components/global/navbar-index'
import GloBalStyle from '../components/global/globalStyle'
import MainContainer from '../components/home-page/index'
import Header from '../components/home-page-contents/home-header'
import HeaderData from '../public/headerSample'

const Home = () => {
  return (
    <>
      <GloBalStyle />
      <Navbar />
      <Header data={HeaderData} />
      <MainContainer />
    </>
  )
}

export default Home