import React, { Component } from "react";
import {
  Menu,
  Segment,
  Grid,
  Form,
  Input as In,
  Button,
  GridColumn,
  Select,
  Container
} from "semantic-ui-react";
import styled from "styled-components";

const Label = styled.label`
  color: white !important;
  font-size: 18px !important;
`;

const Input = styled(In)`
  // width: 100% !important;
`;

const labels = {
  name: "Name",
  userName: "User Name",
  image: "Profile Photo",
  bio: "Bio",
  email: "Email",
  phoneNumber: "Phone Number",
  country: "Country",
  password: "Old Password",
  newPassword: "New Password",
  confirmNewPassword: "Confirm New Password"
};

const genderOptions = [
  { key: "male", text: "Male", value: "male" },
  { key: "female", text: "Female", value: "female" },
  { key: "other", text: "Other", value: "other" }
];

export default class EditProfile extends Component {
  state = { activeSection: "edit profile", value: this.props.data.gender };

  handleItemClick = (e, { name }) => {
    this.setState({ activeSection: name });
  };

  handleChange = (e, { value }) => this.setState({ value });

  getFormRow(name, type = "text") {
    return (
      <Form.Field
        style={{
          marginTop: "2rem",
          width: '100% !important;'
        }}>
        <Label
          style={{
            color: "white",
            fontSize: "18px"
          }}
        >
          {labels[name]}
        </Label>
        <Input style={{width: '70%'}} type={type} defaultValue={this.props.data[name]}></Input>
      </Form.Field>
    );
  }

  getGenderRow() {
    return (
      <Form.Field
        style={{
          marginTop: "2rem"
        }}
      >
        <Label
          style={{
            color: "white",
            fontSize: "18px"
          }}
        >
          Gender
        </Label>
        <Select
          style={{
            width: "70%"
          }}
          options={genderOptions}
          defaultValue={this.props.data.gender}
        />
      </Form.Field>
    );
  }

  getEditProfileForm() {
    return (
      <Form
        style={{
          margin: "1rem 3rem",
          width: "100%",
          display:
            this.state.activeSection == "edit profile" ? "block" : "none"
        }}
      >
        {this.getFormRow("name")}
        {this.getFormRow("userName")}
        {this.getGenderRow()}
        {this.getFormRow("image")}
        {this.getFormRow("bio")}
        {this.getFormRow("email")}
        {this.getFormRow("phoneNumber")}
        {this.getFormRow("country")}
        <Button type="submit" color="blue" style={{
          marginTop: '1rem'
        }}>
          Submit
        </Button>
      </Form>
    );
  }

  getChangePasswordForm() {
    return (
      <Form
        style={{
          margin: "1rem 3rem",
          width: "100%",
          display:
            this.state.activeSection == "change password" ? "block" : "none"
        }}
      >
        {this.getFormRow("password", "password")}
        {this.getFormRow("newPassword", "password")}
        {this.getFormRow("confirmNewPassword", "password")}
        <Button type="submit" color="blue" style={{
          marginTop: '1rem'
        }}>
          Change Password
        </Button>
      </Form>
    );
  }

  render() {
    const { activeSection } = this.state;

    return (
      <Container> 
        <Menu
          inverted
          borderless
          pointing
          secondary
          compact
          widths={2}
          size="massive"
          style={{
            margin:"1rem"
          }}
        >
          <Menu.Item
            name="edit profile"
            active={activeSection === "edit profile"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="change password"
            active={activeSection === "change password"}
            onClick={this.handleItemClick}
          />
        </Menu>
        {this.getEditProfileForm()}
        {this.getChangePasswordForm()}
      </Container>
    );
  }
}
