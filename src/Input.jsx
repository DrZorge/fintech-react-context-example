import React from "react";

import styles from "./Input.module.css";

export default ({ type, value, handleChange, placeholder }) => (
  <div className={styles.inputWrapper}>
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
);
