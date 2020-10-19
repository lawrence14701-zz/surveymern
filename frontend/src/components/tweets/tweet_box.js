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
      <p>{props.user}</p>
    </div>
  );
};

export default TweetBox;
