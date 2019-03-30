import React, { Component } from "react";
import ReactDOM from "react-dom";

import LanguageContext from "./LanguageContext";
import localization from "./localization";
import App from "./App";

import "./styles.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { ...localization.RU };
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        <App />
      </LanguageContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
