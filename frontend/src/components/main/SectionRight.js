import React from "react";
import styles from "./styles.module.css";
import cx from "classnames";
import Login from "../session/login_form_container";
import SignUp from "../session/signup_form_container";

const Sectionright = () => {
  const { sectionRight, section, space } = styles;
  return (
    <div className={cx(sectionRight, section)}>
      <div className={space}>
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default Sectionright;
