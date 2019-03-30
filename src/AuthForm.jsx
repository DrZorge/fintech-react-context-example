import React, { Component, Fragment } from "react";

import Button from "./Button";
import Greeting from "./Greeting";
import Input from "./Input";

import LanguageContext from "./LanguageContext";

import styles from "./AuthForm.module.css";

class AuthForm extends Component {
  render() {
    const {
      GREETING_TEXT,
      LOGIN_INPUT_PLACEHOLDER,
      LOGIN_BUTTON_TEXT
    } = this.context;

    return (
      <Fragment>
        <Greeting text={GREETING_TEXT} />
        <form className={styles.form}>
          <Input placeholder={LOGIN_INPUT_PLACEHOLDER} />
          <Button type="submit">{LOGIN_BUTTON_TEXT}</Button>
        </form>
      </Fragment>
    );
  }
}

AuthForm.contextType = LanguageContext;

export default AuthForm;
