import React from "react";
import { Link } from "react-router-dom";
let baseURL = process.env.REACT_APP_BASE_URL

class NewForm extends React.Component {
  state = {
    listName: "",
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = event => {
    console.log("form submitted");
    fetch(baseURL + "/bucketlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listName: this.state.listName,
      }),
    }).then(res => {
      console.log("res from from", res);
    });
    this.props.history.push("/index");
  };
  render() {
    return (
      <div>
        <h1>New BucketList</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="listName"
            value={this.state.listname}
            onChange={this.handleChange}
          />
          <input type="submit" value="Create BucketList" />
        </form>
      </div>
    );
  }
}

export default NewForm;
