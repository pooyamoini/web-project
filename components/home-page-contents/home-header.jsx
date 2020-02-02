import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import Computer from './mainPageHeader'
import Mobile from './homePageHeaderPhone'
import NoSSR from 'react-no-ssr'

const HomePageHeaders = props => (
  <Segment.Group basic>
    <NoSSR>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Mobile data={props.data} />
      </Responsive>
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyComputer.maxWidth}
      >
        <Computer {...props} />
      </Responsive>
    </NoSSR>
  </Segment.Group>
)

export default HomePageHeaders
