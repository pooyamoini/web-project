import React from 'react'
import { Advertisement as Ad } from 'semantic-ui-react'
import styled from 'styled-components'
import { Header, Image } from 'semantic-ui-react'
import ChannelSuggestions from '../../public/json-files/suggest-channels.json'
import Link from 'next/link'
import Theme from '../../public/theme'

const Advertisement = styled(Ad)`
  background: ${Theme.sidebar.backgroundColor} !important;
  border: 1px solid;
  border-color: ${Theme.sidebar.backgroundColor};
  color: ${Theme.sidebar.textColor};
  border-radius: 4px;
  width: 80% !important;
  height: 15rem !important;
  margin-bottom: 1rem !important;
  padding: 10px;
  margin-top: ${props => props.marginTop} !important;
  ::-webkit-scrollbar {
    width: 0px !important;
    background: transparent !important;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000 !important;
  }
  overflow-y: scroll !important;
`

const Suggest = ({ src, name, username }) => {
  return (
    <>
      <Link href={`./profile/${username}`}>
        <Image src={src} avatar style={{ marginLeft: '0.1rem' }} />
      </Link>
      <Link href={`./profile/${username}`}>
        <a
          style={{
            display: 'inline',
            marginLeft: '1rem',
            opacity: '0.75',
            color: 'white'
          }}
        >
          {name}
        </a>
      </Link>
      <br />
      <br />
    </>
  )
}

const SuggestsProfiles = suggestions => {
  const Suggests = Array.from(suggestions).map(x => {
    return (
      <Suggest
        src={x.profile ? x.profile : '/static/Images/profiles/empty.png'}
        name={x.name}
        key={x.name}
        username={x.username}
      />
    )
  })
  return Suggests
}

const SuggestsChannels = () => {
  const Suggests = ChannelSuggestions.map(x => {
    return <Suggest src={x.src} name={x.name} key={x.name} />
  })
  return Suggests
}

const GenerateSuggests = ({ type, suggestions }) => {
  return type === 'account' ? SuggestsProfiles(suggestions) : SuggestsChannels()
}

const Recommend = props => (
  <Advertisement unit='small rectangle' marginTop={props.marginTop}>
    <Header
      as='h5'
      style={{
        color: Theme.sidebar.headarColor,
        opacity: '0.85',
        marginTop: '1rem',
        marginLeft: '1.5rem'
      }}
    >
      {props.content}
    </Header>
    <GenerateSuggests
      type={props.type}
      suggestions={props.type === 'account' ? props.suggestions : []}
    />
  </Advertisement>
)

export default Recommend
