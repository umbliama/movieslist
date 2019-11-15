import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions/fetchMovies";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  //MAKE HANDLECHANGE TO STATE!
  render() {
    const { fetchMovies } = this.props;
    return (
      <div>
        <input onChange={this.handleChange} type="text" />
        <input type="button" onClick={fetchMovies} value="Search" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    searchValue: state.searchValue
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch);
