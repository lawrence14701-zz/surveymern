import React, { useEffect } from "react";
import axios from "axios";
import "./results.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Joey from "../../images/joey.jpg";
import Trumpy from "../../images/trumpy.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    minHeight: 400,
    position: "relative",
    margin: "20px",
  },
});

export default function Results() {
  const classes = useStyles();

  const [data, setData] = React.useState();
  //   const [pointsTrump, setPointsTrump] = React.useState(0);
  //   const [comments, setComments] = React.useState([]);
  useEffect(() => {
    axios
      .get(`/api/surveys`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let commentsArr = [];
  let joe = 0;
  let trump = 0;

  if (data) {
    data.forEach((element) => {
      if (element.who === true) {
        joe += 1;
        commentsArr.push({ text: element.text, type: "joe" });
      } else if (element.who === false) {
        trump += 1;
        console.log(element);
        commentsArr.push({ text: element.text, type: "trump" });
      }
    });
  }
  console.log(commentsArr);

  return (
    <>
      <div className="votesContainer">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="joe"
              height="300"
              image={Joey}
              title="Joe"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Votes for Biden
              </Typography>
              <Typography variant="h3" color="primary" component="p">
                {joe}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="trump"
              height="300"
              image={Trumpy}
              title="Trump"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Votes for Trump
              </Typography>
              <Typography variant="h3" color="secondary" component="p">
                {trump}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="comments">
        {commentsArr.map((comment) => (
          <div
            className={
              comment.type === "joe" ? "singleCommentBlue" : "singleCommentRed"
            }
            key={comment.text}
          >
            {comment.text}
          </div>
        ))}
      </div>
    </>
  );
}
