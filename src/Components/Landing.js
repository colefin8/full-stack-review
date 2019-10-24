import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../redux/reducer";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {}

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    // const user = {
    //   email: this.state.email,
    //   password: this.state.password
    // };
    axios
      .post("/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/account");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Login Here</h1>
        <input
          name="email"
          value={this.state.email}
          onChange={e => this.handleInput(e)}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={e => this.handleInput(e)}
        />
        <button onClick={this.handleLogin}>Login</button>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    user
  };
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
