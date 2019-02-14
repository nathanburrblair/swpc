import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">{Routes}</div>
      </HashRouter>
    );
  }
}

export default App;
