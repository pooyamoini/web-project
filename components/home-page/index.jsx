import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import NoSSR from 'react-no-ssr'
import homePagePostsJson from '../../public/home-page-posts.json'
import Mobile from './mobile'
import Computer from './desktop'
import Tablet from './tablet'

const HomePageContents = () => {
  return (
    <Segment.Group basic>
      <NoSSR>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Mobile posts={homePagePostsJson} />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          <Tablet posts={homePagePostsJson} />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyComputer.minWidth}
          maxWidth={Responsive.onlyComputer.maxWidth}
        >
          <Computer posts={homePagePostsJson} />
        </Responsive>
      </NoSSR>
    </Segment.Group>
  )
}

export default HomePageContents