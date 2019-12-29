import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import Tablet from './navbar-tablet'
import Computer from './largeNavbar'

const Navbar = () => (
  <Segment.Group basic>
    <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
      <Tablet />
    </Responsive>
    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      <Computer />
    </Responsive>
  </Segment.Group>
)

export default Navbar
