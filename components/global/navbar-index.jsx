import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import Tablet from './navbar-tablet'
import Computer from './navbar-computer'
import Mobile from './navbar-mobile'
import NoSSR from 'react-no-ssr'

const Navbar = () => (
  <Segment.Group basic>
    <NoSSR>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Mobile />
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <Tablet />
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyComputer.minWidth}
        minWidth={Responsive.onlyComputer.minWidth}
      >
        <Computer />
      </Responsive>
    </NoSSR>
  </Segment.Group>
)

export default Navbar
