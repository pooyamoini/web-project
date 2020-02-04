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
import { editProfileAPI } from "../../api/account-action/";
import FileIcon from "@material-ui/icons/InsertDriveFile";

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
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "edit profile",
      value: this.props.data["gender"],
      name: "",
      username: "",
      profile: "",
      bio: "",
      email: "",
      phone_number: "",
      country: "",
      password: "",
      newPassword: "",
      confirmNewPassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.setStates = this.setStates.bind(this);
    this.handleGender = this.handleGender.bind(this);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeSection: name });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setStates();
    }, 1000);
  }

  setStates() {
    const { data } = this.props;
    const {
      name,
      username,
      profile,
      bio,
      email,
      phone_number,
      country,
      password
    } = data;
    this.setState({
      name,
      username,
      profile,
      bio,
      email,
      phone_number,
      country,
      password
    });
  }

  handleGender(e) {
    const value = e.target.textContent;
    this.setState({ gender: value });
  }

  handleChange = (e, { value }) => this.setState({ value });

  handleChangeInput = name => {
    function action(e) {
      this.setState({ [name]: e.target.value });
    }
    return action.bind(this);
  };

  handelChangePhoto = e => {
    this.setState({
      profile: "../static/Images/profiles/" + e.target.files.item(0).name
    });
  };

  async handleSubmit() {
    try {
      let data = this.state;
      data["token"] = localStorage.getItem("token");
      const res = await editProfileAPI(data);
      window.location.reload();
    } catch (e) {
      alert("some thing wrong happen:(");
      console.log(e);
    }
  }

  getFormRow(name, type = "text") {
    return (
      <Form.Field
        style={{
          marginTop: "2rem",
          width: "100% !important;"
        }}
      >
        <Label
          style={{
            color: "white",
            fontSize: "18px"
          }}
        >
          {labels[name]}
        </Label>
        <Input
          style={{ width: "70%" }}
          type={type}
          defaultValue={this.props.data[name]}
          onChange={this.handleChangeInput(name)}
        ></Input>
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
          onChange={this.handleGender}
        />
      </Form.Field>
    );
  }

  getProfileRow() {
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
          Profile Photo
        </Label>
        <Button
          fluid
          size="small"
          as="label"
          htmlFor="file"
          type="button"
          animated="fade"
          style={{
            width: "70%"
          }}
        >
          <Button.Content visible>
            <FileIcon fontSize="large" />
          </Button.Content>
          <Button.Content hidden>Choose a File</Button.Content>
        </Button>
        <input type="file" id="file" hidden onChange={this.handelChangePhoto} />
      </Form.Field>
    );
  }

  getEditProfileForm() {
    return (
      <Form
        style={{
          margin: "1rem 3rem",
          width: "100%",
          display: this.state.activeSection == "edit profile" ? "block" : "none"
        }}
      >
        {this.getFormRow("name")}
        {this.getFormRow("userName")}
        {this.getGenderRow()}
        {this.getProfileRow()}
        {this.getFormRow("bio")}
        {this.getFormRow("email")}
        {this.getFormRow("phoneNumber")}
        {this.getFormRow("country")}
        <Button
          type="submit"
          color="blue"
          style={{
            marginTop: "1rem"
          }}
          onClick={this.handleSubmit}
        >
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
        <Button
          type="submit"
          color="blue"
          style={{
            marginTop: "1rem"
          }}
          onClick={this.handleSubmit}
        >
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
            margin: "1rem"
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
