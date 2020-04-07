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
              <Link to="/new">
                <a href="#" className="home-button">
                  Create BucketList
                </a>
              </Link>
              <Link to="/index">
                <a href="#" className="home-button">
                  See BucketLists
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
