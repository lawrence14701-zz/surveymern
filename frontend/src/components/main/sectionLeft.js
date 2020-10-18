import React from "react";
import { TweeterBird, MagnifyingGlass, People, Bubble } from "./svg";
import styles from "./styles.module.css";
import cx from "classnames";
import windowSize from "../../hooks/windowSize";

const SectionLeft = () => {
  const [width, height] = windowSize();
  const {
    section,
    sectionMobile,
    sectionLeft,
    sectionLeftDetail,
    sectionLeftText,
    sectionLeftDetails,
  } = styles;

  const listItems = [
    { icon: <MagnifyingGlass />, text: "Follow your interests." },
    { icon: <People />, text: "Hear what people are talking about." },
    { icon: <Bubble />, text: "Join the conversation." },
  ];
  const sectionStyle = width <= 450 ? sectionMobile : section;
  return (
    <div className={cx(sectionLeft, sectionStyle)}>
      <TweeterBird />

      <div className={sectionLeftDetails}>
        {listItems.map((detail, i) => (
          <div className={sectionLeftDetail} key={`${detail}${i}`}>
            <div>{detail.icon}</div>
            <span className={sectionLeftText}>{detail.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionLeft;
