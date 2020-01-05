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
    return data.map(x => {
      return <Comment {...x} key={x} />
    })
  }
}

export default GenerateComments
