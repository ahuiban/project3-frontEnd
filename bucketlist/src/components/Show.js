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
                  
                  {/* Owner Name in top left corner */}
                  <div className="ownerName">
                    {this.props.item.ownerID}
                  </div>

                  {/* EDIT in top right corner */}
                  <div 
                    className="editList"
                    onClick={e => {
                      this.onCloseRequest(this.props.item)
                      this.props.toggleEditClick(true)
                    }}>
                    EDIT
                  </div>

                  {/* TITLE and ITEMS descending in this order: */}
                  </div>
                      <h3 className="showTitle">{this.props.item ? this.props.item.listName : null}</h3>

                  {/* Map through items to show each item on its own div */}
                    {this.props.item 
                      ? this.props.item.items.map(item =>
                          <div className="showListItem">
                            {item}
                          </div>
                      )
                      : null}
                

                  {/* CLOSE at bottom */}
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
