import React, { Component } from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import NoSSR from 'react-no-ssr'
import Router from 'next/router'
import { tokenIsValid } from '../../api/account-action/'
import Mobile from './edit-profile-mobile'
import Computer from './edit-profile-desktop'

class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = { data: '' }
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
      this.setState({ data: account })
      return
    } catch (e) {
      localStorage.setItem('token', null)
      Router.push('/')
      return
    }
  }

  render () {
    const { data } = this.state
    return (
      <Segment.Group basic>
        <NoSSR>
          <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Mobile data={data} />
          </Responsive>
          <Responsive
            minWidth={Responsive.onlyTablet.minWidth}
            maxWidth={Responsive.onlyTablet.maxWidth}
          >
            <Mobile data={data} />
          </Responsive>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            maxWidth={Responsive.onlyComputer.maxWidth}
          >
            <Computer data={data} />
          </Responsive>
        </NoSSR>
      </Segment.Group>
    )
  }
}
export default EditProfile
