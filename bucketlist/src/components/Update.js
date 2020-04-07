import React from "react";
// import './modal.css'

let baseURL = process.env.REACT_APP_BASE_URL

class Update extends React.Component {
  state = {
    item: {},
    listName: "",
    listItems: [] 

  };

  resetState = () =>{
    this.setState({
      listName: this.props.item.listName,
      listItems: this.props.item.items
    })
  }

  handleChange = (event)=>{

    //formats data into array if necessary
    if ([event.target.name] == "listItems" && event.target.value.includes(",")) { 
      console.log(this.state.listItems)
      this.setState({
        [event.target.name]: event.target.value.split(",")
      })
    } else {
    //otherwise updates state regularaly
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log("handle change", event)
  }
}

  handleSubmit = (event) =>{
    console.log("form submitted")
    event.preventDefault();
    let fetchURL = baseURL + '/bucketLists/' +this.props.item._id
    fetch(fetchURL, 
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          listName:  this.state.listName,
          items: this.state.listItems
        })
    }).then( res => res.json())
    .then(resJson => {
      //add received data to state if needed
      console.log(resJson)
      this.props.getItems()
      //turn off edit model
      this.props.toggleEditClick(false)
    }).catch (error => console.error({'Error': error}))
  }

  onCloseRequest = e => {
    this.props.onCloseRequest && this.props.onCloseRequest(e);
  };

  render() {

    if(!this.props.display){
      return null;
    } else {
      return (
          <div className="modal edit">
            <div className="listItemsShow listItemsEdit">
              <div 
                className="cancelUpdate"
                onClick={() => this.props.toggleEditClick(false)}
              >
                CANCEL
              </div>
              <form onSubmit={this.handleSubmit}>
                
                <div className="formfields">
                  <div>
                    <label htmlFor="listName">List Name</label>
                    <input 
                      onChange={this.handleChange}
                      type="text"
                      name="listName"
                      value ={this.state.listName}
                    />
                  </div>
                  <div>
                    <label htmlFor="List Items">List Items</label>
                      <input 
                        onChange={this.handleChange}
                        type="text"
                        name="listItems"
                        value ={this.state.listItems}
                      />
                  </div>
                </div>

                <div className="editList">
                  <input type="submit" value="SAVE CHANGES" />
                </div>
              </form>
            </div>
          </div>
      );
    }
  }

  componentDidMount() {
  //populates form with current values:
  this.resetState()
}

}

export default Update;
