import React, { Component } from 'react'
import { Menu as M, Image, Dropdown, Input } from 'semantic-ui-react'
import Link from 'next/link'
import styled from 'styled-components'
import Theme from '../../public/Theme'

const Menu = styled(M)`
border-bottom: ${props =>
  props.transparent ? '0' : '1px solid '} !important;
border-color: ${Theme.navbar.borderColor} !important;
background-color: ${Theme.navbar.backgroundColor} !important;
margin-top: 0 !important;
`;

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
      displayI: 'none'
    }
    this.handleDrp = this.handleDrp.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleDrp () {
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

  render () {
    const { open, display, openI, displayI } = this.state
    return (
      <>
        <Menu text widths={5}>
          <Menu.Item>
            <Link href='.'>
              <Image src='/static/Images/global/logo1.png' avatar />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Image
              src='/static/Images/global/search.png'
              onClick={this.handleSearch}
              style={{color: 'white'}}
            />
          </Menu.Item>
          <Menu.Item>
            <Image src='/static/Images/global/notification.png' />
          </Menu.Item>
          <Menu.Item>
            <Image
              src='/static/Images/global/menu.png'
              onClick={this.handleDrp}
            />
          </Menu.Item>
          <Menu.Item>
            <Link href='/profile'>
              <Image src='/static/Images/global/avatar.jpg' avatar />
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
          onClick={this.handleDrp}
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
