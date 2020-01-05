import React, { Component } from 'react'
import { Grid, Segment, Image, Card } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'

const Name = styled.span`
  font-size: 20px;
  margin-left: 1rem;
  color: white;
`

const Meta = styled.span`
  float: right;
  margin-left: auto;
  margin-right: 7rem;
  color: white;
`

class Post extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Grid style={{ marginBottom: '5rem' }}>
        <Grid.Row textAlign='left' style={{ padding: '0' }}>
          <Segment
            basic
            style={{ padding: '0', marginLeft: '6.5rem', width: '100%' }}
          >
            <Image src={this.props.src} avatar />
            <Name>{this.props.name}</Name>
            <Meta>30 mins ago</Meta>
          </Segment>
        </Grid.Row>
        <Grid.Row centered>
          <Link href='/post'>
            <Card style={{ width: '80vw', padding: '0 !important' }}>
              <Image src={this.props.image} wrapped ui={false} />
              <Card.Content>
                <Card.Description style={{ fontSize: '20px' }}>
                  {' '}
                  {this.props.desc.substr(0, 100)}
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Post
