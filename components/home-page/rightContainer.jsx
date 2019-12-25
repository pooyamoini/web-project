import React from "react";
import { Advertisement as Ad, Segment } from "semantic-ui-react";
import styled from "styled-components";
import { Header, Image, Container } from "semantic-ui-react";
import ProfileSuggestions from "../../public/json-files/suggestion-accounts.json";
import ChannelSuggestions from "../../public/json-files/suggest-channels.json";

const Advertisement = styled(Ad)`
  background: #fff !important;
  border: 1px solid #e6e6e6CC;
  border-radius: 4px;
  width: 80% !important;
  height: 15rem !important;
  margin-bottom: 1rem !important;
  margin-top: ${props => props.marginTop} !important;
  ::-webkit-scrollbar {
    width: 0px !important;
    background: transparent !important;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000 !important;
  }
  overflow-y: scroll !important;
`;

const Suggest = ({ src, name }) => {
  return (
    <>
      <Image src={src} avatar style={{ marginLeft: "0.5rem" }} />
      <p style={{ display: "inline", marginLeft: "1rem", opacity: "0.75" }}>
        {name}
      </p>
      <br />
      <br />
    </>
  );
};

const SuggestsProfiles = () => {
  const Suggests = ProfileSuggestions.map(x => {
    return <Suggest src={x.src} name={x.name} key={x.name} />;
  });
  return Suggests;
};

const SuggestsChannels = () => {
  const Suggests = ChannelSuggestions.map(x => {
    return <Suggest src={x.src} name={x.name} key={x.name} />;
  });
  return Suggests;
};

const GenerateSuggests = ({ type }) => {
  return type === "account" ? SuggestsProfiles() : SuggestsChannels();
};

const Recommend = props => (
  <Advertisement unit="small rectangle" marginTop={props.marginTop}>
    <Header
      as="h5"
      style={{
        color: "grey",
        opacity: "0.85",
        marginTop: "1rem",
        marginLeft: "1.5rem"
      }}
    >
      {props.content}
    </Header>
    <GenerateSuggests type={props.type} />
  </Advertisement>
);

export default Recommend;
