import axios from "axios";

export function setMovies(data) {
  return {
    type: "FETCH_MOVIES",
    payload: data
  };
}
  
export function fetchMovies(searchValue) {
  return dispatch => {
    return axios
      .get(`http://omdbapi.com/?s=${searchValue}&apikey=f8824ade`)
      .then(response => {
        dispatch(setMovies(response.data.Search));
      });
  };
}
