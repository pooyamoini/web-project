import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import NoSSR from 'react-no-ssr'
import homePagePostsJson from '../../public/home-page-posts.json'
import Mobile from './mobile'
import Computer from './desktop'
import Tablet from './tablet'

const HomePageContents = ({ suggestions, posts }) => {
  return (
    <Segment.Group basic>
      <NoSSR>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Mobile posts={posts} />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          <Tablet posts={posts} />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyComputer.minWidth}
          maxWidth={Responsive.onlyComputer.maxWidth}
        >
          <Computer posts={posts} suggestions={suggestions} />
        </Responsive>
      </NoSSR>
    </Segment.Group>
  )
}

export default HomePageContents
