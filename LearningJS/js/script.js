"use strict";


const personalMovieDB = {
    count: 0, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    checkedInputData: function(message){
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

    },
    detectPersonalLevel: function(){
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
    return true;
    },
    rememberMyFilms: function(){
        for  (let i=0; i<2; i++){
            let movieName = this.checkedInputData("Один из просмотренных ранее фильмов?",'');
            let movieRating = this.checkedInputData("На сколько оцените его?",'');
            personalMovieDB.movies[movieName]=+movieRating;
        }
    },
    writeYourGenres: function(){
        for  (let i=0; i<3; i++){
            let movieGenre = this.checkedInputData(`Ваш любимый жанр под номером ${i+1}?`,'');
            personalMovieDB.genres[i]=movieGenre;
        }
    },
    toggleVisibleMyDB: function(){
        this.privat=!this.privat;
        return true;
    },
    showMyDB: function(){
        if(personalMovieDB.privat==false){
            console.log (personalMovieDB);
        }
        else{console.log("База данных приватна");}
        return true;
    },
    showGenres: function(){
        this.genres.forEach(function(value, i){
            console.log(`Любимый жанр №${i+1} - ${value}`);
        });
    }
};

personalMovieDB.count = +personalMovieDB.checkedInputData("Сколько фильмов вы уже просмотрели?");

personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.showGenres();


