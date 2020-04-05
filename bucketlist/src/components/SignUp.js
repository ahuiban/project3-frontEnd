import React from "react";
let baseURL = process.env.REACT_APP_BASE_URL

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    registrationErrors: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    console.log("Form submitted");
    event.preventDefault();
    fetch(baseURL + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }).then((err, createAccount) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Created");
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />{" "}
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
