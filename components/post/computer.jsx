import React from 'react'
import {
  Card,
  Image,
  Grid,
  Segment as Seg,
  Menu as Men
} from 'semantic-ui-react'
import Content from '../../public/post-content'
import Comments from './comments/computer'
import styled from 'styled-components'
import Theme from '../../public/theme'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import CommentIcon from '@material-ui/icons/ChatBubble'
import ShareIcon from '@material-ui/icons/Share'

const Segment = styled(Seg)`
  padding: 0 !important;
  background: ${Theme.backgroundColor} !important;
  margin-bottom: 0 !important;
  color: white !important;
`
const ImageAvatar = styled(Image)`
  border-radius: 50% !important;
  display: inline !important;
  margin-right: 1rem;
`

const Text = styled.span`
  font-size: 1.25rem;
`

const Menu = styled(Men)`
  border: 0 !important;
  box-shadow: none !important;
`

const Icon = styled(Menu.Item)`
  &:before {
    width: 0 !important;
  }
`

const handleStyle = {
  marginRight: '1rem'
}

const CardExampleCard = () => (
  <Grid centered style={{ marginTop: '7rem' }}>
    <Grid.Column centered width={9}>
      <Card style={{ width: '100%' }}>
        <Segment basic>
          <ImageAvatar src='/static/Images/global/avatar2.jpg' size='tiny' />
          <Text>Kian Bakhtari</Text>
        </Segment>
        <Image src='/static/Images/global/post-page.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Description>{Content}</Card.Description>
        </Card.Content>
        <Menu floated='right'>
          <Icon>
            <CommentIcon fontSize='large' style={handleStyle} />
            <ThumbUpAltIcon fontSize='large' style={handleStyle} />
            <ShareIcon fontSize='large' style={handleStyle} />
          </Icon>
        </Menu>
        <Comments />
      </Card>
    </Grid.Column>
  </Grid>
)

export default CardExampleCard
