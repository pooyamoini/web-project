import React, { Component } from 'react'
import styled from 'styled-components'
import Theme from '../../public/theme'
import SettingsIcon from '@material-ui/icons/Settings'
import IconButton from '@material-ui/core/IconButton'
import Link from 'next/link'
import { followAPI } from '../../api/profile'
import Router from 'next/router'

import {
  Grid as Gr,
  Segment as Seg,
  Card,
  Image,
  Dropdown,
  Button,
  Divider
} from 'semantic-ui-react'

const Grid = styled(Gr)`
  width: 80%;
  margin: 5rem auto 0 !important;
  border-bottom: 2.5px solid rgb(102, 102, 102);
`

const Segment = styled(Seg)`
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
    this.changeFollow = this.changeFollow.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async changeFollow() {
    const token = localStorage.getItem('token')
    const username = this.props.data.username
    try {
      const res = await followAPI(token, username)
      window.location.reload()
    } catch (e) {
      Router.push('../')
      return
    }
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
          <Link href='../edit-profile'>
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

  handleChange = (e, { value }) => {
    Router.push(`/profile/${value}`)
    return
  }

  render () {
    return (
      <SegmentGroup>
        <SegmentGroup horizontal>
          <Segment>
            <Image
              size='small'
              centered
              circular
              src={
                this.props.data.profile
                  ? '../'.concat(this.props.data.profile)
                  : '../static/Images/profiles/empty.png'
              }
            ></Image>
          </Segment>
          <SegmentGroup>
            <Segment
              style={{
                marginTop: '1rem',
                fontSize: '1.5rem',
                fontWeight: '800'
              }}
            >
              {this.props.data.name}
            </Segment>
            <Segment
              style={{
                marginTop: '0.5rem'
              }}
            >
              {this.getButton()}
            </Segment>
          </SegmentGroup>
        </SegmentGroup>
        <Segment
          style={{
            marginLeft: '1rem',
            fontSize: '20px'
          }}
        >
          {this.props.data.bio}
          <Divider inverted />
        </Segment>
        <SegmentGroup
          horizontal
          style={{
            height: '50% !important'
          }}
        >
          <Segment
            textAlign='center'
            style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              marginLeft: '1rem'
            }}
          >
            {this.props.data.npost} <br></br>
            Posts
          </Segment>
          <Segment
            textAlign='center'
            style={{
              fontSize: '1.3rem',
              fontWeight: '700'
            }}
          >
            {this.props.data.nfollowers} <br />
            Followers
            <Dropdown
              inline
              text=' '
              pointing={false}
              onChange={this.handleChange}
              options={this.props.followers}
              scrolling
              fluid
              icon='none'
              style={{
                width: '120%',
                // marginLeft: '1.5rem',
                marginTop: '-2rem',
                fontWeight: '0 !important'
              }}
            />
          </Segment>
          <Segment
            textAlign='center'
            style={{
              fontSize: '1.3rem',
              fontWeight: '700'
            }}
          >
            {this.props.data.nfollowings} <br />
            Followings
            <Dropdown
              inline
              text=' '
              pointing={false}
              onChange={this.handleChange}
              options={this.props.followings}
              scrolling
              fluid
              icon='none'
              style={{
                width: '120%',
                // marginLeft: '1.5rem',
                marginTop: '-2rem',
                fontWeight: '0 !important'
              }}
            />
          </Segment>
        </SegmentGroup>
        <Divider inverted />
      </SegmentGroup>
    )
  }
}
