import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import SiteHeader from './components/SiteHeader/SiteHeader'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <SiteHeader />
          {Routes}
          <Footer />
          </div>
      </HashRouter>
    );
  }
}

export default App;
