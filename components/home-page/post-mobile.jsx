import React, { Component } from 'react'
import { Grid, Segment, Image, Card } from 'semantic-ui-react'
import styled from 'styled-components'

const Name = styled.span`
  font-size: 20px;
  margin-left: 1rem;
  color: white;
`

const Meta = styled.span`
  float: right;
  margin-left: auto;
  margin-right: 3rem;
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
            style={{ padding: '0', marginLeft: '2rem', width: '100%' }}
          >
            <Image src={this.props.src} avatar />
            <Name>{this.props.name}</Name>
            <Meta>30 mins ago</Meta>
          </Segment>
        </Grid.Row>
        <Grid.Row centered>
          <Card style={{ width: '90vw', padding: '0 !important' }}>
            <Image
              src={this.props.image}
              wrapped
              ui={false}
              style={{
                display: this.props.image === '' ? 'hidden' : 'visible'
              }}
            />
            <Card.Content>
              <Card.Description>
                {this.props.desc.substr(0, 100)}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Post
