'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much film you see?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much film you see?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Last watched movie?', ''),
              b = prompt('Rate this film', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
    
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Ви мало дивитесь фільми');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.movies < 30){
        console.log('Ви класичний глядач');
    } else if (personalMovieDB.count >= 30){
        console.log('Ви кіноман');
    } else {
        console.log('Помилка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGeners() {
    for (let i = 0; i < 3; i++){
        personalMovieDB.geners.push(prompt(`Ваш улюблений жанр под номером ${i+1}`, ''));
    }
}

writeYourGeners();