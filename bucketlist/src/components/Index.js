import React from "react";

let baseURL = process.env.REACT_APP_BASEURL

// will need to add "/index" INDEX route on server.js back-end

console.log('current base URL:', baseURL)

fetch(baseURL+ '/bucketlists')
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
  render() {
    return (
      <div>
        <h1>Index Page</h1>
        <img className="imgIndex" width="50%" src="/bucketLogo.png"></img> 
            {/* FEEL FREE TO DELETE - image is BIG so it will look good in any size, you can resize as you want! */}
            {/* SET to 75% */}
        <div className="indexPageContent">
          INDEX stuff
        </div>
      </div>
    )
  }
}

export default Index;
