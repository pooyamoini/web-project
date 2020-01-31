import React, { Component } from 'react'
import styled from 'styled-components'
import SettingsIcon from '@material-ui/icons/Settings'
import IconButton from '@material-ui/core/IconButton'
import Followers from '../../public/json-files/followers'
import Link from 'next/link'
import {
  Grid as Gr,
  Segment as Seg,
  Image,
  Dropdown,
  Button
} from 'semantic-ui-react'

const Grid = styled(Gr)`
  width: 80%;
  margin: 5rem auto 0 !important;
  border-bottom: 2.5px solid rgb(102, 102, 102);
`

const Segment = styled(Seg)`
  // border: none !important;
  color: white;
  background: transparent !important;
`

const SegmentGroup = styled(Segment.Group)`
  border: none !important;
  box-shadow: none !important;
`

export default class ProfileHeader extends Component {
  constructor (props) {
    super(props)
    this.state = { followed: false }
  }

  changeFollow = () => {
    this.setState(prevState => ({
      followed: !prevState.followed
    }))
  }

  getButton () {
    if (this.props.type == 'self') {
      return (
        <IconButton
          aria-label='setting'
          size='medium'
          style={{
            color: 'white'
          }}
        >
          <Link href='edit-profile'>
            <SettingsIcon centered fontSize='large'></SettingsIcon>
          </Link>
        </IconButton>
      )
    }
    if (!this.state.followed) {
      return (
        <Button color='blue' onClick={this.changeFollow}>
          Follow
        </Button>
      )
    } else {
      return (
        <Button color='red' onClick={this.changeFollow}>
          Unfollow
        </Button>
      )
    }
  }

  render () {
    return (
      <Grid centered>
        <Grid.Column width={5}>
          <Image
            size='small'
            centered
            circular
            src={
              this.props.data.profile 
                ? this.props.data.profile
                : '/static/Images/profiles/empty.png'
            }
            style={{
              marginTop: '3rem'
            }}
          ></Image>
        </Grid.Column>
        <Grid.Column width={9}>
          <SegmentGroup>
            <SegmentGroup horizontal>
              <Segment
                style={{
                  'margin-top': '1rem',
                  fontSize: '26px ',
                  fontWeight: '700'
                }}
              >
                {this.props.data.username}
              </Segment>
              <Segment
                textAlign='center'
                style={{
                  marginTop: '2rem'
                }}
              >
                {this.getButton()}
              </Segment>
            </SegmentGroup>
            <SegmentGroup horizontal>
              <Segment
                style={{
                  fontSize: '20px',
                  fontWeight: '700'
                }}
              >
                {0} Posts
              </Segment>
              <Segment
                style={{
                  fontSize: '20px',
                  fontWeight: '0 !important'
                }}
              >
                <Dropdown
                  inline
                  text={'0' + ' Followers'}
                  pointing={false}
                  options={Followers}
                  scrolling
                  fluid
                  icon='none'
                  style={{
                    width: '120%'
                  }}
                />
              </Segment>
              <Segment
                style={{
                  fontSize: '20px'
                }}
              >
                <Dropdown
                  inline
                  text={'0' + ' Following'}
                  pointing={false}
                  options={Followers}
                  scrolling
                  fluid
                  icon='none'
                  style={{
                    width: '120%'
                  }}
                />
              </Segment>
            </SegmentGroup>
            <Segment
              style={{
                fontSize: '18px',
                fontWeight: '400'
              }}
            >
              {this.props.data.bio}
            </Segment>
          </SegmentGroup>
        </Grid.Column>
      </Grid>
    )
  }
}
