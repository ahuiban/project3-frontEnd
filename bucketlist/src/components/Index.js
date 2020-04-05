import React from "react";
import Show from "../components/Show";
import NewForm from "./NewForm";

let baseURL = 'http://localhost:3003'

console.log("current base URL:", baseURL);

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

class Index extends React.Component {
  state = {
    currentUser:this.props.currentUser,
    display: false,
    items: [],
    item: ""
  }

  getItem = item => {
    this.setState({ item: item });
    console.log(item);
  }

  getItems = () => {
    fetch(baseURL + "/bucketlists")
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        parsedData =>
          this.setState({

            items: parsedData

          }),
        err => console.log(err)
      );
  };

  toggleModal = item => {
    console.log("INDEX --> toggleModal")
    console.log("BEFORE click, display is: ",this.state.display)
    this.getItem(item)
    this.setState({
      display: !this.state.display
    });
    setTimeout(
      function() {console.log("AFTER click, display is: ",this.state.display)}
      .bind(this),
      250
    )
  }

  render() {

    return (
      <div>
        <h1>Index (Lists) Page</h1>
        <img className="imgIndex" src="/bucketLogo.png"></img>
        <div className="listDiv">
          { this.state.items.map(item =>
                <div
                  key={item._id}
                  className="listItemsIndex"
                  onClick={e => {this.toggleModal(item)}}
                >
                  <div>{item.listName}</div>
                </div>
            )
          }
        </div>
          <Show 
            onCloseRequest={this.toggleModal}
            display={this.state.display}
            item={this.state.item}
          />
          {this.props.currentUser ? <h1>Logged In</h1> : null}
      </div>
    );
  }

  componentDidMount() {
    this.getItems();
  }
}

export default Index;
