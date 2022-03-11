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

const task5 = {
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
            moviesList.forEach(function (value, i){
                const newLi = document.createElement('li');
                const newDiv = document.createElement('div');
                newLi.classList.add('promo__interactive-item');
                newDiv.classList.add('delete');
                newLi.textContent = `${i+1}. ${value}`;
                newLi.append(newDiv);
                task5.moviesContainer.append(newLi);
            });
        }
    }

};
task5.blockAd();
task5.changeGenre('Драма');
task5.changePoster('background: no-repeat center/100% url("img/bg.jpg")');
task5.changeFilmList(movieDB.movies);
 