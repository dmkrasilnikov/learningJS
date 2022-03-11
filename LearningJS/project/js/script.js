/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let   deleteMovieBtns = document.querySelectorAll('.delete');
const task6 = {
    blockAd: function () {
        const advBox = document.querySelector('.promo__adv');
        advBox.querySelector('div').remove();
        advBox.querySelectorAll('img').forEach(item=>{item.remove();});
    },
    poster: document.querySelector('.promo__bg'),
    moviesContainer: document.querySelector('ul.promo__interactive-list'),
    changeGenre: function (correctGenre) {
        const genreBox = this.poster.querySelector('.promo__genre');
        genreBox.textContent = correctGenre;
    },
    changePoster: function (correctPoster){
        this.poster.style.cssText = correctPoster;
    },
    changeFilmList: function(moviesList){
        this.moviesContainer.querySelectorAll('li').forEach(item=>{item.remove();});
       
        
        if (typeof(moviesList)!=undefined){
            moviesList.sort();
            moviesList.forEach(function (filmName, i){
                const newLi = document.createElement('li');
                const newDiv = document.createElement('div');
                newLi.classList.add('promo__interactive-item');
                newLi.dataset.dataNum = i;
                newDiv.classList.add('delete');
                if (filmName.length>21){
                    filmName = filmName.slice(0,21)+'...';
                }
                newLi.textContent = `${i+1}. ${filmName}`;
                newLi.append(newDiv);
                task6.moviesContainer.append(newLi);
            });
        }
        deleteMovieBtns = document.querySelectorAll('.delete');
        deleteMovieBtns.forEach(function (el){
            el.addEventListener('click', removeMovieAtList);
        });
    },
    delElementAtMovieDB : function (i){
        movieDB.movies.splice(i,1);
    }

};
task6.blockAd();
task6.changeGenre('Драма');
task6.changePoster('background: no-repeat center/100% url("img/bg.jpg")');
task6.changeFilmList(movieDB.movies);
 

const btnAddMovie = document.querySelector('form.add button'),
      addingInput = document.querySelector('form.add input.adding__input'),
      isFavMovie = document.querySelector('form.add input[type="checkbox"]');


function addMovieInDB (e) {
    e.preventDefault();
    if (addingInput.value!=''){
        if (isFavMovie.checked) {
            console.log('Добавляется любимый фильм');
        }
        movieDB.movies.push(addingInput.value);
        task6.changeFilmList(movieDB.movies);
    }
    else{
        alert ('Введите название фильма');
    }
}
function removeMovieAtList (e) {
    e.preventDefault();
    const index = e.target.parentElement.dataset.dataNum;
    task6.delElementAtMovieDB(index);
    task6.changeFilmList(movieDB.movies);
}

btnAddMovie.addEventListener('click', addMovieInDB);

