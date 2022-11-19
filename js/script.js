let numberOfFilms = prompt("Сколько фильмы вы смотрели?", "1");
const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

const nameF = prompt("dd"),
  review = prompt("jh");
personMovieDB.movies[nameF] = review;
console.log(personMovieDB);
