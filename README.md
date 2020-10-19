# Tweeter (A social app that emulates Twitters design)

# [Link to the live project](https://tweetertweeter.herokuapp.com/#/)


# Summary
To be honest, I don't have a twitter, but I thought it would be a cool idea to start my #100days100Apps challenge with a MERN stack project. 

# Tech Stack
- mongoDB (non-relational db)
- express server using JS
- React using JS
- Node.js

# MVPS
- user can signup/log in
- post tweets
- get users profile
- get all tweets from all users

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
