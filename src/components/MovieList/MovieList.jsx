import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.scss";

class MovieList extends Component {
  render() {
    const { isLoading, movies } = this.props;
    if (movies.length === 0) {
      return <p>Search movie</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <section className="movie-list">
        {Object.keys(movies.movies).map(key => {
          const movie = movies.movies[key];
          return (
            <MovieItem
              key={key}
              title={movie.Title}
              year={movie.Year}
              image={movie.Poster}
            ></MovieItem>
          );
        })}
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.movies,
    isLoading: state.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
