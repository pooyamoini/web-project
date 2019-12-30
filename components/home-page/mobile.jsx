import React from 'react'
import Mobile from './post-mobile'

const Posts = props => {
  const posts = props.posts.map(x => (
    <Mobile
      name={x.title}
      src={x.src}
      key={x.title}
      desc={x.content}
      image={x.image}
    ></Mobile>
  ))
  return <>{posts}</>
}

export default Posts
