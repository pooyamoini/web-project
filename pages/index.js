import React from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      
    </Wrapper>
  );
};

export default Home;
