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

const imgSrc = "/Images/global/logo1.png";
const avatarImg = "/Images/global/avatar.jpg";

const tagOptions = [
  {
    key: "Important",
    text: "Important",
    value: "Important",
    label: { color: "red", empty: true, circular: true }
  },
  {
    key: "Announcement",
    text: "Announcement",
    value: "Announcement",
    label: { color: "blue", empty: true, circular: true }
  },
  {
    key: "Cannot Fix",
    text: "Cannot Fix",
    value: "Cannot Fix",
    label: { color: "black", empty: true, circular: true }
  },
  {
    key: "News",
    text: "News",
    value: "News",
    label: { color: "purple", empty: true, circular: true }
  },
  {
    key: "Enhancement",
    text: "Enhancement",
    value: "Enhancement",
    label: { color: "orange", empty: true, circular: true }
  },
  {
    key: "Change Declined",
    text: "Change Declined",
    value: "Change Declined",
    label: { empty: true, circular: true }
  },
  {
    key: "Off Topic",
    text: "Off Topic",
    value: "Off Topic",
    label: { color: "yellow", empty: true, circular: true }
  },
  {
    key: "Interesting",
    text: "Interesting",
    value: "Interesting",
    label: { color: "pink", empty: true, circular: true }
  },
  {
    key: "Discussion",
    text: "Discussion",
    value: "Discussion",
    label: { color: "green", empty: true, circular: true }
  }
];

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
  left: 15rem;
`;

const Input = styled(In)`
  min-width: 25rem;
`;

const DropDown = () => {
  return (
    <Drp
      text="Filter Posts"
      labeled
      button
      className="filter-categories icon"
      style={{
        position: "absolute",
        top: "25%",
        left: "25rem",
        width: "15rem",
        textAlign: "center"
      }}
    >
      <Drp.Menu>
        <Drp.Header content="Tag Label" />
        <Drp.Menu scrolling>
          {tagOptions.map(option => (
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
      secondary
      className="large-navbar"
    >
      <Menu.Menu position="left">
        <Image avatar src={imgSrc} />
        <DropDown />
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input size="mini" focus placeholder="Search..." />
          <Im src={avatarImg} avatar style={{ marginLeft: "10rem" }} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
