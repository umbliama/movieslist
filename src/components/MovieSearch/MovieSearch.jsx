import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies, setSearchValue } from "../../actions/";
import "./MovieSearch.scss";

class MovieSearch extends Component {
  handleChange = e => {
    const { setSearchValue } = this.props;
    setSearchValue(e.target.value);
  };

  render() {
    const { fetchMovies, searchValue } = this.props;
    return (
      <section className="movie-search">
        <input
          className="movie-search__input"
          onChange={this.handleChange}
          type="text"
        />
        <button className="button" onClick={() => fetchMovies(searchValue)}>
          Search
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    searchValue: state.search.searchValue
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchMovies: movieName => {
      dispatch(fetchMovies(movieName));
    },
    setSearchValue: searchValue => {
      dispatch(setSearchValue(searchValue));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
