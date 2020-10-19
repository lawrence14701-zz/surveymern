import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Bird } from "./svg";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    const { link } = styles;
    if (this.props.loggedIn) {
      return (
        <>
          <Link className={link} to={"/tweets"}>
            Tweets
          </Link>
          <Link className={link} to={"/profile"}>
            Profile
          </Link>
          <Link className={link} to={"/new_tweet"}>
            Post
          </Link>
          <button onClick={this.logoutUser}>Logout</button>
        </>
      );
    } else {
      return (
        <>
          <Link className={link} to={"/"}>
            Login
          </Link>
        </>
      );
    }
  }

  render() {
    const { containerNav, nav } = styles;
    return (
      <div className={containerNav}>
        <div className={nav}>
          <Bird />
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
