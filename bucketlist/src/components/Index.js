import React from "react";
import Show from "../components/Show";
import NewForm from "./NewForm";
import Update from "../components/Update"


let baseURL = process.env.REACT_APP_BASE_URL



fetch(baseURL + "/bucketlists")
  .then(
    data => {
      return data.json();
    },
    err => console.log(err)
  )
  .then(
    parsedData => console.log(parsedData),
    err => console.log(err)
  );

class Index extends React.Component {
  state = {
    currentUser:this.props.currentUser,
    display: false,
    items: [],
    item: "",
    editClicked: false,
    baseURL: process.env.REACT_APP_BASE_URL,
    itemLists: [],
    itemListsData: []
  }

  getItem = item => {
    this.setState({ item: item });
    console.log(item);
  }

  getItems = () => {
    fetch(baseURL + "/bucketlists")
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        parsedData =>
          this.setState({

            items: parsedData

          }),
        err => console.log(err)
      );
  };

  toggleModal = item => {
    console.log("INDEX --> toggleModal")
    console.log("BEFORE click, display is: ",this.state.display)
    this.getItem(item)
    this.setState({
      display: !this.state.display
    });
    setTimeout(
      function() {console.log("AFTER click, display is: ",this.state.display)}
      .bind(this),
      250
    )
  }

  toggleEditClick = (bool) =>{
    console.log("editClicked state changed")
    //if param is givin match state to param otherwise toggle state
    if (bool){
      this.setState({
        editClicked: bool
      })
    } else {
      this.setState({
        editClicked: !this.state.editClicked
      })
    }
  }

  /*
  pullListItems = (item) =>{
    //first reset the state of these fields
    this.setState({
      itemLists: [],
      itemListsData: []
    })
    let fetchURL = this.state.baseURL + "/bucketlists/" + item._id

    const getItemListIds = async () => {
      fetch(fetchURL)
      .then(
        data => {
          
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        //get listitem id's
        parsedData => {
          console.log("parsed data is ", parsedData)
            
          this.setState({
            itemLists: parsedData.items
          })
          return Promise.resolve(parsedData.items)
        },
        err => console.log(err)
      )
    }

    //await Promise.all(getItemListIds().then(
    const getItemListsPart2 = async () => {
        //let itemsResult = ''
        //console.log('getitemslist...')
        //console.log(getItemListIds())
        //console.log("^^^")
        
          console.log("about to map ", this.state.itemLists)
          //map itemLits to get fetch itemlist data for each itemlist id
          this.state.itemLists.map(listItem => {
            console.log("Listitem is ", listItem)
            fetch(this.state.baseURL + "/listitems/" + listItem)
              .then(
                data => {
                  return data.json();
                },
                err => console.log(err)
              )
              .then(
                  parsedData => {
                    const currentItemListData = [...this.state.itemListsData]
                    currentItemListData.push(parsedData)
                    this.setState({
                      itemListsData: currentItemListData
                    })
                })
          })
    }
    getItemLists().then(getItemListsPart2())
  }
  */

 pullListItems = (item) =>{
  //first reset the state of these fields
  this.setState({
    itemLists: [],
    itemListsData: []
  })
  let fetchURL = this.state.baseURL + "/bucketlists/" + item._id

  const getItemListIds = () => {
    fetch(fetchURL)
    .then(
      data => {
        
        return data.json();
      },
      err => console.log(err)
    )
    .then(
      //get listitem id's
      parsedData => {
        console.log("parsed data is ", parsedData)
          
        this.setState({
          itemLists: parsedData.items
        })
        return parsedData.items
      },
      err => console.log(err)
    ).then(
        mappedData => {
          //let mappedItemArray = []
          console.log("about to map ", mappedData)
          //map itemLits to get fetch itemlist data for each itemlist id
         let mappedItemArray = this.state.itemLists.map(listItem => {
          
            //console.log("Listitem is ", listItem)
            //mappedItemArray.push(
              return (          
                fetch(this.state.baseURL + "/listitems/" + listItem)
                  .then(
                    data=>{
                     return data.json()
                    }
                  )
              )
                .then(
                data => {
                    return data         
                }
              )
          })
     
              console.log("listitemsmap")
              console.log(this.state.itemLists)
              console.log(mappedItemArray)
              return (mappedItemArray)
            
          

       }
    ).then(

      dState =>{
        console.log("datastate is")
        console.log(dState[0])
        this.setState({
          itemListsData: dState
        })
      }
    )


  }
  getItemListIds()
 }
  
/*
  //await Promise.all(getItemListIds().then(
  const getItemListsPart2 = async () => {
      //let itemsResult = ''
      //console.log('getitemslist...')
      //console.log(getItemListIds())
      //console.log("^^^")
      
       
            .then(
              data => {
                return data.json();
              },
              err => console.log(err)
            )
            .then(
                parsedData => {
                  const currentItemListData = [...this.state.itemListsData]
                  currentItemListData.push(parsedData)
                  this.setState({
                    itemListsData: currentItemListData
                  })
              })
        })
  }
  getItemLists().then(getItemListsPart2())
}
*/

  render() {
      //console.log("current base URL:", baseURL);
    return (
      <div>
        <h1>Index (Lists) Page</h1>
        <img className="imgIndex" src="/bucketLogo.png"></img>
        <div className="listDiv">
          { this.state.items.map(item =>
                <div
                  key={item._id}
                  className="listItemsIndex"
                  onClick={e => 
                    {
                      this.toggleModal(item)
                      this.pullListItems(item)
                    }
                  }
                >
                  <div>{item.listName}</div>
                </div>
            )
          }
        </div>
          <Show 
            onCloseRequest={this.toggleModal}
            display={this.state.display}
            item={this.state.item}
            toggleEditClick={this.toggleEditClick}
            baseURL={this.state.baseURL}
            itemListsData={this.state.itemListsData}
            items2={this.state.itemListsData}
          />
         {/*Edit form to only be shown when edit button is clicked*/}
        <div>
        {this.state.editClicked
        ? <Update 
            display={true}
            item={this.state.item}
            getItems={this.getItems}
            toggleEditClick={this.toggleEditClick}
          />
        : null
          }
        </div>
          {this.props.currentUser ? <h1>Logged In</h1> : null}
          
      </div>

    );
  }

  componentDidMount() {
    this.getItems();
  }
}

export default Index;
