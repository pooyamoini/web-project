import React, { Component } from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import Tablet from './navbar-tablet'
import Router from 'next/router'
import { tokenIsValid } from '../../api/account-action/'
import Computer from './navbar-computer'
import Mobile from './navbar-mobile'
import NoSSR from 'react-no-ssr'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = { profile: '' }
  }

  async componentDidMount () {
    const token = localStorage.getItem('token')
    if (token === null) {
      Router.push('/')
      return
    }
    try {
      const res = await tokenIsValid(token)
      const account = res.data['account']
      this.setState({ profile: account['profile'] })
      return
    } catch (e) {
      Router.push('/')
      return
    }
  }

  render () {
    const { profile } = this.state
    return (
      <Segment.Group basic>
        <NoSSR>
          <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Mobile profile={profile} />
          </Responsive>
          <Responsive
            minWidth={Responsive.onlyTablet.minWidth}
            maxWidth={Responsive.onlyTablet.maxWidth}
          >
            <Tablet profile={profile} />
          </Responsive>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            maxWidth={Responsive.onlyComputer.maxWidth}
          >
            <Computer profile={profile} />
          </Responsive>
        </NoSSR>
      </Segment.Group>
    )
  }
}

export default Navbar
