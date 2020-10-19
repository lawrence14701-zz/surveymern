import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import IsSignedIn from "../../hooks/isSignedIn";
import signUpStyles from "./signUpStyles.module.css";
import { MiniTweeter } from "./svg";
import Modal from "./modal";
import Wrapper from "./inputWrapper";
import windowSize from "../../hooks/windowSize";

const SignupForm = (props) => {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [activeHandle, setActiveHandle] = useState(false);
  const [activePassword2, setActivePassword2] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [width] = windowSize();
  const errors = IsSignedIn(props);
  const {
    signUpFormContainer,
    containerCenter,
    textBig,
    textSmall,
    button,
    input,
    spacing,
    backDrop,
  } = signUpStyles;

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      handle,
      password,
      password2,
    };

    props.signup(user, props.history);
  };

  return (
    <>
      <div className={signUpFormContainer}>
        <div className={containerCenter}>
          <MiniTweeter />
          <div className={textBig}>
            <span>See what's happening in the world right now</span>
          </div>
          <div className={textSmall}>
            <span>Join Tweeter today</span>
          </div>
          <button onClick={(e) => setShowModal(true)} className={button}>
            Sign Up
          </button>
          {width <= 450 ? (
            <button
              onClick={(e) => props.history.push("./login")}
              className={button}
            >
              Login
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={showModal ? backDrop : ""}>
        <Modal show={showModal}>
          <div className="signup-form">
            <div className={spacing}>
              <Wrapper isActive={activeEmail} placeHolder="Email" width="100%">
                <input
                  className={input}
                  onFocus={() => setActiveEmail(true)}
                  onBlur={() => setActiveEmail(false)}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </Wrapper>
            </div>
            <div className={spacing}>
              <Wrapper
                isActive={activeHandle}
                placeHolder="Handle"
                width="100%"
              >
                <input
                  className={input}
                  type="text"
                  onFocus={() => setActiveHandle(true)}
                  onBlur={() => setActiveHandle(false)}
                  value={handle}
                  onChange={(e) => setHandle(e.currentTarget.value)}
                />
              </Wrapper>
            </div>
            <div className={spacing}>
              <Wrapper
                isActive={activePassword}
                placeHolder="Password"
                width="100%"
              >
                <input
                  className={input}
                  type="password"
                  onFocus={() => setActivePassword(true)}
                  onBlur={() => setActivePassword(false)}
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Wrapper>
            </div>
            <div className={spacing}>
              <Wrapper
                isActive={activePassword2}
                placeHolder="Confirm Password"
                width="100%"
              >
                <input
                  className={input}
                  type="password"
                  onFocus={() => setActivePassword2(true)}
                  onBlur={() => setActivePassword2(false)}
                  value={password2}
                  onChange={(e) => setPassword2(e.currentTarget.value)}
                />
              </Wrapper>
            </div>
            <button
              onClick={(e) => {
                setClicked(true);
                handleSubmit(e);
              }}
              className={button}
            >
              Sign Up
            </button>
            <button onClick={(e) => setShowModal(false)} className={button}>
              Cancel
            </button>
            {clicked && errors}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default withRouter(SignupForm);
