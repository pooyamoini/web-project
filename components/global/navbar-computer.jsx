import styled from 'styled-components'
import React, { Component } from 'react'
import {
  Menu as M,
  Image as Im,
  Input as In,
  Dropdown as Drp,
  Segment
} from 'semantic-ui-react'
import TagOptions from '../../public/json-files/nav-bar/navbar-tags.json'
import Theme from '../../public/Theme'
import Link from 'next/link'
import NotificationsIcon from '@material-ui/icons/Notifications'
const imgSrc = '/Images/global/logo1.png'
const avatarImg = '/Images/global/avatar.jpg'

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/static/Images/global/avatar.jpg' }
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/static/Images/global/avatar1.jpg' }
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/static/Images/global/avatar2.jpg' }
  }
]

const BadgeNotif = styled.p`
  color: #fff;
`

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
            />
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
    this.state = { offset: 0, visibility: 'visible' }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
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

  render () {
    const { transparent } = this.props
    const { visibility } = this.state
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
              <Link href='.'>
                <Image avatar src={imgSrc} />
              </Link>
              <DropDown />
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Drp
                  placeholder='Search'
                  search
                  selection
                  options={friendOptions}
                  style={{ width: '32rem' }}
                />
                <NotificationsIcon
                  fontSize='large'
                  style={{ marginLeft: '2rem', color: 'white' }}
                />
                <BadgeNotif>7</BadgeNotif>
                <Link href='/profile'>
                  <Im
                    src={avatarImg}
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