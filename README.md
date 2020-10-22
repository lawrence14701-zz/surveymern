# Tweeter (A social app that emulates Twitters design)
(Day one of challenge)

# [Link to the live project](https://tweetertweeter.herokuapp.com/#/)


# Summary
To be honest, I don't have a twitter, but I thought it would be a cool idea to start my #100days100Apps challenge with a MERN stack project. 

# Tech Stack
- mongoDB (non-relational db)
- express server using JS
- React using JS
- Node.js
- heroku (deployment)

# MVPS
- user can signup/log in
- post tweets
- get users profile
- get all tweets from all users

# How to set up

1. clone the repo using git commands or downloading the repo
1. In the root directory, inside your terminal, run the command $ npm run frontend-install, this script will install both dependencies on the backend and frontend.
1. To start a local server please use the script $ npm run dev, this starts a localhost:3000 on the frontend which proxies over to the backend's localhost:5000
1. You will notice an error inside your terminal saying "file missing, can not find key_dev.js", this is normal. The cloned repo did not include that file becuase of secret env variables. 
1. To set up your env variables please create a keys_dev.js, inside the file place 
```js
module.exports = {
  mongoURI:"your mongodb key",
  secretOrKey: "random secret key",
};
```
1. After set up a cluster from mongodb and connect it to your application using the key provided from your cluster. 
1. Lastly, test application and database CRUD actions by creating a user, signing in, posting a tweet, and reading all tweets.
1. if no errors occur then you are ready to start hacking!

# Authentication 

A big part of this project was user authentication and it was implemented using token based authentication, specifically using the JWT strategy, which was also the focus of this project.

# How the JWT Strategy works 

1. User visits your Express application and signs in using his username and password

1. The username and password are sent via POST request to the /login route on the Express application server

1. The Express application server will retrieve the user from the database (a hash and salt are stored on the user profile), take a hash of the password that the user provided a few seconds ago using the salt attached to the database user object, and verify that the hash taken matches the hash stored on the database user object.

1. If the hashes match, we conclude that the user provided the correct credentials, and our passport-local middleware will attach the user to the current session.

1. For every new request that the user makes on the front-end, their session Cookie will be attached to the request, which will be subsequently verified by the Passport middleware. If the Passport middleware verifies the session cookie successfully, the server will return the requested route data, and our authentication flow is complete.

# Difference between token based auth vs session auth 
In session-based auth the Server does all the heavy lifting server-side. Broadly speaking a client authenticates with its credentials and receives a session_id (which can be stored in a cookie) and attaches this to every subsequent outgoing request. In Token-based Authentication no session is persisted server-side (stateless). The initial steps are the same. Credentials are exchanged against a token which is then attached to every subsequent request (it can also be stored in a cookie). However for the purpose of decreasing memory usage, easy scale-ability and total flexibility (tokens can be exchanged with another client) a string with all the necessary information is issued (the token) which is checked after each request made by the client to the server. Which one is safer? Well, there is no absolute answer. Both strategies use encryption to hide the user's password, but do so in different ways.
