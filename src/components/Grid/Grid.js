import React from "react";
import { Grid } from "@material-ui/core";

import MovieCard from "../MovieCard/MovieCard";
import Pagination from '../Pagination/Pagination'

const gridList = props => {
  return (
    <Grid container spacing={1}>
      {props.movieList.map(movie => {
        return (
          <Grid
            key={movie.id}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            style={{ position: "relative", top: 0, left: 0 }}
          >
            <MovieCard
              link={movie.backdrop_path}
              title={movie.title}
              overview={movie.overview}
              idMovie={movie.id}
              releaseDate={movie.release_date}
            />
          </Grid>
        );
      })}
      <Pagination goTo={props.goTo} currentPage={props.currentPage}/>
    </Grid>
  );
};
export default gridList;
