const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?",'');

const personalMovieDB = {
    count: +numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for  (let i=0; i<2; i++){
    let movieName = prompt("Один из просмотренных ранее фильмов?",'');
    let movieRating = prompt("На сколько оцените его?",'');
    personalMovieDB.movies[movieName]=+movieRating;
}
console.log (personalMovieDB);