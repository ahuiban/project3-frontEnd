import React from "react";

class Show extends React.Component {
 
  render() {
    return (
      <div>
        <h1></h1>
        <div className="listDiv">
          <div className="listItemsShow">
            <div>{this.props.item ? this.props.item.listName : null}
              <div>
                {this.props.item ? this.props.item.ownerID : null}
              </div>
              <div>
                {this.props.item ? this.props.item.items : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Show;
