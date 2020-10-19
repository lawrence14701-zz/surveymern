import React from "react";
import styles from "./styles.module.css";

const TweetBox = (props) => {
  const {
    tweetContainerLeft,
    tweetContainerRight,
    tweetLeft,
    tweetRight,
    tweetContainer,
    tweet,
    userText,
  } = styles;

  return (
    <>
      <div
        className={
          props.direction
            ? props.direction === "left"
              ? tweetContainerLeft
              : tweetContainerRight
            : tweetContainer
        }
      >
        <p
          className={
            props.direction
              ? props.direction === "left"
                ? tweetLeft
                : tweetRight
              : tweet
          }
        >
          {props.text}
        </p>
      </div>
      <div className={userText}>
        <p>{props.user}</p>
      </div>
    </>
  );
};

export default TweetBox;
