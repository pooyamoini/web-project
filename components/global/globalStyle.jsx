import { createGlobalStyle } from 'styled-components'
import Theme from '../../public/theme'
import React, { Component } from 'react'

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    z-index: auto;
  }
  body {
    background-color:${Theme.backgroundColor} !important;
    margin: 0;
    min-height: 100%;
    min-width: 100%;
  }
`

class GlobalStyleComp extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {}

  render () {
    return <GlobalStyle></GlobalStyle>
  }
}

export default GlobalStyleComp
