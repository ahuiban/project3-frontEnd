import React from "react";
let baseURL = 'http://localhost:3003'

// will need to add "/index" INDEX route on server.js back-end

console.log('current base URL:', baseURL)

fetch(baseURL+ '/')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))

class Show extends React.Component {
  
  state = {
    items: [],
    item: {}
  }

  getItems = () => {
    fetch(baseURL+ '/')
      .then(data => {
        return data.json()},
        err => console.log(err))
      .then(parsedData => this.setState({
        items: parsedData
      }),
       err=> console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Show Page</h1>
        <img className="imgShow" src="/bucketLogo.png"></img> 
            {/* FEEL FREE TO DELETE - image is BIG so it will look good in any size, you can resize as you want! */}
            {/* SET to 75% */}
        <div className="listDiv">
          <div className="listItemsShow">
            SHOW stuff
          </div>
        </div>
      </div>
    )
  }
}

export default Show;
