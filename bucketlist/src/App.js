import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Index from "./components/Index";
import SignUp from "./components/SignUp";
import Show from "./components/Show";
import Login from "./components/LogIn";
import NewForm from "./components/NewForm.js";
import Search from "./components/Search";

let baseURL = process.env.REACT_APP_BASE_URL;

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
  handleAddBucketlist = listhandleAddBucketlist => {
    const copylisthandleAddBucketlists = [
      ...this.state.listhandleAddBucketlists,
    ];
    copylisthandleAddBucketlists.unshift(listhandleAddBucketlist);
    this.setState({
      listhandleAddBucketlists: copylisthandleAddBucketlists,
      name: "",
    });
  };

  render() {
    return (
      <div>
        <Route path="/signup/" exact component={SignUp} />
        <Route path="/" exact component={Home} />
        <Route path="/index" exact component={Index} />
        <Route path="/show" exact component={Show} />
        <Route
          path="/login"
          render={routeProps => (
            <Login
              {...routeProps}
              handleSuccessfulAuth={this.props.handleSuccessfulAuth}
            />
          )}
        />
        <Route path="/search" exact component={Search} />
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    currentUser: "",
  };

  getBucketlist = () => {
    fetch(baseURL + "/bucketlists")
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        parsedData => this.setState({ bucketlist: parsedData }),
        err => console.log(err)
      );
  };

  handleAddBucketlist = bucketlist => {
    const copyBucketlists = [...this.state.bucketlists];
    copyBucketlists.unshift(bucketlist);
    this.setState({
      bucketlists: copyBucketlists,
      name: "",
    });
  };

  handleSuccessfulAuth = loggedInUser => {
    this.setState({
      currentUser: loggedInUser,
    });
  };

  handleLogout = loggedOut => {
    loggedOut = "";
    this.setState({
      currentUser: loggedOut,
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <Link to="/" className={"nav-item"}>
              Home
            </Link>

            <Link to="/index" className={"nav-item"}>
              Lists
            </Link>

            <Link to="/search" className={"nav-item"}>
              Search
            </Link>

            {!this.state.currentUser ? (
              <Link to="/signup/" className={"nav-item"}>
                Sign Up
              </Link>
            ) : null}

            {this.state.currentUser ? (
              <a
                href="#"
                className={"nav-item"}
                onClick={() => this.handleLogout()}
              >
                {" "}
                Logout{" "}
              </a>
            ) : (
              <Link to="/login" className={"nav-item"}>
                Log In
              </Link>
            )}
          </nav>
          <div className="body"></div>
        </div>
        <RenderRoutes handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </Router>
    );
  }
}

export default App;
