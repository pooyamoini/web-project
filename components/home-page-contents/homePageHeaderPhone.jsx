import React, { Component } from 'react'
import {
  Container as Co,
  Transition,
  Card,
  Image,
  Icon,
} from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled(Co)`
  width: 90% !important;
  margin: 20px auto !important;
`

const cardType = ['Hot', 'New', 'Followed', 'YourInterest']

export default class HomePageHeaderPhone extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleCard: cardType[0],
      duration: 1000,
      visibility: {
        Hot: true,
        New: false,
        Followed: false,
        YourInterest: false
      }
    }
    this.isVisible = this.isVisible.bind(this)
    this.changeVisibleCard = this.changeVisibleCard.bind(this)
    this.showNextCard = this.showNextCard.bind(this)
  }

  getCard (type, title, date, votes, image) {
    return (
      <Card
        centered
        style={{ width: '95vw', marginTop: '8rem' }}
      >
        <Image src={image} wrapped ui={false} size='big' />
        <Card.Content>
          <Card.Header>{type}</Card.Header>
          <Card.Meta>{title}</Card.Meta>
          <Card.Description>{date}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name='thumbs up' />
            {votes} Votes
          </p>
        </Card.Content>
      </Card>
    )
  }

  isVisible (name) {
    return this.state.visibility[name]
  }

  changeVisibleCard () {
    let dic = this.state.visibility
    let i = cardType.indexOf(this.state.visibleCard)
    if (++i > 3) {
      i = 0
    }
    dic[this.state.visibleCard] = false
    this.setState({
      visibleCard: cardType[i],
      visibility: dic
    })
    setTimeout(this.showNextCard, this.state.duration)
  }

  showNextCard () {
    let dic = this.state.visibility
    dic[this.state.visibleCard] = true
    this.setState({
      visibility: dic
    })
  }

  componentDidMount () {
    this.timer = setInterval(() => this.changeVisibleCard(), 5000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Container>
        <Transition
          visible={this.isVisible('Hot')}
          animation='fade up'
          duration={this.state.duration}
        >
          {this.getCard(
            'Hot',
            this.props.data.Hot.Title,
            this.props.data.Hot.Date,
            this.props.data.Hot.Votes,
            this.props.data.Hot.Image
          )}
        </Transition>
        <Transition
          visible={this.isVisible('New')}
          animation='fade up'
          duration={this.state.duration}
        >
          {this.getCard(
            'New',
            this.props.data.New.Title,
            this.props.data.New.Date,
            this.props.data.New.Votes,
            this.props.data.New.Image
          )}
        </Transition>
        <Transition
          visible={this.isVisible('Followed')}
          animation='fade up'
          duration={this.state.duration}
        >
          {this.getCard(
            'Followed',
            this.props.data.Followed.Title,
            this.props.data.Followed.Date,
            this.props.data.Followed.Votes,
            this.props.data.Followed.Image
          )}
        </Transition>
        <Transition
          visible={this.isVisible('YourInterest')}
          animation='fade up'
          duration={this.state.duration}
        >
          {this.getCard(
            'Your Interest',
            this.props.data.YourInterest.Title,
            this.props.data.YourInterest.Date,
            this.props.data.YourInterest.Votes,
            this.props.data.YourInterest.Image
          )}
        </Transition>
      </Container>
    )
  }
}
