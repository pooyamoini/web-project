import React, { Component } from 'react'
import Router from 'next/router'

import { Menu as M, Image, Dropdown, Input } from 'semantic-ui-react'
import Link from 'next/link'
import styled from 'styled-components'
import Theme from '../../public/Theme'
import NotificationsIcon from '@material-ui/icons/Notifications'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import { logout } from '../../api/account-action/'
import ExitIcon from '@material-ui/icons/ExitToApp'



const Menu = styled(M)`
  border-bottom: ${props =>
    props.transparent ? '0' : '1px solid '} !important;
  border-color: ${Theme.navbar.borderColor} !important;
  background-color: ${Theme.navbar.backgroundColor} !important;
  margin-top: 0 !important;
`

const options = [
  { key: 1, text: 'Hot', value: 1 },
  { key: 2, text: 'New', value: 2 },
  { key: 3, text: 'Followed', value: 3 },
  { key: 4, text: 'Your Interest', value: 4 }
]



export default class MenuExampleVerticalText extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      display: 'none',
      openI: false,
      displayI: 'none',
      isProfile: false
    }
    this.handleDrp = this.handleDrp.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleClick = (e, data) => {
    if (data.text == 'Followings') {
      Router.push(`/dashboard`)
      return
    }
    Router.push(`/${data.text}`)
    return
  }

  logoutFunc () {
    logout()
  }

  handleDrp = (e) => {
    const { open } = this.state
    const result = open === true ? false : true
    const display = open === true ? 'none' : 'block'
    this.setState({ open: result, display })
  }

  handleSearch () {
    const { openI } = this.state
    const result = openI === true ? false : true
    const displayI = openI === true ? 'none' : 'block'
    this.setState({ openI: result, displayI })
  }

  componentDidMount () {
    const url =
      window.location.href.includes('profile/') ||
      window.location.href.includes('post/')
    this.setState({ isProfile: url })
  }

  render () {
    const { open, display, openI, displayI, isProfile } = this.state
    return (
      <>
        <Menu text widths={5}>
          <Menu.Item>
          <ExitIcon
                fontSize='large'
                style={{ marginTop: '0rem', marginRight: '1.5rem' , marginLeft: '1rem', color: 'dodgerBlue'}}
                onClick={this.logoutFunc}
              />
          <Link href={isProfile ? '../dashboard' : './dashboard'}>
              <Image src='/static/Images/global/logo1.png' avatar />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <SearchIcon
              fontSize='large'
              onClick={this.handleSearch}
              style={{ color: 'white' }}
            />
          </Menu.Item>
          <Menu.Item>
            <NotificationsIcon fontSize='large' style={{ color: 'white' }} />
          </Menu.Item>
          <Menu.Item>
            <MenuIcon
              fontSize='large'
              onClick={this.handleDrp}
              style={{ color: 'white' }}
            />
          </Menu.Item>
          <Menu.Item>
          <Link href='/profile/profile'>
              <Image
                src={
                  this.props.profile
                    ? this.props.profile
                    : '/static/Images/profiles/empty.png'
                }
                avatar
              />
            </Link>
          </Menu.Item>
        </Menu>
        <Dropdown
          placeholder='Select Category'
          fluid
          selection
          options={options}
          open={open}
          style={{ display }}
          onClick={this.handleClick}
        />
        <Dropdown.Menu
          open={openI}
          style={{ display: displayI, width: '100vw !important' }}
        >
          <Input style={{ width: '100vw' }} />
        </Dropdown.Menu>
      </>
    )
  }
}
