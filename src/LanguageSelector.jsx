import React from "react";

import LanguageContext from "./LanguageContext";

import styles from "./LanguageSelector.module.css";

export default props => (
  <LanguageContext.Consumer>
    {context => (
      <div className={styles.root}>
        {props.languages.map(lang => (
          <button
            className={styles.button}
            key={lang}
            onClick={() => context.changeLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
    )}
  </LanguageContext.Consumer>
);
