import React from 'react'
import Mobile from './post-mobile'

const Posts = props => {
  const posts = props.posts.map(x => (
    <Mobile
      name={x.title}
      src={x.profile}
      key={x.title}
      content={x.content}
      image={x.image}
      id={x.id}
    ></Mobile>
  ))
  return <>{posts}</>
}

export default Posts
