import React from "react";

export default ({ title, year, image }) => {
  return (
    <section className="movie-item">
      <h2 className="movie-item__title">{title}</h2>
      <p>{year}</p>
      <img className="movie-item__img" src={image} alt={`${title} poster`} />
    </section>
  );
};
