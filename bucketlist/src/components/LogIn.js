import React from "react";
let baseURL = "http://localhost:3003";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    console.log("Form submitted");
    event.preventDefault();
    fetch(baseURL + "/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }).then((err, currentUser) => {
      if (err) {
        console.log(err);
      } else {
        console.log(currentUser);
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
