import React, { Component } from "react";

import LanguageSelector from "./LanguageSelector";
import Page from "./Page";

import localization from "./localization";

export default class App extends Component {
  render() {
    return (
      <div>
        <LanguageSelector languages={Object.keys(localization)} />
        <Page />
      </div>
    );
  }
}
