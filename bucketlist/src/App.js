import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

let baseURL = "http://localhost:3003";

fetch(baseURL + "/bucketlists")
  .then(
    data => {
      return data.json();
    },
    err => console.log(err)
  )
  .then(
    parsedData => console.log(parsedData),
    err => console.log(err)
  );

class RenderRoutes extends React.Component {
  render() {
    return (
      <div>
        <Route path="/signup/" exact component={SignUp} />
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    currentUser: "",
  };
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signup/">Sign Up</Link>
            {/* <Link to="/login">Log In</Link> */}
            {/* Link to Index goes here, link only works if signed in else login page*/}
            {/* Link to Show page, link only works if signed in else login page */}
            {/* Link to Create page */}
          </nav>
          <div className="body">
            {this.state.currentUser ? <h1>Logged In</h1> : null}
          </div>
        </div>
        <RenderRoutes />
      </Router>
    );
  }
}
export default App;
