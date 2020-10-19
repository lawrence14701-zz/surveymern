import React from "react";
import TweetBox from "../tweet_box";
import NavBar from "../../nav/navbar_container";
import styles from "../styles.module.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };
  }

  componentWillMount() {
    console.log(this.props.currentUser.id);
    this.props.fetchUserTweets(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    const { title, container } = styles;
    if (this.state.tweets.length === 0) {
      return <div>This user has no Tweets</div>;
    } else {
      return (
        <div>
          <NavBar />
          <div className={container}>
            <h2 className={title}>All of This User's Tweets</h2>
            {this.state.tweets.map((tweet) => (
              <TweetBox key={tweet._id} text={tweet.text} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Profile;
