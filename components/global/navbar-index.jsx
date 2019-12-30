import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import Tablet from './navbar-tablet'
import Computer from './largeNavbar'
import NoSSR from "react-no-ssr";

const Navbar = () => (
  <NoSSR>
  <Segment.Group basic>
    <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
      <Tablet />
    </Responsive>
    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      <Computer />
    </Responsive>
  </Segment.Group>
  </NoSSR>
)

export default Navbar
