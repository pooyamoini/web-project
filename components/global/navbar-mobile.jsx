import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

export default class MenuExampleVerticalText extends Component {
  render () {
    return (
      <Menu text widths={5}>
        <Menu.Item>
          <Image src='/static/Images/global/logo1.png' avatar/>
        </Menu.Item>
        <Menu.Item>
          <Image src='/static/Images/global/search.png' />
        </Menu.Item>
        <Menu.Item>
          <Image src='/static/Images/global/notification.png' />
        </Menu.Item>
        <Menu.Item>
          <Image src='/static/Images/global/menu.png' />
        </Menu.Item>
        <Menu.Item>
          <Image src='/static/Images/global/avatar.jpg' avatar />
        </Menu.Item>
      </Menu>
    )
  }
}
