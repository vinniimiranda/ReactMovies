import React, { useEffect, useState } from "react";
import axios from "axios";
import GridList from "./components/Grid/Grid";
import Container from "@material-ui/core/Container";

import "./App.css";

export default () => {
  const apiKey = "7b8e1e239f830512fd3d0ada5105a8e7";
  const [pageSelected, setPageSelected] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [typeContent, setTypeContent] = useState('movie')
  const [search, setSearch] = useState("");

  useEffect(() => {
    getList(1);
  }, []);

  useEffect(() => {
    getList(1)
  }, [typeContent])
  useEffect(() => {
    if (search.length > 0) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/${typeContent}?api_key=${apiKey}&language=pt-BR&query=${search}&page=1&include_adult=false`
        )
        .then(({ data }) => setMovieList(data.results));
    } else {
      getList(1);
    }
  }, [search]);
  const getList = page => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/${typeContent}?api_key=${apiKey}&language=pt-BR&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then(({ data }) => {
        setMovieList([...data.results]);
      });
  };
  const nextPage = page => {
    setPageSelected(page);
    getList(page);
  };

  const selectType = value => {
    setTypeContent(value)
  }

  return (
    <div className="App">
      <Container>
        <GridList
          goTo={nextPage}
          movieList={movieList}
          currentPage={pageSelected}
          setSearch={setSearch}
          apiKey={apiKey}
          selectType={selectType}
          typeContent={typeContent}
        />
      </Container>
    </div>
  );
};
