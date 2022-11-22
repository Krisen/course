const numberOfFilms = +prompt("How many films did you watch?", "");
const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
// for (let i = 1; i < 2; i++) {
//   const a = prompt("Which is your fav?", ""),
//     b = +prompt("How much will you give", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }
// part#2
// let num = 1;
// while (num <= 2) {
//   const a = prompt("Which is your fav?", ""),
//     b = +prompt("How much will you give", "");
//   num++;
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     num--;
//   }
// }
//part#3
// let num = 1;
// do {
//   const a = prompt("Which is your fav?", ""),
//     b = +prompt("How much will you give", "");
//   num++;
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     num--;
//   }
// } while (num <= 2);
console.log(personMovieDB);
let final;
if (numberOfFilms < 10) {
  final = alert("Вы лох");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
  final = alert("Вы мисье");
} else {
  final = alert("errssor");
}
