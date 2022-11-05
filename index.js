// Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив з жанрами до яких він відноситься, але в масиві (genreIDs) тільки ID цих фільмів.
// Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм відноситься. Після чого відрендерити список фільмів як наведено в прикладі нижче (Expected result), якщо в списку жанрів більш ніж 2 фільми тоді рендеримо назву перших двох жанрів, а всі інші замінюємо на "Others".
// Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.

// //Object example
// {
//     title: "Interceptor",
//     genreIDs: [
//         28,
//         53,
//         12,
//     ],
//     genreNames: [
//         "Action",
//         "Thriller",
//         "Adventure"
//     ]
// }


////  Expected result
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'

const films = [{
    title: "Interceptor",
    genreIDs: [
        28,
        53,
        12,
    ],
},
{
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    genreIDs: [
        14,
        12,
        28
    ],
},
{
    title: "Last Seen Alive",
    genreIDs: [
        28,
        53
    ],
},
{
    title: "Jurassic World Dominion",
    genreIDs: [
        878,
        28,
        12,
        53
    ],
},
];



const genresInfo = {
    genres: [{
        id: 28,
        name: "Action"
    }, {
        id: 12,
        name: "Adventure"
    }, {
        id: 14,
        name: "Fantasy"
    }, {
        id: 878,
        name: "Science Fiction"
    }, {
        id: 53,
        name: "Thriller"
    }, {
        id: 10752,
        name: "War"
    }, {
        id: 37,
        name: "Western"
    }]
}


const newFilms = films.map(film => {
    const { genreIDs } = film;
    film.genreNames = [];
    genresInfo.genres.forEach(({ id, name }) => {
        if (genreIDs.includes(id)) {
            film.genreNames.push(name)
        }
    })
    return film
})

const markUp = createMarkUp(newFilms);
const filmContainer = document.querySelector('#filmlist');

filmContainer.innerHTML = markUp;

function createMarkUp(films) {

    return films.map(film => {
        let genres = '';
        if (film.genreNames.length > 2) {
            genres = `${film.genreNames[0]}, ${film.genreNames[1]}, others`;
        } else {
            genres = film.genreNames.join(', ')
        }
        return ` <li><p>${film.title}:${genres}</p ></li >`
    }).join('')
}





