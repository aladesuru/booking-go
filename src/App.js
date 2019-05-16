import React, { Component } from "react";
import axios from "axios";
import "./App.css";

//import component
import Layout from "./components/Layout.js";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";

class App extends Component {
  state = {
    pickUpLocation: []
  };

  performSearch = query => {
    // Make a request for a user with a given search term
    axios
      .get(
        `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${query}`
      )
      .then(response => {
        // handle success
        this.setState({
          pickUpLocation: response.data.results.docs,
          isLoading: false
        });
      })
      .catch(error => {
        // handle error: for the purpose of the code test ,in real world is different
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="hero-area">
          <Layout>
            <Header />
          </Layout>
          <SearchForm
            Onsearch={this.performSearch}
            data={this.state.pickUpLocation}
          />
        </div>
      </div>
    );
  }
}

export default App;
