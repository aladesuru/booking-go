import React, { Component } from "react";

// import component
import ResultList from "./ResultList.js";

export default class SearchForm extends Component {
  state = {
    searchTerm: ""
  };

  ValidationInpText = () => {
    if (this.state.searchTerm !== "") {
      this.props.Onsearch(this.state.searchTerm);
    }
  };

  onhandleTextChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
    this.ValidationInpText();
  };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     this.ValidationInpText();
  //   };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2>Let's find your ideal car</h2>
        <div className="form-group searchbox">
          <label htmlFor="searchInputBox">Pick up Location</label>
          <input
            type="text"
            id="searchInputBox"
            name="seachTerm"
            autoComplete="true"
            placeholder="city, airport, station, region, district..."
            className="form-control"
            onChange={this.onhandleTextChange}
          />
          {this.state.searchTerm.length > 1 ? (
            <ResultList data={this.props.data} isLoading={this.props.Loading} />
          ) : (
            " "
          )}
        </div>
        {/* <div className="form-group">
          <button type="submit" className="form-control">
            Search
          </button>
        </div> */}
      </form>
    );
  }
}
