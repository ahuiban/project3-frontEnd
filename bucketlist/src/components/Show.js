import React from "react";

class Show extends React.Component {
  state = {
    display: this.props.display,
    items: [],
    item: {}
  }

  getItems = () => {
    fetch(baseURL+ '/bucketlists')
      .then(data => {
        return data.json()},
        err => console.log(err))
      .then(parsedData => this.setState({
        items: parsedData
      }),
       err=> console.log(err))
  }
   
  closeModal = () => {
    console.log("SHOW --> closeModal")
      this.setState({
        display: false
      })
      setTimeout(
        function() {
            console.log(this.state.display)
        }
        .bind(this),
        1000
    )
  }

  render() {
    if(!this.state.display){
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
                onClick={() => {this.closeModal()}}
              >
                CLOSE
              </div>
            </div>
          </div>
        <h1>Show Page</h1>
        <img className="imgShow" src="/bucketLogo.png"></img>
        {/* FEEL FREE TO DELETE - image is BIG so it will look good in any size, you can resize as you want! */}
        {/* SET to 75% */}
        <div className="listDiv">
          <div className="listItemsShow">SHOW stuff</div>
        </div>
        </div>
      </div>
    )}
  }
}

export default Show;
