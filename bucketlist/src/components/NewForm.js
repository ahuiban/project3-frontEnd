import React from "react";
import { Link } from "react-router-dom";
let baseURL = process.env.REACT_APP_BASE_URL;

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
  };
  render() {
    return (
      <div id="newBucketList">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="newBucketInput"
            name="listName"
            // value={this.state.listname}
            onChange={this.handleChange}
            maxLength="41"
            placeholder="(ex. Places I Want to Travel)"
            autoFocus
          />
          <input 
            type="submit"
            id="newBucketSubmit"
            value="CREATE a BUCKETLIST" />
        </form>
      </div>
    );
  }
}

export default NewForm;
