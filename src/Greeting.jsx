import React from "react";

import styles from "./Greeting.module.css";

export default ({ text }) => <h1 className={styles.greeting}>{text}</h1>;
