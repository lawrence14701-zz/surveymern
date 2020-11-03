import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/flag.jpg";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { useAuth } from "../../context/authcontext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    cursor: "pointer",
  },
}));

export default function SignInSide() {
  const [username, setUser] = useState("");
  const [error, setError] = useState("");
  const { setCurrentUser } = useAuth();
  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = {
      email: username,
    };
    axios
      .post(`/api/users/register`, user)
      .then((res) => {
        console.log(res);
        setCurrentUser(username);
        history.push("/dashboard");
      })
      .catch((err) => {
        return setError("Failed to create the account, user is taken");
      });
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up, your username will be displayed on the survey
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSignIn} className={classes.form} noValidate>
            <TextField
              onInput={(e) => setUser(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
