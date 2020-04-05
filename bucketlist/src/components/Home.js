import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <img className="imgHome" src="/bucketLogo.png"></img>
        <div className="listDiv">
          <div className="listItemsHome">
            <div>
                <Link to="/new">
                  <button>Create BucketList</button>
                </Link>
            </div>
            <div>
                <Link to="/index">
                  <button>See BucketLists</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
