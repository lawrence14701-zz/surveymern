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
  } = styles;

  return (
    <div
      className={
        props.direction
          ? props.direction === "left"
            ? tweetContainerLeft
            : tweetContainerRight
          : tweetContainer
      }
    >
      <h3
        className={
          props.direction
            ? props.direction === "left"
              ? tweetLeft
              : tweetRight
            : tweet
        }
      >
        {props.text}
      </h3>
      <h3>{props.user}</h3>
    </div>
  );
};

export default TweetBox;
