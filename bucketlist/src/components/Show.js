import React from "react";
// import './modal.css'



class Show extends React.Component {
  state = {
    item: {}
  };

  onCloseRequest = e => {
    this.props.onCloseRequest && this.props.onCloseRequest(e);
  };

  render() {

    if(!this.props.display){
      return null;
    } else {
      return (
          <div className="modal">
            <div className="listItemsShow">
              <div className="containerShow"> {/* top row */}
                  <div className="ownerName">
                    {this.props.item.ownerID}
                  </div>
                  <div 
                    className="editList"
                    onClick={e => {
                      this.onCloseRequest(this.props.item)
                      this.props.toggleEditClick(true)
                    }}>
                    EDIT
                  </div>
              </div>
                  <h3 className="showTitle">{this.props.item ? this.props.item.listName : null}</h3>
              <div className="showListItem">
                {this.props.item ? this.props.item.items : null}
              </div>
              <div className="showListItem">
                {this.props.item ? this.props.item.items : null}
              </div>
              <div className="showListItem">
                {this.props.item ? this.props.item.items : null}
              </div>
              <div className="showListItem">
                {this.props.item ? this.props.item.items : null}
              </div>
              <div 
                className="closeTab"
                
                onClick={e => {
                  this.onCloseRequest(e);
                }}
              >
                CLOSE
              </div>
            </div>
          </div>
      );
    }
  }

}

export default Show;
