import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <img className="imgHome" src="/bucketLogo.png"></img> 
            {/* FEEL FREE TO DELETE - image is BIG so it will look good in any size, you can resize as you want! */}
            {/* SET to 75% */}
        <div className="listDiv">
          <div className="listItemsHome">
            HOME stuff
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
