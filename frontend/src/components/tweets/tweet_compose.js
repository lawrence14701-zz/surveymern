import React from "react";
import TweetBox from "./tweet_box";
import NavBar from "../nav/navbar_container";
import styles from "./styles.module.css";

class TweetCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newTweet: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTweet) {
      this.setState({ newTweet: nextProps.newTweet.text });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      text: this.state.text,
    };
    debugger;

    this.props.composeTweet(tweet);
    this.setState({ text: "" });
  }

  update(e) {
    debugger;
    this.setState({
      text: e.currentTarget.textContent,
    });
  }

  render() {
    const {
      container,
      title,
      textArea,
      textContainer,
      textAreaContainer,
      buttonOuter,
      text,
    } = styles;
    return (
      <div>
        <NavBar />
        <div className={container}>
          <h2 className={title}>Post a tweet</h2>
          <div className={textAreaContainer}>
            <div
              contentEditable
              className={textArea}
              type="textarea"
              value={this.state.text}
              onInput={(e) => this.update(e)}
              placeholder="Write your tweet..."
            />
            <button
              onClick={(e) => this.handleSubmit(e)}
              className={buttonOuter}
            >
              <div className={textContainer}>
                <span className={text}>Submit</span>
              </div>
            </button>
          </div>
          <br />
          {this.state.newTweet ? (
            <div>
              <h2 className={title}>SUCCESS!!!</h2>
              <TweetBox text={this.state.newTweet} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default TweetCompose;
