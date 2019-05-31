import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  Collapse,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Icon
} from "@material-ui/core";
import clsx from "clsx";

import axios from "axios";

import moment from "moment";
import "moment/locale/pt-br";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: "1.9rem",
    // height: 500,
    filter: "drop-shadow(2px 7px 0 rgba(0,0,0,.3))"
  },
  media: {
    height: 550,
    paddingTop: "56.25%"
  },
  expand: {
    position: "absolute",
    right: 20,
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)",
    zIndex: "500"
  }
}));
const MovieCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [movie, setMovie] = React.useState({});
  const handleExpandClick = idMovie => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${
          props.apiKey
        }&language=pt-bt`
      )
      .then(({ data }) => {
        setMovie(data);
      });
    setExpanded(!expanded);
  };

  const cashFormatter = valor => {
    let valorDecimal = parseInt(valor)
      .toFixed(2)
      .split(".");
    return (valorDecimal[0] =
      "U$ " + valorDecimal[0].split(/(?=(?:...)*$)/).join("."));
  };
  const dateFormatter = date => {
    return moment(date).format("LL");
  };
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea onClick={() => handleExpandClick(props.idMovie)}>
          <CardMedia
            className={classes.media}
            image={"https://image.tmdb.org/t/p/w500" + props.link}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={() => handleExpandClick(props.idMovie)}
              >
                <Icon>keyboard_arrow_down</Icon>
              </IconButton>
            </Typography>
          </CardContent>
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#fff",
              width: "100%",
              
            }}
          >
            <CardContent style={{height: '100%', overflowY: 'auto'}}>
              {props.overview ? (
                <Typography
                  style={{ textAlign: "left", clear: "both" }}
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  <strong>Sinopse:</strong> {props.overview}
                </Typography>
              ) : null}
              {movie.budget ? (
                <Typography variant="body1" color="textSecondary" component="p">
                  <strong>Orçamento:</strong> {cashFormatter(movie.budget)}
                </Typography>
              ) : null}
              {movie.revenue ? (
                <Typography variant="body1" color="textSecondary" component="p">
                  <strong>Bilheteria:</strong> {cashFormatter(movie.revenue)}
                </Typography>
              ) : null}
              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Nota:</strong>{" "}
                {movie.vote_average ? movie.vote_average : null}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Data de Lançamento:</strong>{" "}
                {props.releaseDate ? dateFormatter(props.releaseDate) : dateFormatter(props.first_air_date)}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Generos: </strong>{" "}
                {movie.genres ? movie.genres.map(g => `#${g.name} `) : null}
              </Typography>
            </CardContent>
          </Collapse>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default MovieCard;
