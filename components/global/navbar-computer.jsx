import styled from 'styled-components'
import Router from 'next/router'
import React, { Component } from 'react'
import {
  Menu as M,
  Image as Im,
  Input,
  Dropdown as Drp,
  Segment
} from 'semantic-ui-react'
import TagOptions from '../../public/json-files/nav-bar/navbar-tags.json'
import Theme from '../../public/Theme'
import Link from 'next/link'
import { logout } from '../../api/account-action/'
import ExitIcon from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
const imgSrc = '/Images/global/logo1.png'

const Menu = styled(M)`
  position: fixed !important;
  border-bottom: ${props =>
    props.transparent ? '0' : '1px solid '} !important;
  border-color: ${Theme.navbar.borderColor} !important;
  background: #fff !important;
  z-index: 10000000000000 !important;
  width: 110% !important;
  left: 0;
  top: 0 !important;
  background-color: ${Theme.navbar.backgroundColor} !important;
`

const Image = styled(Im)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 13rem;
`

const handleClick = (e, data) => {
  if (data.text == 'Followings') {
    Router.push(`/dashboard`)
    return
  }
  if (data.text == 'Your interests') {
    Router.push(`/interest`)
    return
  }
  Router.push(`/${data.text}`)
  return
}

const DropDown = () => {
  return (
    <Drp
      text='Filter Posts'
      labeled
      button
      style={{
        position: 'absolute',
        top: '40%',
        left: '18rem',
        textAlign: 'center',
        color: Theme.navbar.textColor
      }}
    >
      <Drp.Menu
        style={{
          'background-color': Theme.navbar.menuColor,
          color: Theme.navbar.textColor
        }}
      >
        <Drp.Header
          content='categories'
          style={{
            'background-color': Theme.navbar.menuColor,
            color: Theme.navbar.textColor
          }}
        />
        <Drp.Menu
          scrolling
          style={{
            'background-color': Theme.navbar.optionsBackgroundColor,
            color: Theme.navbar.textColor
          }}
        >
          {TagOptions.map(option => (
            <Drp.Item
              key={option.value}
              {...option}
              style={{
                color: Theme.navbar.textColor
              }}
              onClick={handleClick}
            ></Drp.Item>
          ))}
        </Drp.Menu>
      </Drp.Menu>
    </Drp>
  )
}

const SearchResults = () => (
  <Menu vertical style={{ width: '30rem' }}>
    <Menu.Item name='closest' />
    <Menu.Item name='mostComments' />
    <Menu.Item name='mostPopular' />
  </Menu>
)

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      offset: 0,
      visibility: 'visible',
      isProfile: false,
      input: ''
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.logoutFunc = this.logoutFunc.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    const url =
      window.location.href.includes('profile/') ||
      window.location.href.includes('post/')
    this.setState({ isProfile: url })
  }

  handleScroll () {
    const offsetNow = window.pageYOffset
    const { offset } = this.state
    if (offsetNow > offset && offsetNow >= window.innerHeight) {
      this.setState({ offset: offsetNow, visibility: 'hidden' })
      return
    }
    this.setState({ visibility: 'visible', offset: offsetNow })
  }

  handleSubmit = () => {
    Router.push(`/search/${this.state.input}`)
  }

  handleChange = e => {
    this.setState({ input: e.target.value })
  }

  logoutFunc () {
    logout()
  }

  render () {
    const { transparent } = this.props
    const { visibility, isProfile } = this.state
    return (
      <>
        <Segment basic>
          <Menu
            size='massive'
            transparent={transparent}
            className='large-navbar'
            style={{ visibility }}
            secondary
          >
            <Menu.Menu position='left'>
              <Link href={isProfile ? '../dashboard' : './dashboard'}>
                <Image avatar src={imgSrc} />
              </Link>
              <ExitIcon
                fontSize='large'
                style={{
                  marginTop: '1rem',
                  marginLeft: '3.5rem',
                  color: 'dodgerBlue'
                }}
                onClick={this.logoutFunc}
              />
              <DropDown />
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input
                  icon={
                    <SearchIcon
                      fontSize='large'
                      style={{
                        marginTop: '0.5rem',
                        marginLeft: '-3.5rem',
                        color: 'black',
                        cursor: 'pointer'
                      }}
                      onClick={this.handleSubmit}
                    />
                  }
                  size='small'
                  placeholder='Search...'
                  style={{
                    width: '32rem'
                  }}
                  onChange={this.handleChange}
                />
                <NotificationsIcon
                  fontSize='large'
                  style={{ marginLeft: '2rem', color: 'white' }}
                />
                <Link href='/profile/profile'>
                  <Im
                    src={
                      this.props.profile
                        ? isProfile
                          ? '../'.concat(this.props.profile)
                          : this.props.profile
                        : '/static/Images/profiles/empty.png'
                    }
                    avatar
                    style={{ marginLeft: '2rem', marginRight: '15rem' }}
                  />
                </Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </>
    )
  }
}

export default NavBar
