import React, { Component } from 'react'
import Comment from './comment'

class GenerateComments extends Component {
  constructor (props) {
    super(props)
    const { data } = this.props
    this.state = { data }
  }

  render () {
    const { addReply } = this.props
    const { data } = this.state
    return data.map(x => {
      const index = data
        .map(function (i) {
          return i.name
        })
        .indexOf(x.name)
      if (x.reply === undefined || x.reply.length == 0)
        return (
          <Comment
            {...x}
            key={x}
            replies={[]}
            index={index}
            addReply={addReply}
          />
        )
      const replies = x.reply
      return (
        <Comment
          {...x}
          key={x}
          index={index}
          replies={replies !== undefined ? replies : []}
          addReply={addReply}
        />
      )
    })
  }
}

export default GenerateComments
