import React from 'react'
import {
  Card,
  Image,
  Grid,
  Divider,
  Segment as Seg,
  Menu as Men,
  Button,
  Comment,
  Form,
  Header
} from 'semantic-ui-react'
import Content from '../../public/post-content'
import styled from 'styled-components'
import Theme from '../../public/theme'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import CommentIcon from '@material-ui/icons/ChatBubble'
import ShareIcon from '@material-ui/icons/Share'
import Done from '@material-ui/icons/DoneOutline';

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
    <Grid.Column centered width={8}>
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
        <Comment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>
          <Comment>
            <Comment.Avatar src='/static/Images/global/avatar2.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src='/static/Images/global/avatar1.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>
          <Form reply>
            <Form.TextArea />
            <Done fontSize="large" style={{color : 'green'}}/>
            <Button
              content='Add Reply'
              labelPosition='left'
              primary
            />
          </Form>
        </Comment.Group>
      </Card>
    </Grid.Column>
  </Grid>
)

export default CardExampleCard
