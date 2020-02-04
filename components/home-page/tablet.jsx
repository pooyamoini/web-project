import React from 'react'
import Tablet from './post-tablet'

const Posts = props => {
  console.log(props)
  const posts = props.posts.map(x => (
    <Tablet
      name={x.title}
      src={x.profile}
      key={x.title}
      content={x.content}
      id={x.id}
      image={x.image}
    ></Tablet>
  ))
  return <>{posts}</>
}

export default Posts
