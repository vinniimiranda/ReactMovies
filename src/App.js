import React from "react";
import axios from "axios";
import GridList from "./components/Grid/Grid";
import Container from "@material-ui/core/Container";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.getList(this.state.pageSelected);
  }
  state = {
    movieList: [],
    apiKey: "7b8e1e239f830512fd3d0ada5105a8e7",
    lang: "pt-BR",
    region: "US",
    category: "popularity.desc",
    pageSelected: 1
  };

  getList(page) {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          this.state.apiKey
        }&language=${this.state.lang}&region=${this.state.region}&sort_by=${
          this.state.category
        }&include_adult=false&include_video=false&page=${page}`
      )
      .then(({ data }) => {
        this.setState({
          movieList: [...data.results]
        });
      });
  }
  nextPage = page => {
    this.setState({ pageSelected: page });
    this.getList(page);
  };
  render() {
    return (
      <div className="App">
        <Container>
          <GridList goTo={this.nextPage} movieList={this.state.movieList} currentPage={this.state.pageSelected} />
        </Container>
      </div>
    );
  }
}

export default App;
