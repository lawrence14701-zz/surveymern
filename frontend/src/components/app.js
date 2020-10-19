import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import TweetsContainer from "./tweets/tweets_container";
import MainPage from "./main/main_page.jsx";
import LoginFormContainer from "./session/login_form_container";
import ProfileContainer from "./tweets/profile/profile_container";
import TweetComposeContainer from "./tweets/tweet_compose_container";
import "./app.css";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute
        exact
        path="/new_tweet"
        component={TweetComposeContainer}
      />
    </Switch>
  </div>
);

export default App;
