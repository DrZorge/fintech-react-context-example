import React, { Component } from "react";

import localization from "./localization";
import App from "./App";
import LanguageContext from "./LanguageContext";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...localization.RU,
      changeLanguage: lang =>
        this.setState({
          ...localization[lang]
        })
    };
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        <App />
      </LanguageContext.Provider>
    );
  }
}
