import styled from "styled-components";
import React, { Component } from "react";
import {
  Menu as M,
  Image as Im,
  Input as In,
  Dropdown as Drp,
  Segment
} from "semantic-ui-react";
import TagOptions from "../../public/json-files/nav-bar/navbar-tags.json";
import Theme from "../../public/Theme";

const imgSrc = "/Images/global/logo1.png";
const avatarImg = "/Images/global/avatar.jpg";
const notifImg = "/bell.png";

const Menu = styled(M)`
  position: fixed !important;
  border-bottom: ${props =>
    props.transparent ? "0" : "1px solid "} !important;
  background: #fff !important;
  z-index: 10000000000000 !important;
  width: 100%;
  top: 0 !important;
  background-color: ${Theme.navbar.backgroundColor} !important;
`;

const Image = styled(Im)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 13rem;
`;

const Input = styled(In)`
  min-width: 30rem;
  background-color: ${Theme.navbar.menuColor} !important;
  color: ${Theme.navbar.textColor} !important;
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
        left: "18rem",
        textAlign: "center",
        "background-color": Theme.navbar.menuColor,
        color: Theme.navbar.textColor
      }}
    >
      <Drp.Menu
        style={{
          "background-color": Theme.navbar.menuColor,
          color: Theme.navbar.textColor
        }}
      >
        <Drp.Header
          content="categories"
          style={{
            "background-color": Theme.navbar.menuColor,
            color: Theme.navbar.textColor
          }}
        />
        <Drp.Menu
          scrolling
          style={{
            "background-color": Theme.navbar.menuColor,
            color: Theme.navbar.textColor
          }}
        >
          {TagOptions.map(option => (
            <Drp.Item
              key={option.value}
              {...option}
              style={{
                color: Theme.navbar.textColor
              }}
            />
          ))}
        </Drp.Menu>
      </Drp.Menu>
    </Drp>
  );
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { notifOpacity: "0.7", offset: 0, visibility: "visible" };
    this.hoverNotifEnter = this.hoverNotifEnter.bind(this);
    this.hoverNotifExit = this.hoverNotifExit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const offsetNow = window.pageYOffset;
    const { offset } = this.state;
    if (offsetNow > offset && offsetNow >= window.innerHeight) {
      this.setState({ offset: offsetNow, visibility: "hidden" });
      return;
    }
    this.setState({ visibility: "visible", offset: offsetNow });
  }

  hoverNotifEnter() {
    this.setState({ notifOpacity: "1" });
  }

  hoverNotifExit() {
    this.setState({ notifOpacity: "0.7" });
  }

  render() {
    const { transparent } = this.props;
    const { notifOpacity } = this.state;
    const { visibility } = this.state;
    return (
      <Segment basic>
        <Menu
          size="massive"
          transparent={transparent}
          secondary
          className="large-navbar"
          style={{ visibility }}
        >
          <Menu.Menu position="left">
            <Image avatar src={imgSrc} />
            <DropDown />
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input size="mini" placeholder="Search..." />
              <Im
                src={notifImg}
                size="mini"
                style={{ marginLeft: "2rem", opacity: notifOpacity }}
                className="notifications"
                onMouseEnter={this.hoverNotifEnter}
                onMouseOut={this.hoverNotifExit}
              />
              <Im
                src={avatarImg}
                avatar
                style={{ marginLeft: "2rem", marginRight: "10rem" }}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default NavBar;
