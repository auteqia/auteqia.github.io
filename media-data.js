const mediaLibrary = [
    {
        title: 'Lost (S1-2)',
        author: 'J. J. Abrams',
        cover: 'assets/series/lost.jpg',
        rating: 3,
        favorite: false,
        readDate: '2024-09-01',
        kind: 'serie',
        link: 'https://www.themoviedb.org/tv/4607-lost'
    },
    // BOOKS \\

    {
        title: "Walden",
        author: "Henry David Thoreau",
        cover: "assets/books/walden.jpg",
        rating: 4,
        reRead: true,
        link: "https://www.goodreads.com/book/show/16902.Walden",
        readDate: "2024-03-20",
        kind: "book"
    },
    {
        title: 'Du côté de chez Swann',
        author: 'Marcel Proust',
        cover: 'assets/books/du-cote-de-chez-swann.jpg',
        rating: 2,
        favorite: false,
        readDate: '2025-02-05',
        kind: 'book',
        link: 'https://www.goodreads.com/book/show/865069'
    },
    {
        title: 'War and Punishment',
        author: 'Mikhail Zygar',
        cover: 'assets/books/war-and-punishment.jpg',
        rating: 2.5,
        favorite: false,
        readDate: '2025-03-20',
        kind: 'book',
        link: 'https://www.goodreads.com/book/show/63923934-war-and-punishment'
    },
    // END OF BOOKS
    // MOVIES \\
    {
        title: "Requiem of a dream",
        author: "Darren Aronofsky",
        cover: "assets/movies/kill-bill-vol-1.jpg",
        rating: 4.5,
        reRead: false,
        link: "http://www.imdb.com/title/tt0180093/",
        readDate: "2025-05-05",
        kind: "movie"
    },
    {
        title: "Drunk",
        author: "Thomas Vinterberg",
        cover: "assets/movies/kill-bill-vol-1.jpg",
        rating: 4.0,
        reRead: false,
        link: "http://www.imdb.com/title/tt10288566/",
        readDate: "2025-05-04",
        kind: "movie"
    },
    {
        title: "Bonnie and Clyde",
        author: "Arthur Penn",
        cover: "assets/movies/kill-bill-vol-1.jpg",
        rating: 4.8,
        reRead: false,
        link: "http://www.imdb.com/title/tt0061418/",
        readDate: "2025-04-27",
        kind: "movie"
    },
    {
        title: "The Last Temptation of Christ",
        author: "Martin Scorsese",
        cover: "assets/movies/kill-bill-vol-1.jpg",
        rating: 4.0,
        reRead: false,
        link: "http://www.imdb.com/title/tt0095497/",
        readDate: "2025-04-21",
        kind: "movie"
    },
    {
        title: "After Hours",
        author: "Martin Scorsese",
        cover: "assets/movies/kill-bill-vol-1.jpg",
        rating: 4.7,
        reRead: false,
        link: "http://www.imdb.com/title/tt0088680/",
        readDate: "2025-04-19",
        kind: "movie"
    },
    {
        title: "Gangs of New York",
        author: "Martin Scorsese",
        cover: "assets/movies/kill-bill-vol-1.jpg",
        rating: 4.7,
        reRead: false,
        link: "http://www.imdb.com/title/tt0217505/",
        readDate: "2025-04-19",
        kind: "movie"
    },
    {
        title: "Kill Bill: Vol. 1",
        author: "Quentin Tarantino",
        cover: "assets/movies/kill-bill-vol-1.jpg",
        rating: 4.5,
        reRead: true,
        link: "http://www.imdb.com/title/tt0266697/",
        readDate: "2024-01-27",
        kind: "movie"
    },
    {
        title: "Kill Bill: Vol. 2",
        author: "Quentin Tarantino",
        cover: "assets/movies/kill-bill-vol-2.jpg",
        rating: 4,
        reRead: true,
        link: "http://www.imdb.com/title/tt0378194/",
        readDate: "2024-01-28",
        kind: "movie"
    },
    {
        title: "Reservoir Dogs",
        author: "Quentin Tarantino",
        cover: "assets/movies/reservoir-dogs.jpg",
        rating: 4,
        reRead: true,
        link: "http://www.imdb.com/title/tt0105236/",
        readDate: "2024-01-28",
        kind: "movie"
    },
    {
        title: "Everything Everywhere All at Once",
        author: "Daniel Scheinert, Daniel Kwan",
        cover: "assets/movies/everything-everywhere-all-at-once.jpg",
        rating: 4,
        link: "http://www.imdb.com/title/tt6710474/",
        readDate: "2024-10-01",
        kind: "movie"
    },
    {
        title: "John Wick",
        author: "Chad Stahelski",
        cover: "assets/movies/john-wick.jpg",
        rating: 4.5,
        reRead: true,
        link: "http://www.imdb.com/title/tt2911666/",
        readDate: "2024-11-01",
        kind: "movie"
    },
    {
        title: "Parasite",
        author: "Bong Joon-ho",
        cover: "assets/movies/parasite.jpg",
        rating: 4,
        link: "https://www.themoviedb.org/movie/496243",
        readDate: "2022-02-25",
        kind: "movie"
    },
    {
        title: "O'Brother",
        author: "Ethan et Joe Coen",
        cover: "assets/movies/o-brother.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/movie/134-o-brother-where-art-thou",
        readDate: "2025-02-21",
        kind: "movie"
    },
    {
        title: "Snatch",
        author: "Guy Ritchie",
        cover: "assets/movies/snatch.jpg",
        rating: 5,
        reRead: true,
        favorite: true,
        link: "https://www.themoviedb.org/movie/107-snatch",
        readDate: "2025-03-13",
        kind: "movie"
    },
    {
        title: "Her",
        author: "Spike Jonze",
        cover: "assets/movies/her.jpg",
        rating: 3.5,
        favorite: false,
        link: "https://www.themoviedb.org/movie/152601-her",
        readDate: "2025-03-19",
        kind: "movie"
    },
    {
        title: "Cloverfield",
        author: "Matt Reeves",
        cover: "assets/movies/cloverfield.jpg",
        rating: 1.5,
        favorite: false,
        link: "https://www.themoviedb.org/movie/7191-cloverfield",
        readDate: "2022-03-24",
        kind: "movie"
    },
    {
        title: "Lost in Translation",
        author: "Sofia Coppola",
        cover: "assets/movies/lost-in-translation.jpg",
        rating: 5,
        favorite: true,
        link: "https://www.themoviedb.org/movie/153-lost-in-translation",
        readDate: "2025-03-26",
        kind: "movie"
    },
    {
        title: "Coup de foudre à Notting Hill",
        author: "Roger Michell",
        cover: "assets/movies/notting-hill.jpg",
        rating: 4,
        favorite: false,
        link: "https://www.themoviedb.org/movie/509-notting-hill",
        readDate: "2024-04-28",
        kind: "movie"
    },

    // END OF MOVIES //
    // VINYLS \\
    {
        title: "Eastbound & Down (S1)",
        author: "Ben Best, Jody Hill, Danny McBride",
        cover: "assets/series/eastbound-and-down.jpg",
        rating: 3.5,
        link: "https://www.themoviedb.org/tv/8624-eastbound-down",
        readDate: "2025-04-23",
        kind: "Vinyl"
    },
    // END OF VINYLS \\
    // ALBUMS \\
    {
        title: "Aladdin Sane",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3HZKOk1knxrUU3y5ZIOdbz?si=61010ee7401041fb",
        kind: "albums"
    },
    {
        title: "Funhouse",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5qhXaVIC5BdE4a5Kq1FMZG?si=6b747032c4da4e97",
        kind: "albums"
    },
    {
        title: "The Man Who Sold The World",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4h9rWFWhgCSSrvIEQ0YhYG?si=23352ecbf67f45b6",
        kind: "albums"
    },
    {
        title: "David Bowie aka Space Oddity",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1ay9Z4R5ZYI2TY7WiDhNYQ?si=3a8beea060e34190",
        kind: "albums"
    },
    {
        title: "Arkhaiomelisidonophunikheratos",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 3,
        link: "https://open.spotify.com/intl-fr/album/3Sb2zffOmDnzLhDrMboXAq?si=6a9fe4969f774c2d",
        kind: "albums"
    },
    {
        title: "No Mercy for Love",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/2lSiu7i14zUsuhEmMgZEX0?si=3818cf25474841e5",
        kind: "albums"
    },    
    {
        title: "The Low End Theory",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1p12OAWwudgMqfMzjMvl2a?si=19defa6fa4a54d9e",
        kind: "albums"
    },
    {
        title: "Here are the Sonics",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4vqaqoTEbNyeeSHJA6KpdM?si=8c82b91884ec4397",
        kind: "albums"
    },
    {
        title: "The Guilded Palace of Sin",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/6VWKy5o2OcdeWa7yolazjU?si=5cfea26c58554fbb",
        kind: "albums"
    },

    {
        title: "In the Aeroplane over the Sea",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/0vVekV45lOaVKs6RZQQNob?si=bf237fda8c7e45a9",
        kind: "albums"
    },
    {
        title: "Goo",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5iYYQwB0oH9FVyVlaOXZdr?si=1e921b075c6f4485",
        kind: "albums"
    },
    {
        title: "Druks",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/2oJo7cB45gMVuRsaWNwDq2?si=c69b3876898d474b",
        kind: "albums"
    },
    {
        title: "Swimming",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5wtE5aLX5r7jOosmPhJhhk?si=22a007c77f4c4fc5",
        kind: "albums"
    },
    {
        title: "The Doors - The Doors",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1jWmEhn3ggaL6isoyLfwBn?si=a3a5526ec6fe4204",
        kind: "albums"
    },
    {
        title: "Bury Me at Makeout Creek",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3I2KkX13lHXuYqfBjSOopo?si=1e824ad77e684c94",
        kind: "albums"
    },
    {
        title: "Solid State Survivor",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5TmpFE7Xus70ko1QYGxFIe?si=f92037d9a5bc4e15",
        kind: "albums"
    },
    {
        title: "Puberty 2",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4Coa8Eb9SzjrkwWEom963Q?si=de5f6256fdac4974",
        kind: "albums"
    },
    {
        title: "Beats, Rhymes & Life",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/0EguP4tsJurU5I8ocCxdyb?si=1ebdf7e5f6614af6",
        kind: "albums"
    },
    {
        title: "Full Circle",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/26Fac6kNgB6MLeoGVkmpKN?si=f5e677050459423d",
        kind: "albums"
    },
    {
        title: "Soaring",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3piPM3MXYU1wmB9yz7UHcQ?si=82ea0eaaf7124533",
        kind: "albums"
    },
    {
        title: "The Downward Spiral",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5I7lLu8xXJfGRdFUqHaLQU?si=1d16103fcdfb43c2",
        kind: "albums"
    },
    {
        title: "Sacco e Vanzetti",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5Kh97XNvwMEk6hl4ZrOtKK?si=1495a513013a4105",
        kind: "albums"
    },
    {
        title: "Its alive",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3B2xgIcoHjm1HdHYDydoUu?si=bfc7458767c841a0",
        kind: "albums"
    },
    {
        title: "Plaisirs d'amour",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4qOpd4VHIeXU8W2yAay4XL?si=25d2c14247714602",
        kind: "albums"
    },
];
