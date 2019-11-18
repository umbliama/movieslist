import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList/MovieList";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import "./scss/utility.scss";

function App() {
  return (
    <div className="container">
      <MovieSearch></MovieSearch>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
