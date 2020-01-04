import React, { Component } from 'react'
import {
  Button,
  Form,
  Header,
  Divider,
  Comment as CMT
} from 'semantic-ui-react'
import Comment from './comment'
import samples from '../../../public/comments.json'

const GenerateComments = ({ data }) => data.map(x => <Comment {...x} key={x} />)

const CommentsPage = ({ display }) => (
  <CMT.Group style={{ marginTop: '5rem', marginBottom: '5rem', display }}>
    <Divider horizontal>
      <Header as='h3' color='grey'>
        Comments
      </Header>
    </Divider>
    <Form reply>
      <Form.TextArea style={{ marginLeft: '5%', width: '90%' }} />
      <Button
        secondary
        positive
        style={{ marginBottom: '1rem', marginLeft: '5%' }}
      >
        add Comment
      </Button>
    </Form>
    <GenerateComments data={samples} />
  </CMT.Group>
)

export default CommentsPage
