import React from "react";

class Show extends React.Component {
  state = {
    display: this.props.display,
    items: [],
    item: {}
  };

  closeModal = () => {
    console.log("SHOW --> closeModal");
    this.setState({
      display: false
    });
    setTimeout(
      function() {
        console.log(this.state.display);
      }.bind(this),
      1000
    );
  };

  render() {
    if (!this.state.display) {
      return null;
    } else {
      return (
        <div>
          <h1></h1>
          <div className="listDiv">
            <div className="listItemsShow">
              <div>
                {this.props.item ? this.props.item.listName : null}
                <div>{this.props.item ? this.props.item.ownerID : null}</div>
                <div>{this.props.item ? this.props.item.items : null}</div>
                <div
                  className="closeTab"
                  onClick={() => {
                    this.closeModal();
                  }}
                >
                  CLOSE
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Show;
