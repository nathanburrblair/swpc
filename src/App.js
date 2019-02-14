import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "../src/components/ScrollToTop";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <div className="App">
            <SiteHeader />
            {Routes}
            <Footer />
          </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
