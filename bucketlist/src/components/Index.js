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

{/* Show bucket lists created by the user */}
class Index extends React.Component {
  state = {
    items: []
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
        <h1>Index Page</h1>
        <img className="imgIndex" width="50%" src="/bucketLogo.png"></img> 
            {/* FEEL FREE TO DELETE - image is BIG so it will look good in any size, you can resize as you want! */}
            {/* SET to 75% */}
        <div className="indexPageContent">
          { this.state.items.map(item =>
                <div key={item._id} className="listDiv">
                  <p>{item.listName}</p>
                  <p>{item.ownerID}</p>
                </div>
            )
          }
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.getItems()
  }

}

export default Index;
