import styled from "styled-components";
import React from "react";
import {
  Button,
  Menu as M,
  Image as Im,
  Input as In,
  Icon,
  Dropdown as Drp
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TagOptions from "../../public/json-files/nav-bar/navbar-tags.json";

const imgSrc = "/Images/global/logo1.png";
const avatarImg = "/Images/global/avatar.jpg";

const Menu = styled(M)`
  position: ${props =>
    props.transparent ? "absolute" : "relative"} !important;
  margin: 0 !important;
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: ${props =>
    props.transparent ? "0" : "1px solid #e2e2e2"} !important;
  background-color: ${props =>
    props.transparent ? "transparent" : "white"} !important;
  z-index: ${props => (props.transparent ? 1 : 0)} !important;
  width: 100%;
`;

const Image = styled(Im)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 28rem;
`;

const Input = styled(In)`
  min-width: 39rem;
`;

const DropDown = () => {
  return (
    <Drp
      text="Filter Posts"
      labeled
      button
      style={{
        position: "absolute",
        top: "40%",
        left: "33rem",
        textAlign: "center"
      }}
    >
      <Drp.Menu style={{ background: "white !important" }}>
        <Drp.Header content="Tag Label" />
        <Drp.Menu scrolling>
          {TagOptions.map(option => (
            <Drp.Item key={option.value} {...option} />
          ))}
        </Drp.Menu>
      </Drp.Menu>
    </Drp>
  );
};

function Navbar({ transparent }) {
  return (
    <Menu
      size="massive"
      transparent={transparent}
      primary
      className="large-navbar"
    >
      <Menu.Menu position="left">
        <Image avatar src={imgSrc} />
        <DropDown />
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input size="mini" placeholder="Search..." />
          <Im
            src={avatarImg}
            avatar
            style={{ marginLeft: "2rem", marginRight: "10rem" }}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
