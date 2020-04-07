import React from "react";
// import './modal.css'

let baseURL = process.env.REACT_APP_BASE_URL

class Update extends React.Component {
  state = {
    item: {},
    listName: "",
    listItems: [], 
    addingNewListItem: false,
    itemName: "",
    itemDescription: "",
    itemCategory: "",
    itemImageURL: "",
  };

  resetState = () =>{
    this.setState({
      listName: this.props.item.listName,
      listItems: this.props.item.items
    })
  }

  handleChange = (event) => {
      /*
      //formats data into array if necessary
      if ([event.target.name] == "listItems" && event.target.value.includes(",")) { 
        console.log(this.state.listItems)
        this.setState({
          [event.target.name]: event.target.value.split(",")
        })
      } else {
      //otherwise updates state regularaly
      */
      this.setState({
        [event.target.name]: event.target.value
      })
      console.log("handle change", event)
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

  addNewListItem = () => {
    this.setState({
      addingNewListItem: !this.state.addingNewListItem
    })
  }


  createNewItem = (event) => {
    event.preventDefault()
    let fetchURL = baseURL + '/listitems'
    console.log("about to post item", fetchURL)
    fetch(fetchURL, 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          itemName: this.state.itemName,
          itemDescription: this.state.itemDescription,
          itemCategory: this.state.itemCategory,
          itemImageURL: this.state.itemImageURL
        })
    }).then( res => res.json())
    .then(resJson => {
      //add item id to buckelist to associate the two
      console.log("2nd fetch",this.props.item._id)
      if (this.props.item._id){
          let fetchURL = baseURL + '/bucketLists/pushItem/' +this.props.item._id
          console.log("second fetech")
           fetch(fetchURL, 
              {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  listItemID: resJson._id
                })
              }).then (response => response.json())
              .then(responseJson =>{
                console.log(responseJson)
              })
      }
      console.log(resJson)
      //reset state
      this.setState({
        addingNewListItem: false,
        itemName: "",
        itemDescription: "",
        itemCategory: "",
        itemImageURL: "",
      })
      this.props.getItems()
    }).catch (error => console.error({'Error': error}))
  }

  render() {

    if(!this.props.display){
      return null;
    } else {
      return (
          <div className="modal edit">
            <div className="listItemsShow listItemsEdit">
              <form onSubmit={this.handleSubmit}>
                <div className="editList">
                  <input type="submit" value="SAVE CHANGES" />
                </div>
                <div>
                  <br></br>
                  <br></br>
                </div>
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
              </form>
              <div >
                {this.state.addingNewListItem
                ? null
                : <button onClick={this.addNewListItem}>add new item</button>
              }
              </div>
              <div>
                {/*display if ready to add a new list item*/}
                {this.state.addingNewListItem
                  ? 
                  <>
                    <div className="newItemList">
                      <form onSubmit={this.createNewItem}>
                        <div>
                          <label>Item name</label>
                          <input 
                            onChange={this.handleChange}
                            type="text"
                            name="itemName"
                          />
                        </div>
                        <div>
                          <label>Item Description</label>
                          <input
                            onChange={this.handleChange}
                            type="text"
                            name="itemDescription"
                          />
                        </div>
                        <div>
                          <label>Item Category</label>
                          <input
                            onChange={this.handleChange}
                            type="text"
                            name="itemCategory"
                          />
                        </div>
                        <div>
                          <label>Item Image URL</label>
                          <input 
                            onChange={this.handleChange}
                            type="text"
                            name="itemImageURL"
                          />
                        </div>
                        <button type="submit">CREATE NEW ITEM</button>
                      </form>
                    </div>
                  </>
                  : null
                }
              </div>

              <div 
                className="closeTab"
                
                onClick={() => this.props.toggleEditClick(false)}
                
              >
                CANCEL
              </div>
            </div>
          </div>
      );
    }
  }

  componentDidMount() {
  window.addEventListener('keyup', this.handleKeyUp, false);
  document.addEventListener('click', this.handleOutsideClick, false);
  //populates form with current values:
  this.resetState()
}

componentWillUnmount() {
  window.removeEventListener('keyup', this.handleKeyUp, false);
  document.removeEventListener('click', this.handleOutsideClick, false);
}

}

export default Update;
