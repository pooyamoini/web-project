import React from 'react'
import Tablet from './post-tablet'

const Posts = props => {
  const posts = props.posts.map(x => (
    <Tablet
      name={x.title}
      src={x.src}
      key={x.title}
      desc={x.content}
      image={x.image}
    ></Tablet>
  ))
  return <>{posts}</>
}

export default Posts
