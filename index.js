const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const surveys = require("./routes/api/surveys");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");

require("./config/passport")(passport);

const server = express();
//**! Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option*/
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

server.use(passport.initialize());
server.use("/api/users", users);
server.use("/api/surveys", surveys);

if (process.env.NODE_ENV === "production") {
  server.use(express.static("frontend/build"));
  server.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server is running on port ${port}`));
