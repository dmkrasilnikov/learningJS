"use strict";

 let numberOfFilms = checkedInputData("Сколько фильмов вы уже просмотрели?");

const personalMovieDB = {
    count: +numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for  (let i=0; i<2; i++){
    let movieName = checkedInputData("Один из просмотренных ранее фильмов?",'');
    let movieRating = checkedInputData("На сколько оцените его?",'');
    personalMovieDB.movies[movieName]=+movieRating;
}
if (personalMovieDB.count>0 && personalMovieDB.count<10){
    console.log ('Просмотрено мало фильмов');
}
else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
    console.log ('Вы классический зритель');
}
else if (personalMovieDB.count>=30){
    console.log ('Вы киноман');
}
else{
    console.log ('Произошла ошибка');
}
console.log (personalMovieDB);


function checkedInputData(message){
    let res = prompt(message,'');
    let checked = false;
    
    while (!checked) {
        if (res!='' && res!=null && res.length<=50){
            checked=true;
        }
        else{
            res = prompt(`Не может быть пустой строки или длина более 50 символов. ${message}`,'');
        }
    }  
    return res;  
}