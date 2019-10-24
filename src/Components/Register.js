import React, { Component } from "react";
import axios from "axios";
import { updateUser } from "../redux/reducer";
import { connect } from "react-redux";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = () => {
    axios
      .post("/auth/register", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/account");
        this.setState({ email: "", password: "" });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Register here</h1>
        <input
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={e => this.handleInput(e)}
        />

        <input
          placeholder="password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={e => this.handleInput(e)}
        />
        <button
          onClick={() => {
            this.handleRegister();
          }}
        >
          Register
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateUser
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
