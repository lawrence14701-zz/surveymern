import { connect } from "react-redux";
import { fetchTweets } from "../../actions/tweet_actions";
import Tweets from "./tweets";

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.all),
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweets: () => dispatch(fetchTweets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
