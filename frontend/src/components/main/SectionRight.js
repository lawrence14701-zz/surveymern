import React from "react";
import styles from "./styles.module.css";
import cx from "classnames";
import Login from "../session/login_form_container";
import SignUp from "../session/signup_form_container";
import windowSize from "../../hooks/windowSize";

const Sectionright = () => {
  const { sectionRight, section, space, sectionMobile } = styles;
  const [width] = windowSize();
  const sectionStyle = width <= 450 ? sectionMobile : section;

  return (
    <div className={cx(sectionRight, sectionStyle)}>
      <div className={space}>
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default Sectionright;
