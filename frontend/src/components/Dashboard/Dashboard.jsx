import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useAuth } from "../../context/authcontext";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Joe from "../../images/joe.jpg";
import Trump from "../../images/trump.jpg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./Dashboard.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Dashboard() {
  const history = useHistory();

  const { currentUser } = useAuth();
  const classes = useStyles();
  const [who, setWho] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleText = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let selectType;
    if (value === "") {
      return setError(true);
    }

    if (who === "joe") {
      selectType = true;
    } else if (who === "trump") {
      selectType = false;
    }
    const newValue = `${currentUser} ${value}`;
    const information = {
      who: selectType,
      text: newValue,
    };
    axios
      .post(`/api/surveys`, information)
      .then((res) => {
        history.push("/results");
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <>
      {currentUser ? (
        <div>
          <div className="header">
            <Avatar
              style={{ width: "200px", height: "200px", margin: " 30px" }}
              alt="joe"
              src={Joe}
            />
            <Typography
              style={{ fontWeight: "bold" }}
              color="secondary"
              variant="h2"
            >
              VS
            </Typography>
            <Avatar
              style={{ width: "200px", height: "200px", margin: " 30px" }}
              alt="trump"
              src={Trump}
            />
          </div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <FormControl
                component="fieldset"
                error={error}
                className={classes.formControl}
              >
                <FormLabel component="legend">
                  Who are you voting for?
                </FormLabel>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue=""
                  >
                    <FormControlLabel
                      value="joe"
                      control={<Radio color="primary" />}
                      label="Joe"
                      labelPlacement="start"
                      onChange={(e) => setWho(e.target.value)}
                    />
                    <FormControlLabel
                      value="trump"
                      control={<Radio color="primary" />}
                      label="Trump"
                      labelPlacement="start"
                      onChange={(e) => setWho(e.target.value)}
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  id="filled-multiline-flexible"
                  label="Leave a comment why"
                  multiline
                  rowsMax={4}
                  value={value}
                  onChange={handleText}
                  variant="filled"
                />
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Submit Survey and See results
                </Button>
              </FormControl>
            </form>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1">
            Your not allowed to see this page unless you have a username
          </Typography>
        </div>
      )}
    </>
  );
}

export default Dashboard;
