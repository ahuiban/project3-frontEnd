import React from "react";

class Show extends React.Component {
  state = {
    display: this.props.display,
    items: [],
    item: {}
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if(!this.props.display){
      return null;
    } else {
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
              <div 
                className="closeTab"
                onClick={e => {
                  this.onClose(e);
                }}
              >
                CLOSE
              </div>
            </div>
          </div>
      </div>
      </div>
    )}
  }
}

export default Show;
