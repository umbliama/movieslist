import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies, setSearchValue } from "../../actions/";

class MovieSearch extends Component {
  handleChange = e => {
    const { setSearchValue } = this.props;
    setSearchValue(e.target.value);
  };

  render() {
    const { fetchMovies, searchValue } = this.props;
    return (
      <div>
        <input onChange={this.handleChange} type="text" />
        <input
          type="button"
          onClick={() => fetchMovies(searchValue)}
          value="Search"
        />
      </div>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch);
