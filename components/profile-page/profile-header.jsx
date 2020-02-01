import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'
import NoSSR from 'react-no-ssr'
import Mobile from './profile-header-mobile'
import Computer from './profile-header-desktop'

const ProfileHeader = props => {
  return (
    <Segment.Group basic>
      <NoSSR>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Mobile data={props.data} type={props.type} />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          <Computer
            data={props.data}
            type={props.type}
            followers={props.followers}
            followings={props.followings}
          />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyComputer.minWidth}
          maxWidth={Responsive.onlyComputer.maxWidth}
        >
          <Computer
            data={props.data}
            type={props.type}
            followers={props.followers}
            followings={props.followings}
          />
        </Responsive>
      </NoSSR>
    </Segment.Group>
  )
}
export default ProfileHeader
