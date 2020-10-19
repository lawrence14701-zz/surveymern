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
    this.setState({ newTweet: nextProps.newTweet.text });
  }

  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      text: this.state.text,
    };

    this.props.composeTweet(tweet);
    this.setState({ text: "" });
  }

  update() {
    return (e) =>
      this.setState({
        text: e.currentTarget.value,
      });
  }

  render() {
    const {
      container,
      title,
      textArea,
      textContainer,
      textAreaContainer,
      inputContainer,
      buttonOuter,
      text,
    } = styles;
    return (
      <div>
        <NavBar />
        <div className={container}>
          <h2 className={title}>Post a tweet</h2>
          <div className={textAreaContainer}>
            <div className={inputContainer}>
              <div
                contentEditable
                className={textArea}
                type="textarea"
                value={this.state.text}
                onChange={this.update()}
                placeholder="Write your tweet..."
              />
              <button
                onClick={() => this.handleSubmit()}
                className={buttonOuter}
              >
                <div className={textContainer}>
                  <span className={text}>Submit</span>
                </div>
              </button>
            </div>
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
