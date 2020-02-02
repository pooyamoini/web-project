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
  }

  getCard (type, title, date, votes, comments, image) {
    return (
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
    )
  }

  render () {
    return (
      <Grid id='Grid' columns={4} divided>
        <GridColumn textAlign='center'>
          {this.getCard(
            'Hot',
            this.props.hot.content,
            this.props.hot.account,
            2,
            5,
            this.props.hot.image
          )}
        </GridColumn>
        <GridColumn textAlign='center'>
          {this.getCard(
            'New',
            this.props.news.content,
            this.props.news.account,
            2,
            this.props.news.ndislikes,
            this.props.news.image
          )}
        </GridColumn>
        <GridColumn textAlign='center'>
          {this.getCard(
            'Followed',
            this.props.follow.content,
            this.props.follow.account,
            2,
            5,
            this.props.follow.image
          )}
        </GridColumn>
        <GridColumn textAlign='center'>
          {this.getCard(
            'Your Interest',
            this.props.x.content,
            this.props.x.account,
            2,
            5,
            this.props.x.image
          )}
        </GridColumn>
      </Grid>
    )
  }
}
