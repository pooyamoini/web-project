import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Grid as Gr,
  GridColumn,
  Card,
  Image,
  Icon as Ic
} from 'semantic-ui-react'
import Theme from '../../public/theme'
import Link from 'next/link'
const Grid = styled(Gr)`
  width: 80%;
  margin: 30px auto !important;
  margin-top: 6rem !important;
`

const Icon = styled(Ic)`
  visibility: hidden;
`

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.getCard = this.getCard.bind(this)
    this.state = {
      nnews: ['', ''],
      nhot: ['', ''],
      nfollow: ['', ''],
      nx: ['', '']
    }
  }

  componentDidMount () {
    setTimeout(() => {
      const { news, hot, follow, x } = this.props
      const nnews = this.getLikes(news)
      const nhot = this.getLikes(hot)
      const nfollow = this.getLikes(follow)
      const nx = this.getLikes(x)
      this.setState({ nnews, nhot, nfollow, nx })
    }, 2000)
  }

  getLikes (list) {
    try {
      return [list.nlikes.length, list.ndislikes.length]
    } catch (e) {
      return ['', '']
    }
  }

  getCard (type, title, date, votes, comments, image, id) {
    return (
      <Link href={`/post/${id}`}>
        <Card
          style={{
            'background-color': Theme.post.backgroundColor,
            'box-shadow': 'none'
          }}
        >
          <Card.Content>
            <Card.Header
              style={{
                color: Theme.post.headarColor
              }}
            >
              {type}
            </Card.Header>
            <Card.Meta
              style={{
                color: Theme.post.dateColor
              }}
            >
              {date}
            </Card.Meta>
            <Card.Description
              style={{
                color: Theme.post.textColor
              }}
            >
              {title}
            </Card.Description>
          </Card.Content>
          <Image
            src={image}
            wrapped
            ui={false}
            style={{
              height: 'auto !important;',
              width: '100% !important;'
            }}
          />
          <Card.Content
            extra
            style={{
              color: Theme.post.dateColor
            }}
          >
            <p>
              <Icon name='thumbs up' />
              {votes} Likes
              <Icon name='thumbs up' />
              {comments} Dislikes
            </p>
          </Card.Content>
        </Card>
      </Link>
    )
  }

  render () {
    console.log(this.props)
    return (
      <Grid id='Grid' columns={4} divided>
        <GridColumn textAlign='center'>
          {this.getCard(
            'Hot',
            this.props.hot.content,
            this.props.hot.account,
            this.state.nhot[0],
            this.state.nhot[1],
            this.props.hot.image,
            this.props.hot.id_post
          )}
        </GridColumn>
        <GridColumn textAlign='center'>
          {this.getCard(
            'New',
            this.props.news.content,
            this.props.news.account,
            this.state.nnews[0],
            this.state.nnews[1],
            this.props.news.image,
            this.props.news.id_post
          )}
        </GridColumn>
        <GridColumn textAlign='center'>
          {this.getCard(
            'Followed',
            this.props.follow.content,
            this.props.follow.account,
            this.state.nfollow[0],
            this.state.nfollow[1],
            this.props.follow.image,
            this.props.follow.id_post
          )}
        </GridColumn>
        <GridColumn textAlign='center'>
          {this.getCard(
            'Your Interest',
            this.props.x.content,
            this.props.x.account,
            this.state.nx[0],
            this.state.nx[1],
            this.props.x.image,
            this.props.x.id_post
          )}
        </GridColumn>
      </Grid>
    )
  }
}
