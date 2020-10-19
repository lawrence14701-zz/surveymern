import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const IsSignedIn = (props) => {
  const [errors, setErrors] = useState([]);
  const { errorList } = styles;
  useEffect(() => {
    if (props.signedIn === true) {
      props.history.push("/login");
    } else {
      setErrors(props.errors);
    }
  }, [props.signedIn, props.errors, props.history]);
  return (
    <ul className={errorList}>
      {Object.keys(errors).map((error, i) => (
        <li key={`error-${i}`}>{errors[error]}</li>
      ))}
    </ul>
  );
};

export default IsSignedIn;
