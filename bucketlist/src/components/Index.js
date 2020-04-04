import React from "react";
let baseURL = "http://localhost:3003";

// will need to add "/index" INDEX route on server.js back-end

console.log("current base URL:", baseURL);

<<<<<<< HEAD
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
=======
fetch(baseURL+ '/bucketlists')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))
>>>>>>> 0bb57d80b45d989bce0789b1d9ae5ed4ce5973dc

{
  /* Show bucket lists created by the user */
}
class Index extends React.Component {
  state = {
    items: []
  };

  getItems = () => {
<<<<<<< HEAD
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
=======
    fetch(baseURL+ '/bucketlists')
      .then(data => {
        return data.json()},
        err => console.log(err))
      .then(parsedData => this.setState({
        items: parsedData
      }),
       err=> console.log(err))
  }
>>>>>>> 0bb57d80b45d989bce0789b1d9ae5ed4ce5973dc

  render() {
    return (
      <div>
        <h1>Index (Lists) Page</h1>
        <img className="imgIndex" src="/bucketLogo.png"></img>
        {/* FEEL FREE TO DELETE - image is BIG so it will look good in any size, you can resize as you want! */}
        {/* SET to 75% */}
        <div className="listDiv">
          {this.state.items.map(item => (
            <div key={item._id} className="listItemsIndex">
              <div>{item.listName}</div>
              <div>{item.ownerID}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getItems();
  }
}

export default Index;
