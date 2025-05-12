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
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ucEzdVnn3vb3fKugIgedJxyykag.jpg",
        rating: 4.5,
        reRead: false,
        link: "http://www.imdb.com/title/tt0180093/",
        readDate: "2025-05-05",
        kind: "movie"
    },
    {
        title: "Drunk",
        author: "Thomas Vinterberg",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aDcIt4NHURLKnAEu7gow51Yd00Q.jpg",
        rating: 4.0,
        reRead: false,
        link: "http://www.imdb.com/title/tt10288566/",
        readDate: "2025-05-04",
        kind: "movie"
    },
    {
        title: "Bonnie and Clyde",
        author: "Arthur Penn",
        cover: "https://m.media-amazon.com/images/M/MV5BYWI3ZmM1NmEtMDk4Yi00MzYzLTk0MDctYWJlZjY4MGViNDFiXkEyXkFqcGc@._V1_FMjpg_UY2204_.jpg",
        rating: 4.8,
        reRead: false,
        link: "http://www.imdb.com/title/tt0061418/",
        readDate: "2025-04-27",
        kind: "movie"
    },
    {
        title: "The Last Temptation of Christ",
        author: "Martin Scorsese",
        cover: "https://m.media-amazon.com/images/M/MV5BZjE2MWE2NDQtMjIzYy00OGY4LTk3YjktZTE2MWExYmEzMjM5XkEyXkFqcGc@._V1_FMjpg_UX981_.jpg",
        rating: 4.0,
        reRead: false,
        link: "http://www.imdb.com/title/tt0095497/",
        readDate: "2025-04-21",
        kind: "movie"
    },
    {
        title: "After Hours",
        author: "Martin Scorsese",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eamOBurHBu0MIxohTIVcfxmZ6Z7.jpg",
        rating: 4.7,
        reRead: false,
        link: "http://www.imdb.com/title/tt0088680/",
        readDate: "2025-04-19",
        kind: "movie"
    },
    {
        title: "Gangs of New York",
        author: "Martin Scorsese",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lemqKtcCuAano5aqrzxYiKC8kkn.jpg",
        rating: 4.7,
        reRead: false,
        link: "http://www.imdb.com/title/tt0217505/",
        readDate: "2025-04-19",
        kind: "movie"
    },
    {
        title: "Jurassic Park: The Lost World",
        author: "Steven Spielberg",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jElpCJkSaRPYwIMwZY28gOKV7BK.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/fr-ca/title/tt0119567/",
        readDate: "2025-04-01",
        kind: "movie"
    },
    {
        title: "Jurassic Park",
        author: "Steven Spielberg",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fjTU1Bgh3KJu4aatZil3sofR2zC.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0107290/",
        readDate: "2025-04-01",
        kind: "movie"
    },
    {
        title: "The Grand Budapest Hotel",
        author: "Wes Anderson",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt2278388/",
        readDate: "2025-04-01",
        kind: "movie"
    },
    {
        title: "Eraserhead",
        author: "David Lynch",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mxveW3mGVc0DzLdOmtkZsgd7c3B.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0074486/",
        readDate: "2025-04-01",
        kind: "movie"
    },
    {
        title: "Twin Peaks, Fire walk with me",
        author: "David Lynch",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rol5H6loAojd6tH2VXQYEXzGQk1.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0105665",
        readDate: "2025-04-01",
        kind: "movie"
    },
    {
        title: "Muholland Drive",
        author: "David Lynch",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x7A59t6ySylr1L7aubOQEA480vM.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0166924/",
        readDate: "2025-04-01",
        kind: "movie"
    },
    {
        title: "Trainspotting",
        author: "Danny Boyle",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1jUC02qsqS2NxBMFarbIhcQtazV.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0117951/",
        readDate: "2025-03-21",
        kind: "movie"
    },
    {
        title: "The Royal Tenenbaums",
        author: "Wes Anderson",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/syaECBy6irxSgeF0m5ltGPNTWXL.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0265666/",
        readDate: "2025-03-20",
        kind: "movie"
    },
    {
        title: "Belladonna of Sadness",
        author: "Eiichi Yamamoto",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lsgaGlGVIRXLj9xRqPQgzvlcffP.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0071203/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Heat",
        author: "Wes Anderson",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0113277/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Where The Buffalo Roam",
        author: "Art Linson",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vRMeb4LN416PGvSgG0n063bc5ez.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0081748/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "The Rhum Diary",
        author: "Bruce Robinson",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uErFROiMrpk7owQWKK3bpD4hSJs.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt0376136/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Fear and Loathing in Las Vegas",
        author: "Terry Gilliam",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tisNLcMkxryU2zxhi0PiyDFqhm0.jpg",
        rating: 4.9,
        reRead: false,
        link: "https://www.imdb.com/title/tt0120669/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Blue Velvet",
        author: "David Lynch",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tzXuURjPzCqtA6eL0Cswq9wzFx0.jpg",
        rating: 4.1,
        reRead: false,
        link: "https://www.imdb.com/title/tt0090756/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Wild at Heart",
        author: "David Lynch",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uLUFI5sJIfWrBUWB2Y1dEuyvvVy.jpg",
        rating: 4.1,
        reRead: false,
        link: "https://www.imdb.com/title/tt0100935/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Lost Highway",
        author: "David Lynch",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fdTtij6H0sX9AzIjUeynh5zbfm7.jpg",
        rating: 4.1,
        reRead: false,
        link: "https://www.imdb.com/title/tt0116922/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Pokemon - The first movie",
        author: "Kunihiko Yuyama",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xPW3AeK3iQi1Zd9dCbdNLijE48o.jpg",
        rating: 4.1,
        reRead: false,
        link: "https://www.imdb.com/title/tt0190641/",
        readDate: "2024-09-09",
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
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
        rating: 3,5,
        reRead: true,
        link: "http://www.imdb.com/title/tt0105236/",
        readDate: "2024-01-28",
        kind: "movie"
    },
    {
        title: "Paris, Texas",
        author: "Wim Wenders",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mYYdCi54E2xVbUxCr03tMookv9Z.jpg",
        rating: 5,
        reRead: true,
        link: "https://www.imdb.com/fr-ca/title/tt0087884/",
        readDate: "2024-01-28",
        kind: "movie"
    },
    {
        title: "John Wick 2",
        author: "Chad Stahelski",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
        rating: 4.5,
        reRead: true,
        link: "https://www.imdb.com/title/tt4425200/",
        readDate: "2024-11-03",
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
        kind: "vinyl"
    },
    // END OF VINYLS \\
    // album \\
    {
        title: "Aladdin Sane",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3HZKOk1knxrUU3y5ZIOdbz?si=61010ee7401041fb",
        kind: "album"
    },
    {
        title: "Loveless",
        cover: "https://i.scdn.co/image/ab67616d00001e02db8e38addb58131f77b48377",
        rating: 5,
        link: "https://open.spotify.com/album/3USQKOw0se5pBNEndu82Rb?si=Lik-Z2JNRH6k5N_cJ3tNgA",
        kind: "album"
    },
    {
        title: "Funhouse",
        cover: "https://i.scdn.co/image/ab67616d00001e022c7d41ae194ef7aaaba3fee3",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5qhXaVIC5BdE4a5Kq1FMZG?si=6b747032c4da4e97",
        kind: "album"
    },
    {
        title: "The Man Who Sold The World",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4h9rWFWhgCSSrvIEQ0YhYG?si=23352ecbf67f45b6",
        kind: "album"
    },
    {
        title: "David Bowie aka Space Oddity",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1ay9Z4R5ZYI2TY7WiDhNYQ?si=3a8beea060e34190",
        kind: "album"
    },
    {
        title: "Arkhaiomelisidonophunikheratos",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 3,
        link: "https://open.spotify.com/intl-fr/album/3Sb2zffOmDnzLhDrMboXAq?si=6a9fe4969f774c2d",
        kind: "album"
    },
    {
        title: "No Mercy for Love",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/2lSiu7i14zUsuhEmMgZEX0?si=3818cf25474841e5",
        kind: "album"
    },    
    {
        title: "The Low End Theory",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1p12OAWwudgMqfMzjMvl2a?si=19defa6fa4a54d9e",
        kind: "album"
    },
    {
        title: "Here are the Sonics",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4vqaqoTEbNyeeSHJA6KpdM?si=8c82b91884ec4397",
        kind: "album"
    },
    {
        title: "The Guilded Palace of Sin",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/6VWKy5o2OcdeWa7yolazjU?si=5cfea26c58554fbb",
        kind: "album"
    },

    {
        title: "In the Aeroplane over the Sea",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/0vVekV45lOaVKs6RZQQNob?si=bf237fda8c7e45a9",
        kind: "album"
    },
    {
        title: "Goo",
        cover: "https://i.scdn.co/image/ab67616d00001e02b690940b6544fb39bf3653d2",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5iYYQwB0oH9FVyVlaOXZdr?si=1e921b075c6f4485",
        kind: "album"
    },
    {
        title: "Druks",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/2oJo7cB45gMVuRsaWNwDq2?si=c69b3876898d474b",
        kind: "album"
    },
    {
        title: "eps 1988-1991 and rare tracks",
        cover: "https://i.scdn.co/image/ab67616d00001e02140e779a7eae66860d27e79d",
        rating: 5,
        link: "https://open.spotify.com/album/3OKQrIvUbcJN9kcFLmycsk?si=X-140myRRn6zniaYJiernA",
        kind: "album"
    },
    {
        title: "Swimming",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5wtE5aLX5r7jOosmPhJhhk?si=22a007c77f4c4fc5",
        kind: "album"
    },
    {
        title: "The Doors - The Doors",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1jWmEhn3ggaL6isoyLfwBn?si=a3a5526ec6fe4204",
        kind: "album"
    },
    {
        title: "Bury Me at Makeout Creek",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3I2KkX13lHXuYqfBjSOopo?si=1e824ad77e684c94",
        kind: "album"
    },
    {
        title: "Solid State Survivor",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5TmpFE7Xus70ko1QYGxFIe?si=f92037d9a5bc4e15",
        kind: "album"
    },
    {
        title: "Puberty 2",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4Coa8Eb9SzjrkwWEom963Q?si=de5f6256fdac4974",
        kind: "album"
    },
    {
        title: "Beats, Rhymes & Life",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/0EguP4tsJurU5I8ocCxdyb?si=1ebdf7e5f6614af6",
        kind: "album"
    },
    {
        title: "Full Circle",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/26Fac6kNgB6MLeoGVkmpKN?si=f5e677050459423d",
        kind: "album"
    },
    {
        title: "Soaring",
        cover: "https://i.scdn.co/image/ab67616d00001e029e54c15c0947e01e0e7238c7",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3piPM3MXYU1wmB9yz7UHcQ?si=82ea0eaaf7124533",
        kind: "album"
    },
    {
        title: "The Downward Spiral",
        cover: "https://i.scdn.co/image/ab67616d0000b2734078c255069c0e7a2553fa4a",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5I7lLu8xXJfGRdFUqHaLQU?si=1d16103fcdfb43c2",
        kind: "album"
    },
    {
        title: "Sacco e Vanzetti",
        cover: "https://i.scdn.co/image/ab67616d00001e02bd278960137489531c98c8b1",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5Kh97XNvwMEk6hl4ZrOtKK?si=1495a513013a4105",
        kind: "album"
    },
    {
        title: "Its alive",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3B2xgIcoHjm1HdHYDydoUu?si=bfc7458767c841a0",
        kind: "album"
    },
    {
        title: "Plaisirs d'amour",
        cover: "assets/podcasts/floodcast.jpg",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4qOpd4VHIeXU8W2yAay4XL?si=25d2c14247714602",
        kind: "album"
    },
];
