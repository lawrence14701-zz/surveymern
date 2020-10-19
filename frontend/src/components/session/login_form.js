import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Wrapper from "./inputWrapper";
import loginStyles from "./loginStyles.module.css";
import UseCurrentUser from "../../hooks/useCurrentUser";
import windowSize from "../../hooks/windowSize";
import loginButtonStyles from "./loginButtonStyles.module.css";

const LoginForm = (props) => {
  const {
    input,
    loginContainer,
    inputsFlexContainer,
    inputsContainer,
    space,
    centerLogin,
  } = loginStyles;
  const { buttonOuter, textContainer, text } = loginButtonStyles;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);
  const errors = UseCurrentUser(props);
  const [width] = windowSize();

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email,
      password,
    };

    props.login(user);
  };
  return (
    <>
      {width <= 450 ? (
        ""
      ) : (
        <div
          className={
            props.history.location.pathname === "/login"
              ? centerLogin
              : loginContainer
          }
        >
          <form onSubmit={handleSubmit}>
            <div
              className={width >= 1200 ? inputsContainer : inputsFlexContainer}
            >
              <Wrapper
                padding={width <= 1200 ? "" : true}
                isActive={activeEmail}
                placeHolder="Phone, Email, Or Username"
                width="250px"
              >
                <input
                  onFocus={() => setActiveEmail(true)}
                  onBlur={() => setActiveEmail(false)}
                  className={input}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </Wrapper>
              {width <= 1200 && <div className={space} />}
              <Wrapper
                padding={width <= 1200 ? "" : true}
                isActive={activePassword}
                placeHolder="Password"
                width="250px"
              >
                <input
                  onFocus={() => setActivePassword(true)}
                  onBlur={() => setActivePassword(false)}
                  className={input}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Wrapper>
              {width <= 1200 && <div className={space} />}
              <button
                onClick={() => setClicked(true)}
                type="submit"
                className={buttonOuter}
              >
                <div className={textContainer}>
                  <span className={text}>Login</span>
                </div>
              </button>
              {clicked && errors}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default withRouter(LoginForm);
