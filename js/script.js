
const numberOfFilms = prompt('number films', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false,
};


const a = prompt('Last film', ''),
 b = prompt('Last film Score', ''),
 c = prompt('Last film', ''),
 d = prompt('Last film Score', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log (personalMovieDb);
console.log (movies);