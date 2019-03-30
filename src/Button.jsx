import React from "react";

import styles from "./Button.module.css";

export default ({ onClick, type, children }) => (
  <button className={styles.button} onClick={onClick} type={type}>
    {children}
  </button>
);
