import React from "react";
let baseURL = process.env.REACT_APP_BASE_URL

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
    }).then( res => res.json())
    .then(resJson => {
        console.log(resJson.username)
        //if username is returned than do this:
        if (resJson.username) {
          this.props.handleSuccessfulAuth(resJson.username)
        } else {
          console.log(resJson)
        }
    }).catch (error => console.error({'Login Error': error}))
  }

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
