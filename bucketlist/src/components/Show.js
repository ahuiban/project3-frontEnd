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
      console.log("itemsList Data: ")
      if (this.props.itemListsData.length > 0) {
        console.log(this.props.itemListsData[0].itemName)
      }
      return (
          <div className="modal">
            <div className="listItemsShow">
              <div 
                className="editList"
                onClick={e => {
                  this.onCloseRequest(this.props.item)
                  this.props.toggleEditClick(true)
                  
                }}>
                edit
              </div>
              <h3>{this.props.item ? this.props.item.listName : null}</h3>
              <div>
                {this.props.item ? this.props.item.ownerID : null}
              </div>
              <div>
                {this.props.item ? this.props.item.listName : null}
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

  componentDidMount() {
  window.addEventListener('keyup', this.handleKeyUp, false);
  document.addEventListener('click', this.handleOutsideClick, false);
}

componentWillUnmount() {
  window.removeEventListener('keyup', this.handleKeyUp, false);
  document.removeEventListener('click', this.handleOutsideClick, false);
}

}

export default Show;
