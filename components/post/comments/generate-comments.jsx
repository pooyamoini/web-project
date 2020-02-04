import React, { Component } from 'react'
import Comment from './comment'

class GenerateComments extends Component {
  constructor (props) {
    super(props)
    const { data } = this.props
    this.state = { data }
  }

  render () {
    const { data } = this.state
    const { comments, id } = this.props
    return comments.map(x => {
      const index = data
        .map(function (i) {
          return i.name
        })
        .indexOf(x.name)
      return <Comment {...x} key={x} index={index} />
    })
  }
}

export default GenerateComments
