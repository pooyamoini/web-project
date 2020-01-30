import React, { Component } from 'react'
import Router from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { Responsive, Segment } from 'semantic-ui-react'
import NoSSR from 'react-no-ssr'
import { tokenIsValid } from '../api/account-action/'
import GloBalStyle from '../components/global/globalStyle'
import Desktop from '../components/login/login-desktop'
import Mobile from '../components/login/login-mobile'

class LoginComp extends Component {
  async componentDidMount () {
    const token = localStorage.getItem('token')
    if (token === null) return
    try {
      const res = await tokenIsValid(token)
      Router.push('/dashboard')
    } catch (e) {
      return
    }
  }

  render () {
    return (
      <>
        <GloBalStyle />
        <Segment.Group basic>
          <NoSSR>
            <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
              <Mobile />
            </Responsive>
            <Responsive
              minWidth={Responsive.onlyComputer.minWidth}
              maxWidth={Responsive.onlyComputer.maxWidth}
            >
              <Desktop />
            </Responsive>
          </NoSSR>
        </Segment.Group>
      </>
    )
  }
}

export default LoginComp
