import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const UseCurrentUser = (props) => {
  const [errors, setErrors] = useState([]);
  const { errorList } = styles;

  useEffect(() => {
    if (props.currentUser === true) {
      props.history.push("/tweets");
    } else {
      setErrors(props.errors);
    }
  }, [props.currentUser, props.errors, props.history]);

  return (
    <ul className={errorList}>
      {Object.keys(errors).map((error, i) => (
        <li key={`error-${i}`}>{errors[error]}</li>
      ))}
    </ul>
  );
};

export default UseCurrentUser;
