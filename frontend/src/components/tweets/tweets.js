import React from "react";
import { withRouter } from "react-router-dom";
import TweetBox from "./tweet_box";
import NavBar from "../nav/navbar_container";
import styles from "./styles.module.css";

class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };
  }

  componentWillMount() {
    this.props.fetchTweets();
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    const { title, container } = styles;
    if (this.state.tweets.length === 0) {
      return <div>There are no Tweets</div>;
    } else {
      return (
        <div>
          <NavBar />
          <div className={container}>
            <h2 className={title}>All Tweets</h2>
            {this.state.tweets.map((tweet, index) => {
              let direction = "";
              if (index % 2 === 0) {
                direction = "left";
              } else {
                direction = "right";
              }
              return (
                <TweetBox
                  direction={direction}
                  key={tweet._id}
                  text={tweet.text}
                  user={this.props.currentUser.handle}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Tweet);
