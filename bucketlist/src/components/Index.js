import React from "react";
import Show from "../components/Show";

let baseURL = 'http://localhost:3003'


console.log('current base URL:', baseURL)

fetch(baseURL+ '/bucketlists')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))

{/* Show bucket lists created by the user */}
class Index extends React.Component {
  state = {
    items: [],
    item: ''
  }

  getItem = (item) => {
    this.setState({item: item})
    console.log(item)
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

  render() {
    return (
      <div>
        <h1>Index (Lists) Page</h1>
        <img className="imgIndex" src="/bucketLogo.png"></img> 
            {/* FEEL FREE TO DELETE - image is BIG so it will look good in any size, you can resize as you want! */}
            {/* SET to 75% */}
        <div className="listDiv">
          { this.state.items.map(item =>
                <div
                  key={item._id}
                  className="listItemsIndex"
                  onClick={() => this.getItem(item)}
                >
                  <div>{item.listName}</div>
                </div>
            )
          }
        </div>
        { this.state.item ? <Show item={this.state.item}/> : null }        
      </div>
    )
  }

  componentDidMount(){
    this.getItems()
  }

}

export default Index;
