import React from "react";
let searchURL = "https://sandbox.musement.com/api/v3/activities?text=";

// will need to add "/index" INDEX route on server.js back-end

/*
fetch(baseURL+ '/bucketlists')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))
*/
class Search extends React.Component {
  state = {
    items: [],
    item: {},
    activity: "",
  };

  /*
  searchEvents = () => {
    fetch(baseURL+ '/bucketlists')
      .then(data => {
        return data.json()},
        err => console.log(err))
      .then(parsedData => this.setState({
        items: parsedData
      }),
       err=> console.log(err))
  }
*/

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    console.log("Form submitted");
    event.preventDefault();
    console.log(searchURL + this.state.activity);
    fetch(searchURL + this.state.activity, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson.data);
        this.setState({
          items: resJson.data,
        });
      })
      .catch(error => console.error({ error }));
  };

  render() {
    return (
      <div>
        <img className="imgSearch" src="/bucketLogo.png"></img>
        {/* FEEL FREE TO DELETE - image is BIG so it will look good in any size, you can resize as you want! */}
        {/* SET to 75% */}

        <div className="searchDiv">
          <h2>Search for Bucket List activities</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="activity"
              placeholder="activity name"
              value={this.state.activity}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="listDiv">
          {this.state.items.map(item => (
            <div key={item.uuid} className="listItemsSearch hoverSearch">
              <div id="searchItemImg">
                <img src={item.cover_image_url}></img>
              </div>

              <div id="searchItemTitle">
                {item.title} <br />
              </div>
              <div id="searchItemCity">{item.city.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
