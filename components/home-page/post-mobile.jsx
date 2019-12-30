import React, { Component } from 'react'
import { Grid, Segment, Image, Card } from 'semantic-ui-react'
import styled from 'styled-components'

const Name = styled.span`
  font-size: 20px;
  margin-left: 1rem;
  color: white;
`

class Post extends Component {
  render () {
    return (
      <Grid>
        <Grid.Row textAlign='left' style={{ padding: '0' }}>
          <Segment basic style={{ padding: '0', marginLeft: '2rem' }}>
            <Image src='/static/Images/global/avatar.jpg' avatar />
            <Name>pooya moini</Name>
          </Segment>
        </Grid.Row>
        <Grid.Row centered>
          <Card style={{ width: '90vw', padding: '0 !important' }}>
            <Image src='/static/Images/global/avatar1.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>22 Friends</a>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Post
