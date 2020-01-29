import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Responsive, Segment } from 'semantic-ui-react'
import NoSSR from 'react-no-ssr'
import GloBalStyle from '../components/global/globalStyle'
import Desktop from '../components/login/login-desktop'
import Mobile from '../components/login/login-mobile'

const LoginComp = () => (
  <>
    <GloBalStyle />
    <Segment.Group basic>
      <NoSSR>
        <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
          <Mobile />
        </Responsive>
        <Responsive
          minWidth={Responsive.onlyComputer.minWidth}
          maxWidth={Responsive.onlyComputer.maxWidth}
        >
          <Desktop />
        </Responsive>
      </NoSSR>
    </Segment.Group>
  </>
)

export default LoginComp
