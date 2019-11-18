import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  movies: movieReducer,
  search: searchReducer
});
