import React, { Component } from 'react'
import styled from 'styled-components'
import SettingsIcon from '@material-ui/icons/Settings'
import IconButton from '@material-ui/core/IconButton'
import Link from 'next/link'
import { followAPI } from '../../api/profile'
import {
  Grid as Gr,
  Segment as Seg,
  Image,
  Dropdown,
  Button
} from 'semantic-ui-react'
import Router from 'next/router'

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

  async changeFollow () {
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
    if (!this.props.data.isfollowed) {
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
      <Grid centered>
        <Grid.Column width={5}>
          <Image
            size='small'
            centered
            circular
            src={
              this.props.data.profile
                ? '../'.concat(this.props.data.profile)
                : '../static/Images/profiles/empty.png'
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
                  fontSize: '2rem ',
                  fontWeight: '700'
                }}
              >
                {this.props.data.name}
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
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}
              >
                {this.props.data.npost} Posts
              </Segment>
              <Segment
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '0 !important'
                }}
              >
                <Dropdown
                  search
                  inline
                  onChange={this.handleChange}
                  text={this.props.data.nfollowers + ' Followers'}
                  pointing={false}
                  scrolling
                  fluid
                  options={this.props.followers}
                  icon='none'
                  style={{
                    width: '120%'
                  }}
                ></Dropdown>
              </Segment>
              <Segment
                style={{
                  fontSize: '1.5rem'
                }}
              >
                <Dropdown
                  inline
                  onChange={this.handleChange}
                  text={this.props.data.nfollowings + ' Following'}
                  pointing={false}
                  options={this.props.followings}
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
                fontSize: '1.3rem',
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
