import React, { Component } from "react";
import {
  Menu,
  Segment,
  Grid,
  Form,
  Input as In,
  Button,
  GridColumn,
  Select
} from "semantic-ui-react";
import styled from "styled-components";

const Label = styled.label`
  color: white !important;
  font-size: 20px !important;
`;

const Input = styled(In)`
  width: 50% !important;
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
      <Grid.Row columns={2}>
        <Grid.Column textAlign="right" width={4}>
          <Label>{labels[name]}</Label>
        </Grid.Column>
        <Grid.Column textAlign="left" width={12}>
          <Input type={type} defaultValue={this.props.data[name]}></Input>
        </Grid.Column>
      </Grid.Row>
    );
  }

  getGenderRow() {
    return (
      <Grid.Row columns={2}>
        <Grid.Column textAlign="right" width={4}>
          <Label>Gender</Label>
        </Grid.Column>
        <Grid.Column textAlign="left" width={12}>
          <Select style={{
            width: '50%'
          }} options={genderOptions} defaultValue={this.props.data.gender} />
        </Grid.Column>
      </Grid.Row>
    );
  }

  getEditProfileForm() {
    return (
      // <Form
      //   style={{
      //     margin: "1rem 6rem",
      //     width: '50%',
      //     visibility:
      // this.state.activeSection == "edit profile" ? "visible" : "hidden"
      //   }}
      // fluid
      // >
      <Grid
        style={{
          display: this.state.activeSection == "edit profile" ? "block" : "none"
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
        <Grid.Row columns={2}>
          <GridColumn width={4}></GridColumn>
          <GridColumn textAlign="left">
            <Button type="submit" color="blue">
              Submit
            </Button>
          </GridColumn>
        </Grid.Row>
      </Grid>
      /* <Form.Field inline>
          <Label
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "2rem",
              marginLeft: "20.5%"
            }}
          >
            Name
          </Label>
          <Input defaultValue={this.props.data.name}></Input>
        </Form.Field>

        <Form.Field inline>
          <Label
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "2rem",
              marginLeft: "10.5%"
            }}
          >
            Username
          </Label>
          <Input defaultValue={this.props.data.userName}></Input>
        </Form.Field>

        <Form.Field inline>
          <Label
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "2rem",
              marginLeft: "2%"
            }}
          >
            Progile Photo
          </Label>
          <Input></Input>
        </Form.Field>

        <Form.Field inline>
          <Label
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "2rem",
              marginLeft: "27%"
            }}
          >
            Bio
          </Label>
          <Input defaultValue={this.props.data.bio}></Input>
        </Form.Field>

        <Form.Field inline>
          <Label
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "2rem",
              marginLeft: "22%"
            }}
          >
            Email
          </Label>
          <Input defaultValue={this.props.data.email}></Input>
        </Form.Field>

        <Form.Field inline>
          <Label
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "2rem",
              marginLeft: "-1%"
            }}
          >
            Phone Number
          </Label>
          <Input defaultValue={this.props.data.phoneNumber}></Input>
        </Form.Field>

        <Form.Field inline>
          <Label
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "2rem",
              marginLeft: "16%"
            }}
          >
            Country
          </Label>
          <Input defaultValue={this.props.data.country}></Input>
        </Form.Field>
        <Button type="submit" color="blue">
          Submit
        </Button> */
      // </Form>
    );
  }

  getChangePasswordForm() {
    return (
      <Grid
        style={{
          display:
            this.state.activeSection == "change password" ? "block" : "none"
        }}
      >
        {this.getFormRow("password", "password")}
        {this.getFormRow("newPassword", "password")}
        {this.getFormRow("confirmNewPassword", "password")}
        <Grid.Row columns={2}>
          <GridColumn width={4}></GridColumn>
          <GridColumn>
            <Button type="submit" color="blue">
              Change Password
            </Button>
          </GridColumn>
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    const { activeSection } = this.state;

    return (
      <Grid
        style={{
          margin: "10% auto",
          padding: "10px",
          width: "90%",
          backgroundColor: "rgb(22, 27, 44)",
          borderRadius: "10px"
        }}
      >
        <Grid.Column width={4}>
          <Menu fluid vertical tabular inverted>
            <Menu.Item
              name="edit profile"
              active={activeSection === "edit profile"}
              onClick={this.handleItemClick}
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "18px"
              }}
            />
            <Menu.Item
              name="change password"
              active={activeSection === "change password"}
              onClick={this.handleItemClick}
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "18px"
              }}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column
          width={12}
          textAlign="left"
          style={{
            marginTop: "2rem"
          }}
        >
          {this.getEditProfileForm()}
          {this.getChangePasswordForm()}
        </Grid.Column>
      </Grid>
    );
  }
}
