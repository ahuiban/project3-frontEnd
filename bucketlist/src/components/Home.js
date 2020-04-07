import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <img className="imgHome" src="/bucketLogo.png"></img>
        <div className="listDiv">
          <div className="listItemsHome">
            <div>
              <Link to="/index" style={{ textDecoration: "none" }}>
                <a href="#" className="home-button">
                  Your BucketLists
                </a>
              </Link>

              <Link to="/search" style={{ textDecoration: "none" }}>
                <a href="#" className="home-button">
                  Search Activities
                </a>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
