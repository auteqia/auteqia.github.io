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
        title: "L'herbier merveilleux",
        author: "Jean-Michel Othoniel",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560189765i/46252156.jpg",
        rating: 5,
        reRead: false,
        link: "https://www.goodreads.com/book/show/46252156-l-herbier-merveilleux",
        readDate: "2025-05-18",
        kind: "book"
    },
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
        title: "Une Femme Est Une Femme",
        author: "Jean-Luc Godard",
        cover: "https://m.media-amazon.com/images/M/MV5BMmIwMDg0N2EtZTRiZi00MTA2LWE1MDItOTJjNjA2MDViZDU1XkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg",
        rating: 4.2,
        reRead: false,
        link: "https://www.imdb.com/title/tt0055572/",
        readDate: "2025-05-19",
        kind: "movie"
    },
    {
        title: "Cléo de 5 à 7",
        author: "Agnès Varda",
        cover: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/oelBStY4xpguaplRv15P3Za7Xsr.jpg",
        rating: 4.3,
        reRead: false,
        link: "https://www.imdb.com/title/tt0055852/",
        readDate: "2024-06-19",
        kind: "movie"
    },
    {
        title: "Drunk",
        author: "Thomas Vinterberg",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aDcIt4NHURLKnAEu7gow51Yd00Q.jpg",
        rating: 4.2,
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
        rating: 4.2,
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
        reRead: true,
        link: "https://www.imdb.com/fr-ca/title/tt0119567/",
        readDate: "2025-04-01",
        kind: "movie"
    },
    {
        title: "Jurassic Park",
        author: "Steven Spielberg",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fjTU1Bgh3KJu4aatZil3sofR2zC.jpg",
        rating: 4.7,
        reRead: true,
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
        rating: 4,
        reRead: false,
        link: "https://www.imdb.com/title/tt0105665",
        readDate: "2025-04-01",
        kind: "movie"
    },
    {
        title: "Muholland Drive",
        author: "David Lynch",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x7A59t6ySylr1L7aubOQEA480vM.jpg",
        rating: 4.2,
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
        reRead: true,
        link: "https://www.imdb.com/title/tt0117951/",
        readDate: "2025-03-21",
        kind: "movie"
    },
    {
        title: "The Royal Tenenbaums",
        author: "Wes Anderson",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/syaECBy6irxSgeF0m5ltGPNTWXL.jpg",
        rating: 4.7,
        reRead: true,
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
        title: "Good Morning England",
        author: "Richard Curtis",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i3nKXWYOpC0dbIbAe4V92ocet64.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/title/tt1131729",
        readDate: "2024-06-20",
        kind: "movie"
    },
    {
        title: "Phantom of the Paradise",
        author: "Brian De Palma",
        cover: "https://m.media-amazon.com/images/M/MV5BZDRjN2JkMDAtMTNjNS00ZDFhLTk3NDgtMzhjOGE3Zjg4NzY3XkEyXkFqcGc@._V1_FMjpg_UX1204_.jpg",
        rating: 4.7,
        reRead: false,
        link: "https://www.imdb.com/fr/title/tt0071994/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Heat",
        author: "Michael Mann",
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
        reRead: true,
        link: "https://www.imdb.com/title/tt0120669/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "28 days later",
        author: "Danny Boyle",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sQckQRt17VaWbo39GIu0TMOiszq.jpg",
        rating: 4.9,
        reRead: false,
        link: "https://www.themoviedb.org/movie/170-28-days-later",
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
        reRead: true,
        link: "https://www.imdb.com/title/tt0100935/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Lost Highway",
        author: "David Lynch",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fdTtij6H0sX9AzIjUeynh5zbfm7.jpg",
        rating: 4.1,
        reRead: true,
        link: "https://www.imdb.com/title/tt0116922/",
        readDate: "2024-09-09",
        kind: "movie"
    },
    {
        title: "Pokemon - The first movie",
        author: "Kunihiko Yuyama",
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xPW3AeK3iQi1Zd9dCbdNLijE48o.jpg",
        rating: 4.1,
        reRead: true,
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
        rating: 3.5,
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


    
    // album \\
    {
        title: "Aladdin Sane",
        cover: "https://i.scdn.co/image/ab67616d00001e025db6dbaca8678527e643a866",
        rating: 5,
        author: "David Bowie",
        link: "https://open.spotify.com/intl-fr/album/3HZKOk1knxrUU3y5ZIOdbz?si=61010ee7401041fb",
        kind: "album"
    },
    {
        title: "Loveless",
        cover: "https://i.scdn.co/image/ab67616d00001e02db8e38addb58131f77b48377",
        rating: 5,
        author: "My Bloody Valentine",
        link: "https://open.spotify.com/album/3USQKOw0se5pBNEndu82Rb?si=Lik-Z2JNRH6k5N_cJ3tNgA",
        kind: "album"
    },
    {
        title: "Funhouse",
        cover: "https://i.scdn.co/image/ab67616d00001e022c7d41ae194ef7aaaba3fee3",
        rating: 5,
        author: "The Stooges",
        link: "https://open.spotify.com/intl-fr/album/5qhXaVIC5BdE4a5Kq1FMZG?si=6b747032c4da4e97",
        kind: "album"
    },
    {
        title: "The Man Who Sold The World",
        cover: "https://i.scdn.co/image/ab67616d00001e0246926e777bd6665f03128d29",
        rating: 5,
        author: "David Bowie",
        link: "https://open.spotify.com/intl-fr/album/4h9rWFWhgCSSrvIEQ0YhYG?si=23352ecbf67f45b6",
        kind: "album"
    },
    {
        title: "David Bowie aka Space Oddity",
        cover: "https://i.scdn.co/image/ab67616d00001e023395f3e809dfbc2b1101d464",
        rating: 5,
        author: "David Bowie",
        link: "https://open.spotify.com/intl-fr/album/1ay9Z4R5ZYI2TY7WiDhNYQ?si=3a8beea060e34190",
        kind: "album"
    },
    {
        title: "Arkhaiomelisidonophunikheratos",
        cover: "https://i.scdn.co/image/ab67616d00001e02a04ab67781fd7f5fcd9f243f",
        rating: 3,
        author: "Satanicpornocultshop",
        link: "https://open.spotify.com/intl-fr/album/3Sb2zffOmDnzLhDrMboXAq?si=6a9fe4969f774c2d",
        kind: "album"
    },
    {
        title: "No Mercy for Love",
        cover: "https://i.scdn.co/image/ab67616d00001e02cde247dcf57d9e5d4974ed34",
        rating: 5,
        author: "CANNIBALE",
        link: "https://open.spotify.com/intl-fr/album/2lSiu7i14zUsuhEmMgZEX0?si=3818cf25474841e5",
        kind: "album"
    },    
    {
        title: "The Low End Theory",
        cover: "https://i.scdn.co/image/ab67616d00001e02f38c6b37a21334e22005b1f7",
        rating: 5,
        author: "A Tribe Called Quest",
        link: "https://open.spotify.com/intl-fr/album/1p12OAWwudgMqfMzjMvl2a?si=19defa6fa4a54d9e",
        kind: "album"
    },
    {
        title: "Here are the Sonics",
        cover: "https://i.scdn.co/image/ab67616d00001e023b8f9c148e9eead1143c78e6",
        rating: 5,
        author: "The Sonics",
        link: "https://open.spotify.com/intl-fr/album/4vqaqoTEbNyeeSHJA6KpdM?si=8c82b91884ec4397",
        kind: "album"
    },
    {
        title: "The Gilded Palace of Sin",
        cover: "https://i.scdn.co/image/ab67616d0000b27353ba02e4c3b1b6a297002afa",
        rating: 5,
        author: "The Flying Burrito Brothers",
        link: "https://open.spotify.com/intl-fr/album/6VWKy5o2OcdeWa7yolazjU?si=5cfea26c58554fbb",
        kind: "album"
    },

    {
        title: "In the Aeroplane over the Sea",
        cover: "https://i.scdn.co/image/ab67616d00001e02589ce9a911c6e65b1f80c558",
        rating: 5,
        author: "Neutral Milk Hotel",
        link: "https://open.spotify.com/intl-fr/album/0vVekV45lOaVKs6RZQQNob?si=bf237fda8c7e45a9",
        kind: "album"
    },
    {
        title: "Goo",
        cover: "https://i.scdn.co/image/ab67616d00001e02b690940b6544fb39bf3653d2",
        rating: 5,
        author: "Sonic Youth",
        link: "https://open.spotify.com/intl-fr/album/5iYYQwB0oH9FVyVlaOXZdr?si=1e921b075c6f4485",
        kind: "album"
    },
    {
        title: "Druks",
        cover: "https://i.scdn.co/image/ab67616d00001e022e261a0b1b19d0ff95e346b3",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/intl-fr/album/2oJo7cB45gMVuRsaWNwDq2?si=c69b3876898d474b",
        kind: "album"
    },
    {
        title: "eps 1988-1991 and rare tracks",
        cover: "https://i.scdn.co/image/ab67616d00001e02140e779a7eae66860d27e79d",
        rating: 5,
        author: "My Bloody Valentine",
        link: "https://open.spotify.com/album/3OKQrIvUbcJN9kcFLmycsk?si=X-140myRRn6zniaYJiernA",
        kind: "album"
    },
    {
        title: "Swimming",
        cover: "https://i.scdn.co/image/ab67616d00001e02175c577a61aa13d4fb4b6534",
        rating: 5,
        author: "Mac Miller",
        link: "https://open.spotify.com/intl-fr/album/5wtE5aLX5r7jOosmPhJhhk?si=22a007c77f4c4fc5",
        kind: "album"
    },
    {
        title: "The Doors",
        cover: "https://i.scdn.co/image/ab67616d00001e025b96a8c5d61be8878452f8f1",
        rating: 5,
        author: "The Doors",
        link: "https://open.spotify.com/intl-fr/album/1jWmEhn3ggaL6isoyLfwBn?si=a3a5526ec6fe4204",
        kind: "album"
    },
    {
        title: "Bury Me at Makeout Creek",
        cover: "https://i.scdn.co/image/ab67616d00001e02e90db8983ebd43b776694179",
        rating: 5,
        author: "Mitski",
        link: "https://open.spotify.com/intl-fr/album/3I2KkX13lHXuYqfBjSOopo?si=1e824ad77e684c94",
        kind: "album"
    },
    {
        title: "Solid State Survivor",
        cover: "https://i.scdn.co/image/ab67616d00001e02c70aa05c55b6fb116863f6f5",
        rating: 5,
        author: "Yellow Magic Orchestra",
        link: "https://open.spotify.com/intl-fr/album/5TmpFE7Xus70ko1QYGxFIe?si=f92037d9a5bc4e15",
        kind: "album"
    },
    {
        title: "Puberty 2",
        cover: "https://i.scdn.co/image/ab67616d00001e0229eb9ad9b9af34bbb54eb053",
        rating: 5,
        author: "Mitski",
        link: "https://open.spotify.com/intl-fr/album/4Coa8Eb9SzjrkwWEom963Q?si=de5f6256fdac4974",
        kind: "album"
    },
    {
        title: "Beats, Rhymes & Life",
        cover: "https://i.scdn.co/image/ab67616d00001e02e3b93c08d98f92dc3ab0146a",
        rating: 5,
        author: "A Tribe Called Quest",
        link: "https://open.spotify.com/intl-fr/album/0EguP4tsJurU5I8ocCxdyb?si=1ebdf7e5f6614af6",
        kind: "album"
    },

    
    {
        title: "Mirage",
        cover: "https://i.scdn.co/image/ab67616d00001e0211537abd008a150b3f88dcaf",
        rating: 5,
        author: "Camel",
        link: "https://open.spotify.com/album/2DZEwt8Lhz6PuqxsJWF7Ap?si=nj6WFi71R92obD4pdH3VKg",
        kind: "album"
    },
    {
        title: "Masana Temples",
        cover: "https://i.scdn.co/image/ab67616d00001e02a765313b610423c0f13aa59e",
        rating: 5,
        author: "Kikagaku Moyo",
        link: "https://open.spotify.com/album/5g5l9entA4bTztfpLJd1kS?si=lRMv3fZSSX2IrtQRGyHwyg",
        kind: "album"
    },
    {
        title: "Full Circle",
        cover: "https://i.scdn.co/image/ab67616d00001e02a217433125ab8324ce5f7e09",
        rating: 5,
        author: "The Doors",
        link: "https://open.spotify.com/intl-fr/album/26Fac6kNgB6MLeoGVkmpKN?si=f5e677050459423d",
        kind: "album"
    },
    {
        title: "Sibérie m'était contée",
        cover: "https://i.scdn.co/image/ab67616d00001e02f297cbcd2d78559c38273e35",
        rating: 5,
        author: "Manu Chao",
        link: "https://open.spotify.com/album/7EZSOlWZFjsLLZkDwtFCPS?si=Qqfs4a3RQYGs1X1UgfaTcQ",
        kind: "album"
    },
    {
        title: "Contemporary Movement",
        cover: "https://i.scdn.co/image/ab67616d00001e02f2905338b1e6e07e167ee305",
        rating: 5,
        author: "Duster",
        link: "https://open.spotify.com/album/6CYyrh3J08jXacgo9wHwsU?si=OBIYn1QdSICoWQG1UT-JPg",
        kind: "album"
    },
    {
        title: "One Step Beyond",
        cover: "https://i.scdn.co/image/ab67616d00001e026238b055ec362d2eea9beb26",
        rating: 5,
        author: "Madness",
        link: "https://open.spotify.com/album/0scFCb0HjpQvWaJ7fu16hn?si=29dmeqtKRI6MMM2Zblm7fA",
        kind: "album"
    },
    {
        title: "Be the Cowboy",
        cover: "https://i.scdn.co/image/ab67616d00001e02c428f67b4a9b7e1114dfc117",
        rating: 5,
        author: "Mitski",
        link: "https://open.spotify.com/album/42cH7mrkfljkqkxA2Ip9Xq?si=Zd_BhXz8R6ClaxVcb-LegA",
        kind: "album"
    },
    {
        title: "(III)",
        cover: "https://i.scdn.co/image/ab67616d00001e028c4fcffc07dd98ad89c0f383",
        rating: 5,
        author: "Crystal Castles",
        link: "https://open.spotify.com/album/2KYBzzK8L9yvBe0k5GeoD8?si=DSRw2NNLSv6KMz6EpceGww",
        kind: "album"
    },
    {
        title: "Lush",
        cover: "https://i.scdn.co/image/ab67616d00001e0218bbdba0da26e4ae050fb1b8",
        rating: 5,
        author: "Mitski",
        link: "https://open.spotify.com/album/22MICAVuz34zzqm4Se5Lga?si=yhGLr03lSV2xJV8xh6kd6g8",
        kind: "album"
    },
    {
        title: "Pyramid",
        cover: "https://i.scdn.co/image/ab67616d00001e0242165edf668b41cb531722b0",
        rating: 5,
        author: "The Alan Parsons Project",
        link: "https://open.spotify.com/album/3GwhihLKs0eZmgUUrshE9k?si=5bf81ea8e36a4b9b",
        kind: "album"
    },
    {
        title: "OIL OF EVERY PEARL'S UN-INSIDES",
        cover: "https://i.scdn.co/image/ab67616d00001e029517eea594dfb828ec793e09",
        rating: 5,
        author: "Sophie",
        link: "https://open.spotify.com/album/23lnmHhZwyercCJhmyPXYN?si=7qhdjV7nTp2qNlfyOk5aJA",
        kind: "album"
    },
    {
        title: "The Fat of The Land",
        cover: "https://i.scdn.co/image/ab67616d00001e028688e410538bc27972791f4c",
        rating: 5,
        author: "The Prodigy",
        link: "https://open.spotify.com/album/4fdgcEVMdJe0KVgupMNJAP?si=KCpxnGK0S7aF-XBANk2CpA",
        kind: "album"
    },
    {
        title: "Superunknown",
        cover: "https://i.scdn.co/image/ab67616d00001e02ae6d8e36136353d550b2587d",
        rating: 5,
        author: "Soundgarden",
        link: "https://open.spotify.com/album/29sTacnS0qA9xri6YS8xLA?si=I92NpNDDT9at3DdOYdR-0Q",
        kind: "album"
    },
    {
        title: "Experience",
        cover: "https://i.scdn.co/image/ab67616d00001e028cd856419c4f5ac9994c64fe",
        rating: 5,
        author: "The Prodigy",
        link: "https://open.spotify.com/album/2hEyYIrm4e6gVgfaYLY00x?si=fNhxTJP0S0aSwH7nreBIUQ",
        kind: "album"
    },
    {
        title: "Rock 'n' Roll Animal",
        cover: "https://i.scdn.co/image/ab67616d00001e026f45f8b4aaf3ee06469c9f5b",
        rating: 5,
        author: "Lou Reed",
        link: "https://open.spotify.com/album/7ibv6MJHfkq0al0QRmoCd6?si=99zZhi5vRjy1sFQSd1RDrg",
        kind: "album"
    },
    {
        title: "Transformer",
        cover: "https://i.scdn.co/image/ab67616d00001e02d55149748dca0e5a1f40778e",
        rating: 5,
        author: "Lou Reed",
        link: "https://open.spotify.com/album/5SqbMEyAt8332ISGiLX0St?si=8j_Pc0BxRG2lfZZeAjMrRA",
        kind: "album"
    },
    {
        title: "New York",
        cover: "https://i.scdn.co/image/ab67616d00001e026386bf63d1326306c9b168ef",
        rating: 5,
        author: "Lou Reed",
        link: "https://open.spotify.com/album/7xGqf9DddW89cg7m6zX88t?si=2WRQSy_OQ8ONWS7jIT59tA",
        kind: "album"
    },
    {
        title: "Lust For Life",
        cover: "https://i.scdn.co/image/ab67616d00001e024aa5f679427e35409a06f225",
        rating: 5,
        author: "Iggy Pop",
        link: "https://open.spotify.com/album/2jnV6ytZOmt71iEC5xHEYz?si=UGiYTvJoS2W22eukQn-DQw",
        kind: "album"
    },
    {
        title: "The Idiot",
        cover: "https://i.scdn.co/image/ab67616d00001e022023cfc4febdbe8213a41f8a",
        rating: 5,
        author: "Iggy Pop",
        link: "https://open.spotify.com/album/78UazygH85UAB0qXqQpzg6?si=ECxctRs3S9q7_syvHONApQ",
        kind: "album"
    },
    {
        title: "10000 lépés",
        cover: "https://i.scdn.co/image/ab67616d00001e021a8105b6d15067a8a81435c2",
        rating: 5,
        author: "Omega",
        link: "https://open.spotify.com/album/5GVrqNePT3Rek05os9fegp?si=KK2xBDnaQbi92-uO35UGXQ",
        kind: "album"
    },
    {
        title: "Mothership",
        cover: "https://i.scdn.co/image/ab67616d00001e0222f1b6c28ce5735646b2e569",
        rating: 5,
        author: "Led Zeppelin",
        link: "https://open.spotify.com/album/4wExFfncaUIqSgoxnqa3Eh?si=DxABFJLwRYq2LssHDM23JA",
        kind: "album"
    },
    {
        title: "Amigos",
        cover: "https://i.scdn.co/image/ab67616d00001e029dbda89d303ef548c712570f",
        rating: 5,
        author: "Santana",
        link: "https://open.spotify.com/album/1xlThGcidi851d3NwHfjQH?si=3O4StAlcQReR-koH53jeKA",
        kind: "album"
    },

    {
        title: "Soaring",
        cover: "https://i.scdn.co/image/ab67616d00001e029e54c15c0947e01e0e7238c7",
        rating: 5,
        author: "Puzzle",
        link: "https://open.spotify.com/intl-fr/album/3piPM3MXYU1wmB9yz7UHcQ?si=82ea0eaaf7124533",
        kind: "album"
    },
    {
        title: "The Downward Spiral",
        cover: "https://i.scdn.co/image/ab67616d0000b2734078c255069c0e7a2553fa4a",
        rating: 5,
        author: "Nine Inch Nails",
        link: "https://open.spotify.com/intl-fr/album/5I7lLu8xXJfGRdFUqHaLQU?si=1d16103fcdfb43c2",
        kind: "album"
    },
    {
        title: "Sacco e Vanzetti",
        cover: "https://i.scdn.co/image/ab67616d00001e02bd278960137489531c98c8b1",
        rating: 5,
        author: "Ennio Morricone",
        link: "https://open.spotify.com/intl-fr/album/5Kh97XNvwMEk6hl4ZrOtKK?si=1495a513013a4105",
        kind: "album"
    },
    {
        title: "Its alive",
        cover: "https://i.scdn.co/image/ab67616d00001e025fb94199e9cef141cba5c038",
        rating: 5,
        author: "La Luz",
        link: "https://open.spotify.com/intl-fr/album/3B2xgIcoHjm1HdHYDydoUu?si=bfc7458767c841a0",
        kind: "album"
    },
    {
        title: "Plaisirs d'amour",
        cover: "https://i.scdn.co/image/ab67616d00001e026219cb49fe3b85a56c416e5e",
        rating: 5,
        author: "René Aubry",
        link: "https://open.spotify.com/intl-fr/album/4qOpd4VHIeXU8W2yAay4XL?si=25d2c14247714602",
        kind: "album"
    },
    {
        title: "The Smiths",
        cover: "https://i.scdn.co/image/ab67616d00001e02a09b231129ab1cb1a6efc57f",
        rating: 5,
        author: "The Smiths",
        link: "https://open.spotify.com/album/6cI1XoZsOhkyrCwtuI70CN?si=rYF7oUjrQg2TVdYhpD1EBw",
        kind: "album"
    },
    {
        title: "R Plus Seven",
        cover: "https://i.scdn.co/image/ab67616d00001e02550e1f33331271473e05b0f0",
        rating: 5,
        author: "Oneohtrix Point Never",
        link: "https://open.spotify.com/album/6MEswIpaIGVN8M68FGr550?si=VVB_MMZ2TR6KiqVt_zeITg",
        kind: "album"
    },
    {
        title: "Surrender",
        cover: "https://i.scdn.co/image/ab67616d00001e0229dc59785f4c767fcbfc9e38",
        rating: 5,
        author: "The Chemical Brothers",
        link: "https://open.spotify.com/album/1QJP73UumgERuzp3yJSXw3?si=WC0PeknAQMypuS2G06yIyA",
        kind: "album"
    },
    {
        title: "La Planète Sauvage",
        cover: "https://i.scdn.co/image/ab67616d00001e02da435c0e7c069c4b8cd90eff",
        rating: 5,
        author: "Alain Goraguer",
        link: "https://open.spotify.com/album/4BF1mMXkDo1NcJCgEBXKEk?si=3V72a01FT6-x8OU7BrNHtg",
        kind: "album"
    },
    {
        title: "1584660650",
        cover: "https://i.scdn.co/image/ab67616d00001e024fa0196ad0b1435563fbd4ab",
        rating: 5,
        author: "Fine-Sir-1584660650",
        link: "https://open.spotify.com/album/4JY1a8QLSJD0JNSOZ2ekJ2?si=OSkXs36ETGKL2egce4SfWw",
        kind: "album"
    },
    {
        title: "Crystal Castles",
        cover: "https://i.scdn.co/image/ab67616d00001e02b01fea159227ea845c2bd72e",
        rating: 5,
        author: "Crystal Castles",
        link: "https://open.spotify.com/album/3LnVvIeiLCngvwEnbdxwCT?si=FCs_ESPuRt6YxjlbXZWFPw",
        kind: "album"
    },
    {
        title: "Rebell Yell",
        cover: "https://i.scdn.co/image/ab67616d00001e02ea07dca8b4ca808c1e5b17fb",
        rating: 5,
        author: "Billy Idol",
        link: "https://open.spotify.com/album/2FZNWUmgRoP8uJZBaHJdfj?si=Zs0zvPmnSAmEIBsI2Yk8bA",
        kind: "album"
    },
    {
        title: "Alive 2007",
        cover: "https://i.scdn.co/image/ab67616d00001e02673288fb985e5c194536ae27",
        rating: 5,
        author: "Daft Punk",
        link: "https://open.spotify.com/album/7u6zL7kqpgLPISZYXNTgYk?si=ErzPjP0ARDK_2CXet0udCg",
        kind: "album"
    },
    {
        title: "Cosmic Messenger",
        cover: "https://i.scdn.co/image/ab67616d00001e02b5d4374a23ae05bbc834f78d",
        rating: 5,
        author: "Jean-Luc Ponty",
        link: "https://open.spotify.com/album/6EfLu75i2jqhN4s4xlqh6m?si=L1nB73J_R0CtfwTMKULNIA",
        kind: "album"
    },
    {
        title: "Enigmatic Ocean",
        cover: "https://i.scdn.co/image/ab67616d00001e024b5090050309c67110e2640a",
        rating: 5,
        author: "Jean-Luc Ponty",
        link: "https://open.spotify.com/album/7Der8eY3aiNi3cieeMBRFB?si=QL0w_a7JQQmHViDVFW6TqA",
        kind: "album"
    },
    {
        title: "Mystical Adventures",
        cover: "https://i.scdn.co/image/ab67616d00001e02c1426c6c8d232c3f989d1eea",
        rating: 5,
        author: "Jean-Luc Ponty",
        link: "https://open.spotify.com/album/3sRDigE2YdvQxHHJBYzVOT?si=rEC9XF5wQZ-Ly4h9iALegw",
        kind: "album"
    },
    {
        title: "More Than Meets The Ear",
        cover: "https://i.scdn.co/image/ab67616d00001e025a2b32c26554809c65fcebdd",
        rating: 5,
        author: "Jean-Luc Ponty",
        link: "https://open.spotify.com/album/5iBrOoF7NWcWAwqvUlp3vF?si=9STQkJfsQy-XRKhW-cYuRw",
        kind: "album"
    },
    {
        title: "The Gift Of Time",
        cover: "https://i.scdn.co/image/ab67616d00001e022a3051e76d4d80294d63dd70",
        rating: 5,
        author: "Jean-Luc Ponty",
        link: "https://open.spotify.com/album/62Qyi10NujVY0LGOAgA5nc?si=O2qPtBnwRYukAS11iBuecQ",
        kind: "album"
    },
    {
        title: "It Began In Afrika",
        cover: "https://i.scdn.co/image/ab67616d00001e02c2a3ee68e62d2c2cf9853576",
        rating: 5,
        author: "The Chemical Brothers",
        link: "https://open.spotify.com/album/1XThG0D6l2avQMhMSXtY1P?si=7500gbHGQOiXoQ8cCcQftg",
        kind: "album"
    },
    {
        title: "My Generation",
        cover: "https://i.scdn.co/image/ab67616d00001e0234658b1827b64a1d4d5a5ca9",
        rating: 5,
        author: "The Who",
        link: "https://open.spotify.com/album/6Oc6Ok1Oawu8lRkjmD4mXy?si=kN63MpSXTd-z2aTlqEw0vg",
        kind: "album"
    },
    {
        title: "Herb Alpert Presents Sergio Mendes & Brasil '66",
        cover: "https://i.scdn.co/image/ab67616d00001e02669997c50e4896d14c469a02",
        rating: 5,
        author: "Herb Alpert",
        link: "https://open.spotify.com/album/0bPYHZxK1WgszwiNnCa79U?si=2vbEr6zFR2iKWYhRMjH1eQ",
        kind: "album"
    },
    {
        title: "Twoism",
        cover: "https://i.scdn.co/image/ab67616d00001e02f49a49ce8736c14f4d4990fb",
        rating: 5,
        author: "Boards of Canada",
        link: "https://open.spotify.com/album/46YfeDd8YhuAcywdxZkRqf?si=1F1P-UjQTIu9pTDXUv8RYQ",
        kind: "album"
    },
    {
        title: "Mezzanine",
        cover: "https://i.scdn.co/image/ab67616d00001e022fcb0a3c7a66e516b11cd26e",
        rating: 5,
        author: "Massive Attack",
        link: "https://open.spotify.com/album/49MNmJhZQewjt06rpwp6QR?si=CAocdMtRQB6xMVTbkgmjcw",
        kind: "album"
    },
    {
        title: "Dance Hall Style",
        cover: "https://i.scdn.co/image/ab67616d00001e020ddf1762d8c79514aaf317af",
        rating: 5,
        author: "Horace Handy",
        link: "https://open.spotify.com/album/7rjTtjpSy2SzL8cydh1W5s?si=NZGf_kUVQBaUzlBWVpBJKQ",
        kind: "album"
    },
    {
        title: "Deathconsciousness",
        cover: "https://i.scdn.co/image/ab67616d00001e02a54f2b401501b3569990c256",
        rating: 5,
        author: "Have A Nice Life",
        link: "https://open.spotify.com/album/6MH3CAXp8AN8ELrbex18dM?si=rCrFI7A8Skqp2fqU_GzCkQ",
        kind: "album"
    },
    {
        title: "Never Mind The Bollocks, Here's The Sex Pistols",
        cover: "https://i.scdn.co/image/ab67616d00001e0260d17b40194e90e1dd6bc5fd",
        rating: 5,
        author: "Sex Pistols",
        link: "https://open.spotify.com/album/17lv1Ruxq46ZK5xAINAX8J?si=TgLXqqzoS1ewV0lMT6_mCg",
        kind: "album"
    },
    {
        title: "In The Court Of The Crimson King",
        cover: "https://i.scdn.co/image/ab67616d00001e02da7b326bd7ffa7b6b95b0660",
        rating: 5,
        author: "King Crimson",
        link: "https://open.spotify.com/album/75ol9OP8bJaRqzGimpFHDm?si=V7M_LdjIS2GH5AGjtPOvyA",
        kind: "album"
    },
    {
        title: "Parachute",
        cover: "https://i.scdn.co/image/ab67616d00001e0277fb589d6b097775f1ce3dcd",
        rating: 5,
        author: "The Pretty Things",
        link: "https://open.spotify.com/album/1mz6AZJZanmgynkVQgflMK?si=34alwmBrQvWilRyjLXdyVA",
        kind: "album"
    },
    {
        title: "She Wants Revenge",
        cover: "https://i.scdn.co/image/ab67616d00001e02717f38200c8370df83f6364b",
        rating: 5,
        author: "She Wants Revenge",
        link: "https://open.spotify.com/album/3S41D3x5NUwlVOuUNwoZ16?si=n5USH2MnS_GaE6lC62CZSg",
        kind: "album"
    },
    {
        title: "Up And Down",
        cover: "https://i.scdn.co/image/ab67616d00001e0256f3f4957adbe9677d92f015",
        rating: 5,
        author: "She Wants Revenge",
        link: "https://open.spotify.com/album/5vhJlo8GF4hfoFexjo3zZu?si=Xy4dMMQNSt6-X_szs5SU8Q",
        kind: "album"
    },
    {
        title: "Ice 'n' Green",
        cover: "https://i.scdn.co/image/ab67616d00001e02d57a0c3e3023c3e05d061960",
        rating: 5,
        author: "Ice Mc",
        link: "https://open.spotify.com/album/3fSQDORWIQuhjPWZOptkML?si=FBq39oLwRjix70befvVXDw",
        kind: "album"
    },
    {
        title: "Inside",
        cover: "https://i.scdn.co/image/ab67616d00001e0262929dd943cfaaa0a6f0879c",
        rating: 5,
        author: "Eloy",
        link: "https://open.spotify.com/album/6mnhtrfvfW4kW6XrxCsD3T?si=431HAZdDQQqJ5k8CYJ7RvA",
        kind: "album"
    },
    {
        title: "Led Zeppelin II",
        cover: "https://i.scdn.co/image/ab67616d00001e02f396ea414b735ef23e2ed1a9",
        rating: 5,
        author: "Led Zeppelin",
        link: "https://open.spotify.com/album/58MQ0PLijVHePUonQlK76Y?si=TRjRZiZ-Qt-rvqlAMKbvqw",
        kind: "album"
    },
    {
        title: "Led Zeppelin III",
        cover: "https://i.scdn.co/image/ab67616d00001e0290a50cfe99a4c19ff3cbfbdb",
        rating: 5,
        author: "Led Zeppelin",
        link: "https://open.spotify.com/album/6P5QHz4XtxOmS5EuiGIPut?si=xD6mjjclS2WD9qGLC7PVNg",
        kind: "album"
    },
    {
        title: "Led Zeppelin IV",
        cover: "https://i.scdn.co/image/ab67616d00001e024509204d0860cc0cc67e83dc",
        rating: 5,
        author: "Led Zeppelin",
        link: "https://open.spotify.com/album/5EyIDBAqhnlkAHqvPRwdbX?si=nxtTnclWTy6f9wonxql75Q",
        kind: "album"
    },
    {
        title: "Silent Cries And Mighty Echoes",
        cover: "https://i.scdn.co/image/ab67616d00001e02b4fb31db30c04a9e2f7626eb",
        rating: 5,
        author: "Eloy",
        link: "https://open.spotify.com/album/2r2xRCQbhNanjDfa6YunIR?si=3WLms4qCRrmrnI9Z7XNrEw",
        kind: "album"
    },
    {
        title: "choke enough",
        cover: "https://i.scdn.co/image/ab67616d00001e0282cd01439c783e21898a9f84",
        rating: 5,
        author: "oklou",
        link: "https://open.spotify.com/album/4TQqRcEliluExEwsmWVenF?si=X5gM6X2oT0GO-K660wLHnQ",
        kind: "album"
    },
    {
        title: "Perfectly Blue",
        cover: "https://i.scdn.co/image/ab67616d00001e0209e4f5566d3d59864544b568",
        rating: 5,
        author: "RIP Swirl",
        link: "https://open.spotify.com/album/41QqoYgZKBZyd74WtB0vq2?si=bmFYJHRRQNCwsq-FnCYs5g",
        kind: "album"
    },
    {
        title: "The Turn Of A Friendly Card",
        cover: "https://i.scdn.co/image/ab67616d00001e02b4d76c01778a41bcd993f550",
        rating: 5,
        author: "The Alan Parsons Project",
        link: "https://open.spotify.com/album/1yPaTI4UxwbhZYbRkyZrFR?si=K3JNyC3_QxagpxRm5dyqJQ",
        kind: "album"
    },
    {
        title: "Homework",
        cover: "https://i.scdn.co/image/ab67616d00001e028ac778cc7d88779f74d33311",
        rating: 5,
        author: "Daft Punk",
        link: "https://open.spotify.com/album/5uRdvUR7xCnHmUW8n64n9y?si=33L7gQ2ISzWJlerFIB52JQ",
        kind: "album"
    },
    {
        title: "Herp Alpert & the Tijuana Brass",
        cover: "https://i.scdn.co/image/ab67616d00001e021586c0813e5ce5559d696d17",
        rating: 5,
        author: "Herp Alpert",
        link: "https://open.spotify.com/album/1gKrnjjDM8R3RD7iwg0tGM?si=7iMLBO6ARku9yUHj2jJFug",
        kind: "album"
    },
    {
        title: "Steal This Album!",
        cover: "https://i.scdn.co/image/ab67616d00001e027cf4c0d42c5b62c9deebdcd8",
        rating: 5,
        author: "System of a Down",
        link: "https://open.spotify.com/album/6lA1sGw7eCv27bcpd5E0wT?si=ubPAR9V-QkOZjFsZ1zpx_Q",
        kind: "album"
    },
    {
        title: "EUSEXUA",
        cover: "https://i.scdn.co/image/ab67616d00001e02bd5d937814595eeb925ab03f",
        rating: 5,
        author: "FKA Twigs",
        link: "https://open.spotify.com/album/3o1TOhMkU5FFMSJMDhXfdF?si=B0V64BADRuaAMuFnjj9RGw",
        kind: "album"
    },





    
    {
        title: "The Moon and the Melodies",
        cover: "https://i.scdn.co/image/ab67616d00001e02f510b1ab6184d8eecf6ba4bc",
        rating: 5,
        author: "Cocteau Twins",
        link: "https://open.spotify.com/album/3qEiWhSF2HO1NhVJVsGyZm?si=TCHXHszjSE2PyDj3c8ikwA",
        kind: "album"
    },
    {
        title: "Come To Daddy",
        cover: "https://i.scdn.co/image/ab67616d00001e0223ac84a525286001770abc8e",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/6sIEBpy5gl3DqC6KPasPpx?si=RSoqnkBySH65GzWJ_cgelw",
        kind: "album"
    },
    {
        title: "Richard D. James Album",
        cover: "https://i.scdn.co/image/ab67616d00001e021298f1ce7b0e4fb6a3caba57",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/77Lae5VorRCNpgZFMW8yRO?si=_4TnvI58SwiUpBS7pekzMA",
        kind: "album"
    },
    {
        title: "Chick Habit",
        cover: "https://i.scdn.co/image/ab67616d00001e020cd486a347167c9c39d92342",
        rating: 5,
        author: "April March",
        link: "https://open.spotify.com/album/4Xn3fY5S63b736UT4MN4mk?si=jcs2j2g8TDa8Y0Ikg970eg",
        kind: "album"
    },
    {
        title: "The No Comprendo",
        cover: "https://i.scdn.co/image/ab67616d00001e0212a5afee4ffdefdc65cbc441",
        rating: 5,
        author: "Les Rita Mitsouko",
        link: "https://open.spotify.com/album/3VnFLQ6pO9MSvVeKv5DHjY?si=wsnzszGISg6IJxS0DlHdEQ",
        kind: "album"
    },
    {
        title: "The Piper At The Gates Of Dawn",
        cover: "https://i.scdn.co/image/ab67616d00001e02ebf2ba3431fa5fdbffaff684",
        rating: 5,
        author: "Pink Floyd",
        link: "https://open.spotify.com/album/0Fke5eiQ6lszQHlwiFygqn?si=zyuXENnVQka0emuQCzPovQ",
        kind: "album"
    },
    {
        title: "Bitume Caviar (Vol.1)",
        cover: "https://i.scdn.co/image/ab67616d00001e02a7f9118d82700a41c3b3d82d",
        rating: 5,
        author: "Isha et Lisma d'Aulnay",
        link: "https://open.spotify.com/album/3Fr9OWBaK5i1nZh0BT38jN?si=MRH6uo7ASPaCP4y10FgXDA",
        kind: "album"
    },
    {
        title: "Vertical Smiles",
        cover: "https://i.scdn.co/image/ab67616d00001e02379cdcd991ccb22e7ad6711f",
        rating: 5,
        author: "Blackfoot",
        link: "https://open.spotify.com/album/59DGwDQ1Ce7UiAsoztOOM1?si=k9STYpn9SBOIvzT3Dja4MA",
        kind: "album"
    },
    {
        title: "Jours Etranges",
        cover: "https://i.scdn.co/image/ab67616d00001e02e045585a947eb63798ad8538",
        rating: 5,
        author: "Saez",
        link: "https://open.spotify.com/album/2bg7qOhAn5apkOzX5v2SHg?si=5AkVcPXSQU6O5XeKk0XbRA",
        kind: "album"
    },
    {
        title: "CHROMAKOPIA",
        cover: "https://i.scdn.co/image/ab67616d00001e02124e9249fada4ff3c3a0739c",
        rating: 5,
        author: "Tyler, The Creator",
        link: "https://open.spotify.com/album/0U28P0QVB1QRxpqp5IHOlH?si=72f1TMzKSv6qeC-ys1K5_g",
        kind: "album"
    },
    {
        title: "The Snow Goose",
        cover: "https://i.scdn.co/image/ab67616d00001e02efb0c17ee823ccfa2a091663",
        rating: 5,
        author: "Camel",
        link: "https://open.spotify.com/album/7ny9OWZ336Y4gGSSgHlkFB?si=wW36eHA3SE2ywG0UQJMvLg",
        kind: "album"
    },
    {
        title: "Bless Its Pointed Little Head",
        cover: "https://i.scdn.co/image/ab67616d00001e025b9cb32582085ecbd5ecceaf",
        rating: 5,
        author: "Jefferson Airplane",
        link: "https://open.spotify.com/album/2ZkdTV6IV5arY4hS6ztM2g?si=hI7g5lYnScaebGow9Yof-g",
        kind: "album"
    },
    {
        title: "Disintegration",
        cover: "https://i.scdn.co/image/ab67616d00001e02858ed9e2832801189187391a",
        rating: 5,
        author: "The Cure",
        link: "https://open.spotify.com/album/6DZNOsLXIU2zOQfQDwDpIS?si=zR40bTZaTrKkeUfK-ozeDw",
        kind: "album"
    },
    {
        title: "The Head On The Door",
        cover: "https://i.scdn.co/image/ab67616d00001e021dda5f57ba5c203f775ea2dd",
        rating: 5,
        author: "The Cure",
        link: "https://open.spotify.com/album/7zJzNs8eVgbkVVSQSwKRtx?si=RsYuHtDLS_-pXZiYo8nxww",
        kind: "album"
    },
    {
        title: "Pornography",
        cover: "https://i.scdn.co/image/ab67616d00001e02bc895ce03f0a5dfd2f1597b5",
        rating: 5,
        author: "The Cure",
        link: "https://open.spotify.com/album/0qJ30kPyjNkKjtV5h0JpHm?si=ac50deb581c94344",
        kind: "album"
    },
    {
        title: "Этажи",
        cover: "https://i.scdn.co/image/ab67616d00001e02d4549c0e601fbe7e8622a2f5",
        rating: 5,
        author: "Molchat Doma",
        link: "https://open.spotify.com/album/1FHREwXgTQvqiG8q5KlRzc?si=aqRD2z0IR5K0wu4eVZUliQ",
        kind: "album"
    },
    {
        title: "Pacifique",
        cover: "https://i.scdn.co/image/ab67616d00001e0212c59264bf24b263b27b8dc7",
        rating: 5,
        author: "Disiz",
        link: "https://open.spotify.com/album/0h9tYZeKtjZ8rsfGknVqwF?si=wvo0oRCFRZ2PaHtscakgYw",
        kind: "album"
    },
    {
        title: "Ferric Oxide",
        cover: "https://i.scdn.co/image/ab67616d00001e02c43ee2c59d5d6b0d4b3a2075",
        rating: 5,
        author: "Panchiko",
        link: "https://open.spotify.com/album/2XEgoiYtf35w31ZZm3isN0?si=zmsKvJUdQUGaqbNkY4N76A",
        kind: "album"
    },
    {
        title: "Reminiscence",
        cover: "https://i.scdn.co/image/ab67616d00001e02f3fc61d2bba6b57b80607c5e",
        rating: 5,
        author: "Wink",
        link: "https://open.spotify.com/album/1sWt7D8SIqILz7LLUP3iHR?si=XWjtFOI5TfW6gwwA3DY5qA",
        kind: "album"
    },
    {
        title: "Vicious Delicious",
        cover: "https://i.scdn.co/image/ab67616d00001e022946296b5df89b2601732d8c",
        rating: 5,
        author: "Infected Mushrooms",
        link: "https://open.spotify.com/album/0xihL8xT18rsBwjuYPhnme?si=OQsiUYZIRLiYWWOtFFCASg",
        kind: "album"
    },
    {
        title: "The Lost Ship",
        cover: "https://i.scdn.co/image/ab67616d00001e02687087ac514d54f724e45f4d",
        rating: 5,
        author: "Panda Dub",
        link: "https://open.spotify.com/album/2o926sodjWyP9IBahD5YoF?si=bntg5ZSZTBOslu76RKtDsg",
        kind: "album"
    },
    {
        title: "Shapes and Shadows",
        cover: "https://i.scdn.co/image/ab67616d00001e02f62264d635b334a3c29cd8cb",
        rating: 5,
        author: "Panda Dub",
        link: "https://open.spotify.com/album/229OeMBJWAf2xy7aom3aTQ?si=YRycQGJ0ShWpeT-pUVgGcg",
        kind: "album"
    },
    {
        title: "Buena Vista Social Club",
        cover: "https://i.scdn.co/image/ab67616d00001e02e14a9fa0dd781bff247116b3",
        rating: 5,
        author: "Buena Vista Social Club",
        link: "https://open.spotify.com/album/5qcOy8sMqROZ0VEfK8LJZt?si=a1NegqHAQDGuCU6qCtdZbw",
        kind: "album"
    },
    {
        title: "Loaded: Re-Loaded",
        cover: "https://i.scdn.co/image/ab67616d00001e025816a37263f88929907c2dbd",
        rating: 5,
        author: "The Velvet Underground",
        link: "https://open.spotify.com/album/1jYzTZV1cQXE89zA9ZSUpE?si=ZCPLSVpDRpq4bJoHy1cIng",
        kind: "album"
    },
    {
        title: "Forest of Lost Children",
        cover: "https://i.scdn.co/image/ab67616d00001e02fd632c6df018130724e2fc57",
        rating: 5,
        author: "Kikagaku Moyo",
        link: "https://open.spotify.com/album/2dwNxD6zrwPkRJlr08WOKA?si=fK-A6xteRpWhh89ZMGfh6g",
        kind: "album"
    },
    {
        title: "House in the Tall Grass",
        cover: "https://i.scdn.co/image/ab67616d00001e02a938f8d61319e7ca724ddd8c",
        rating: 5,
        author: "Kikagaku Moyo",
        link: "https://open.spotify.com/album/0A6hLzACLoB32gRz2UFTYu?si=S9vlzWKfT6q8kUtLGJbLqQ",
        kind: "album"
    },
    
    {
        title: "La Radiolina",
        cover: "https://i.scdn.co/image/ab67616d00001e02e37f9a3fdedc3d7dc2c49b26",
        rating: 5,
        author: "Manu Chao",
        link: "https://i.scdn.co/image/ab67616d00001e02e37f9a3fdedc3d7dc2c49b26",
        kind: "album"
    },
    {
        title: "King of The Bongo",
        cover: "https://i.scdn.co/image/ab67616d00001e0210bcce9ccaccc979d7358a17",
        rating: 5,
        author: "Manu Chao",
        link: "https://open.spotify.com/album/5VMwAEtDGtNchZp8PCnx50?si=UAJLs9UVT7-OoEHiVagD8A",
        kind: "album"
    },
    {
        title: "No Eartly Connection",
        cover: "https://i.scdn.co/image/ab67616d00001e027e0d3cafd5232d6ccb975946",
        rating: 5,
        author: "Rick Wakeman",
        link: "https://open.spotify.com/album/7Kw6q6WZhz0BC7SJN99PLB?si=Xc8uFsLRRWepDXXN-BloNQ",
        kind: "album"
    },

    {
        title: "Toxicity",
        cover: "https://i.scdn.co/image/ab67616d00001e0207bc7d2a745636c356b4d0aa",
        rating: 5,
        author: "System of a Down",
        link: "https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh?si=OV78jCZzRaikT1IJCO508Q",
        kind: "album"
    },
    {
        title: "Civilized Evil",
        cover: "https://i.scdn.co/image/ab67616d00001e026880ca96312ca84020009730",
        rating: 5,
        author: "Jean-Luc Ponty",
        link: "https://open.spotify.com/album/3HfjIGx8MTHt9pmL1rJyL9?si=UzNme3eVQdeXPx6vddzyYQ",
        kind: "album"
    },
    {
        title: "Tales Of Mystery And Imagination",
        cover: "https://i.scdn.co/image/ab67616d00001e02dd7e9be4966d93c97906200d",
        rating: 5,
        author: "The Alan Parsons Project",
        link: "https://open.spotify.com/album/0ICEGX26wNqIKLmWRpZxwx?si=2JVjRk5fS2SfB-kqSaJClQ",
        kind: "album"
    },
    {
        title: "Volcano",
        cover: "https://i.scdn.co/image/ab67616d00001e021bd8726f0326ce113038a1f4",
        rating: 5,
        author: "Temples",
        link: "https://open.spotify.com/album/0Mrv2YvHtRgyn3j3S38mEF?si=PAgPEZziSlqg7_-MfI624Q",
        kind: "album"
    },
    {
        title: "No Pussyfooting",
        cover: "https://i.scdn.co/image/ab67616d00001e0268e33726e53c01d42a6d1f3c",
        rating: 5,
        author: "Brian Eno & Robert Fripp",
        link: "https://open.spotify.com/album/7090pUnNlv1lklI2lI2X6J?si=iz68yPc_SMiO4Y6Zun4XFg",
        kind: "album"
    },
    {
        title: "Led Zeppelin",
        cover: "https://i.scdn.co/image/ab67616d00001e02c77c73285cc5cb64d97e1b0f",
        rating: 5,
        author: "Led Zeppelin",
        link: "https://open.spotify.com/album/1J8QW9qsMLx3staWaHpQmU?si=a9QKyyywQvq6JmnVn7n2IQ",
        kind: "album"
    },
    {
        title: "Sun Structures",
        cover: "https://i.scdn.co/image/ab67616d00001e02f35c8b47c52ab1f3668a6927",
        rating: 5,
        author: "Temples",
        link: "https://open.spotify.com/album/0bJvWkM6E03FI8DEHiCuUU?si=32TCfO9tShCCzzBNHWpyHA",
        kind: "album"
    },
    {
        title: "Music Has The Right To Children",
        cover: "https://i.scdn.co/image/ab67616d00001e029effb26eea559ce6f3fed751",
        rating: 5,
        author: "Boards of Canada",
        link: "https://open.spotify.com/album/6LZiNXaDvhzvnXUubVOmNU?si=ROCuqIgWRK2DOyHS-RwArg",
        kind: "album"
    },
    {
        title: "Quoth",
        cover: "https://i.scdn.co/image/ab67616d00001e02576800526554c66833197d76",
        rating: 3.6,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/4F83Th71IEwecavhxGFGzN?si=_iEnUFVSTOOkMrHMvcNAnw",
        kind: "album"
    },
    {
        title: "Undertow",
        cover: "https://i.scdn.co/image/ab67616d00001e0282298636c94b8167c4793db2",
        rating: 3.6,
        author: "TOOL",
        link: "https://open.spotify.com/album/3Esn6LoXuWtLZNYq8FCzr0?si=PLR3N6J3Say_gAPqxM-NvQ",
        kind: "album"
    },
    {
        title: "The Pearl",
        cover: "https://i.scdn.co/image/ab67616d00001e02a00536b039aaefb64040d8dd",
        rating: 4.8,
        author: "Harold Budd",
        link: "https://open.spotify.com/album/5SSf6lNbSoaAUx6PxQVjlP?si=yKHckzBnTQ2hX4yj1MlCew",
        kind: "album"
    },
    {
        title: "Ambiant 4: On Land",
        cover: "https://i.scdn.co/image/ab67616d00001e02c83fef08b45f1784b4e916ba",
        rating: 5,
        author: "Brian Eno",
        link: "https://open.spotify.com/album/6siM9Wpdrdlt5xQYohETIh?si=Luh5los9SM24YNpVPSzKdg",
        kind: "album"
    },
    {
        title: "Getz/Gilberto",
        cover: "https://i.scdn.co/image/ab67616d00001e02417cc363d7286a88489dee3c",
        rating: 3.6,
        author: "Stan Getz",
        link: "https://open.spotify.com/album/2W6Hvrtg2Zpc9dW4aBDbdP?si=9hU3UJ6MR7ayQ4RGCBLGKA",
        kind: "album"
    },
    {
        title: "The Fame Monster",
        cover: "https://i.scdn.co/image/ab67616d00001e025c9890c0456a3719eeecd8aa",
        rating: 4,
        author: "Lady Gaga",
        link: "https://open.spotify.com/album/6rePArBMb5nLWEaY9aQqL4?si=YvHpcrHmTbyvl2mhHtnHMg",
        kind: "album"
    },
    {
        title: "Ambient 2: The Plateaux Of Mirror",
        cover: "https://i.scdn.co/image/ab67616d00001e02eba05344ff7ca99e2fd35545",
        rating: 4.2,
        author: "Brian Eno",
        link: "https://open.spotify.com/album/5ma9r5NFV0poevmydI2qgO?si=Rpwja9KdSnGPdAdSks7yUQ",
        kind: "album"
    },
    {
        title: "Howl's Moving Castle",
        cover: "https://i.scdn.co/image/ab67616d00001e0262c1f3370811c52ae2d26d24",
        rating: 5,
        author: "Joe Hisaishi",
        link: "https://open.spotify.com/album/5fqlZFKYqvkIe2jdDGt2nl?si=JQVhwslmSl2Rd2kUfwRL_w",
        kind: "album"
    },
    {
        title: "The Wind Rises",
        cover: "https://i.scdn.co/image/ab67616d00001e02c853c5a8535cc3dc394efc58",
        rating: 5,
        author: "Joe Hisaishi",
        link: "https://open.spotify.com/album/59U5FQ4kDEt11Q2UcFu1dK?si=RmU-9e3RRMaaPbcepRClkQ",
        kind: "album"
    },


    
    {
        title: "Debut",
        cover: "https://i.scdn.co/image/ab67616d0000b2737a94db8056a761764c01dd84",
        rating: 5,
        author: "Björk",
        link: "https://open.spotify.com/album/7qopDhMKBIfoIM2gJcecbr?si=Ti59RX9bSi6bjU4MPmOQpg",
        kind: "album"
    },
    {
        title: "Breakfast In America",
        cover: "https://i.scdn.co/image/ab67616d00001e025405ef9e393f5f1e53b4b42e",
        rating: 5,
        author: "Björk",
        link: "https://open.spotify.com/album/1zcm3UvHNHpseYOUfd0pna?si=Wu8Gn14gTBOlXa_-sF1soA",
        kind: "album"
    },
    {
        title: "Black Sabbath",
        cover: "https://i.scdn.co/image/ab67616d00001e02e61731abae915074b93416e9",
        rating: 5,
        author: "Black Sabbath",
        link: "https://open.spotify.com/album/3OmnatFgQ8o1DlYLp9EpNJ?si=sPnyHdvbRJigpy91TFBOrA",
        kind: "album"
    },
    {
        title: "Maggot Brain",
        cover: "https://i.scdn.co/image/ab67616d00001e0252573463beeda67fe242cab5",
        rating: 5,
        author: "Funkadelic",
        link: "https://open.spotify.com/album/3ywVzrwMQ3Kq43N9zBdBQm?si=G6NBgEIMS_qI0HR63Hp2dg",
        kind: "album"
    },
    {
        title: "Close To The Edge",
        cover: "https://i.scdn.co/image/ab67616d00001e020b4444fe9bc1a73ccbb949db",
        rating: 5,
        author: "Yes",
        link: "https://open.spotify.com/album/6344rkGqCBDenGoS7eJlBN?si=SD3VdiSHTmqMNNYkFRDGxA",
        kind: "album"
    },
    {
        title: "The Wall",
        cover: "https://i.scdn.co/image/ab67616d00001e025d48e2f56d691f9a4e4b0bdf",
        rating: 5,
        author: "Pink Floyd",
        link: "https://open.spotify.com/album/5Dbax7G8SWrP9xyzkOvy2F?si=z31lmmq7TnizDDEPkp1xVQ",
        kind: "album"
    },
    {
        title: "Are You Experienced",
        cover: "https://i.scdn.co/image/ab67616d00001e028d0212a10cc2d93289d29b32",
        rating: 5,
        author: "Jimi Hendrix",
        link: "https://open.spotify.com/album/719ELjvRzp0lHiLyAuAGj3?si=r7XNAlq9QiemA9xjjxZSnA",
        kind: "album"
    },
    {
        title: "Electric Ladyland",
        cover: "https://i.scdn.co/image/ab67616d00001e0219dcd95d28b63d10164327f2",
        rating: 5,
        author: "Jimi Hendrix",
        link: "https://open.spotify.com/album/5z090LQztiqh13wYspQvKQ?si=Y79Zvg-mS9K9VLIkkC5YHQ",
        kind: "album"
    },
    {
        title: "Axis: Bold as Love",
        cover: "https://i.scdn.co/image/ab67616d0000b2737a94db8056a761764c01dd84",
        rating: 5,
        author: "Jimi Hendrix",
        link: "https://open.spotify.com/album/3uFZf8rykoHo7XMIQVYW6r?si=FIwYZPDpRaOr4QMjdtpF9Q",
        kind: "album"
    },
    {
        title: "D>E>A>T>H>M>E>T>A>L",
        cover: "https://i.scdn.co/image/ab67616d00001e02e045aa197ada995407bf92fc",
        rating: 5,
        author: "Panchiko",
        link: "https://open.spotify.com/album/2MASm01cgG0a0CgioQpe6Q?si=7mK_UAjiSKKF_ArZN9V4mg",
        kind: "album"
    },
    {
        title: "The Roaring Silence",
        cover: "https://i.scdn.co/image/ab67616d00001e02f7a46588d1f34cd32e670bb4",
        rating: 5,
        author: "Manfred Mann's Earth Band",
        link: "https://open.spotify.com/album/2DNW1VVywtxEtfay126Sk9?si=3cJWzF7gTfW5nkZqjut56g",
        kind: "album"
    },
    {
        title: "Live In Budapest",
        cover: "https://i.scdn.co/image/ab67616d00001e0218288532ca2c12a2ac322a3b",
        rating: 5,
        author: "Manfred Mann's Earth Band",
        link: "https://open.spotify.com/album/6Xdk0p7kXM11mb1GWA0Ji3?si=k8cZKogbQfaPxpB0U9LTQg",
        kind: "album"
    },
    {
        title: "Watch",
        cover: "https://i.scdn.co/image/ab67616d00001e02687dcfc2eb9309eb5eab7f1e",
        rating: 5,
        author: "Manfred Mann's Earth Band",
        link: "https://open.spotify.com/album/1uFT6dAxYrfRdWnGDJAKZO?si=pEB0lT1MRzeqr-f9IZoL9A",
        kind: "album"
    },
    {
        title: "Puta's Fever",
        cover: "https://i.scdn.co/image/ab67616d00001e02af054b09905136eb98c7a08c",
        rating: 5,
        author: "Mano Negra",
        link: "https://open.spotify.com/album/5RRl8EN39JgDo5QsDOFTXz?si=3qHpcRg-TDO2ayO50aLYdA",
        kind: "album"
    },
    {
        title: "Patchanka",
        cover: "https://i.scdn.co/image/ab67616d00001e020b9fca80401e636137c2fc8d",
        rating: 5,
        author: "Mano Negra",
        link: "https://open.spotify.com/album/1i6RiKDCLS9KqgwfCQ1mRQ?si=RRiJLgMFRruDRE_EjxlYYw",
        kind: "album"
    },
    {
        title: "Próxima Estación: Esperanza",
        cover: "https://i.scdn.co/image/ab67616d00001e021dcba4a728ca0b17cbd204a5",
        rating: 5,
        author: "Manu Chao",
        link: "https://open.spotify.com/album/4t1LLdXiWTfoywqricztFo?si=IxAyEvGvTnywYz7f00yXbQ",
        kind: "album"
    },
    {
        title: "Viva Tu",
        cover: "https://i.scdn.co/image/ab67616d00001e02a2cab830efd2a509743ff230",
        rating: 5,
        author: "Manu Chao",
        link: "https://open.spotify.com/album/0de0VSMdg29Rwoe9MG4ck2?si=-DfMFG1oRlO9XETHC0WEEQ",
        kind: "album"
    },
    {
        title: "EL ÚLTIMO TOUR DEL MUNDO",
        cover: "https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab",
        rating: 5,
        author: "Bad Bunny",
        link: "https://open.spotify.com/album/2d9BCZeAAhiZWPpbX9aPCW?si=q_SP1uVNSr6-M9FQcXSA4w",
        kind: "album"
    },
    {
        title: "DeBÍ TiRAR MáS FOToS",
        cover: "https://i.scdn.co/image/ab67616d00001e02bbd45c8d36e0e045ef640411",
        rating: 5,
        author: "Bad Bunny",
        link: "https://open.spotify.com/album/5K79FLRUCSysQnVESLcTdb?si=3faFnFucTkiz2gBRWPjsNw",
        kind: "album"
    },
    {
        title: "Lizard",
        cover: "https://i.scdn.co/image/ab67616d00001e028f4652132e153badd7017df4",
        rating: 5,
        author: "King Crimson",
        link: "https://open.spotify.com/album/4vvx8uOeJE7YR4tORVtYV4?si=IjqeOp9eQkCRDLto66JKIw",
        kind: "album"
    },
    {
        title: "Starless and Bible Black",
        cover: "https://i.scdn.co/image/ab67616d00001e02ebb799f3ca90f59bd04f6a72",
        rating: 5,
        author: "King Crimson",
        link: "https://open.spotify.com/album/4ttC4XUinZXn3GMIQNrjFZ?si=XPlihMrMSgGrvMAyMSs87w",
        kind: "album"
    },
    {
        title: "Discipline",
        cover: "https://i.scdn.co/image/ab67616d00001e02ff2d2448a42a43c281b6f556",
        rating: 5,
        author: "King Crimson",
        link: "https://open.spotify.com/album/20dTbQRkxuOTkf3SFyaT2m?si=QbnaMFlYR1e9kDxhwpnCrA",
        kind: "album"
    },
    {
        title: "Kink",
        cover: "https://i.scdn.co/image/ab67616d00001e023b662e4bab01440eb4f31793",
        rating: 5,
        author: "The Kinks",
        link: "https://open.spotify.com/album/6HrqKlhAQiv4GjFjwmuxDQ?si=ScKwUtXaRHmH6JkIuVwafg",
        kind: "album"
    },
    {
        title: "Jefferson Airplane Takes Off",
        cover: "https://i.scdn.co/image/ab67616d00001e02a75f75c5194839fb77a4dcf7",
        rating: 5,
        author: "Jefferson Airplane",
        link: "https://open.spotify.com/album/4WqJrAJCPjmYTzvN1PTWaB?si=5SNInSViQZW0n--IDRa36w",
        kind: "album"
    },
    {
        title: "Jefferson Airplane: The Woodstock Experience",
        cover: "https://i.scdn.co/image/ab67616d00001e0240fefb6812399847a8b8713c",
        rating: 5,
        author: "Jefferson Airplane",
        link: "https://open.spotify.com/album/6lPb7Eoon6QPbscWbMsk6a?si=1t2QC89bSpeX7MM_M7Uu3w",
        kind: "album"
    },
    {
        title: "La Vie Augmente, Vol.3",
        cover: "https://i.scdn.co/image/ab67616d00001e021670ddf236cd50f995b0ce9e",
        rating: 5,
        author: "ISHA",
        link: "https://open.spotify.com/album/2vG3FiOIQqk8l0gG7p6jYf?si=9AVPekXxRiqoKRPHo-6VIQ",
        kind: "album"
    },
    {
        title: "La Vie Augmente, Vol.2",
        cover: "https://i.scdn.co/image/ab67616d00001e021d3f20d0a9be55b758c816a9",
        rating: 5,
        author: "ISHA",
        link: "https://open.spotify.com/album/0HGsUbxth45uHwhtD8nFR1?si=E03D7waBSq2ujj5OE0CSsw",
        kind: "album"
    },
    {
        title: "La Vie Augmente, Vol.1",
        cover: "https://i.scdn.co/image/ab67616d00001e02d6f5b51ef29252f8817201b6",
        rating: 5,
        author: "ISHA",
        link: "https://open.spotify.com/album/7cXkwH5Q96UKBtlGuFbkpK?si=P1m3YhjOSFqMkVYjnAAntw",
        kind: "album"
    },
    {
        title: "Ocean",
        cover: "https://i.scdn.co/image/ab67616d00001e02352a540820179ba257800b6b",
        rating: 5,
        author: "Eloy",
        link: "https://open.spotify.com/album/055oBGhGjcZixkBREWdav2?si=lfiCED-USBmuWK7vM2ArHw",
        kind: "album"
    },



    {
        title: "Ocean II",
        cover: "https://i.scdn.co/image/ab67616d00001e0281466203fc1587fa677ae084",
        rating: 5,
        author: "Eloy",
        link: "https://open.spotify.com/album/28ayZSBRiNwn3BqmcpThHd?si=p9QbA1YhRn2NyhvIMtxPOQ",
        kind: "album"
    },
    {
        title: "L.W",
        cover: "https://i.scdn.co/image/ab67616d00001e021f0fd0835e055d96b82ccaf0",
        rating: 5,
        author: "King Gizzard & The Lizard Wizard",
        link: "https://open.spotify.com/album/7mGW0YccQQZPCD1acHaClx?si=V28w2cKJTK-L_BfYl5qe_A",
        kind: "album"
    },
    {
        title: "Extra-Lucide",
        cover: "https://i.scdn.co/image/ab67616d00001e023bada981b0fdd5c948256d3c",
        rating: 5,
        author: "Disiz",
        link: "https://open.spotify.com/album/1FZzmpp4D4mDVqnm6ffwkP?si=E89rabRfT0yTlAZWyzLUvw",
        kind: "album"
    },
    {
        title: "Disizilla",
        cover: "https://i.scdn.co/image/ab67616d00001e0220f839e57854a45d495b29b8",
        rating: 5,
        author: "Disiz",
        link: "https://open.spotify.com/album/2vVDeIVO3ja0RdlQf20NOB?si=kDfPyLjxRu6-LtTvpbJQ1Q",
        kind: "album"
    },
    {
        title: "L'Amour",
        cover: "https://i.scdn.co/image/ab67616d00001e020a3418c7d155f8974eee9c7f",
        rating: 5,
        author: "Disiz",
        link: "https://open.spotify.com/album/447oYDEOpoTAmbgDKIhkZ6?si=_1Mfcv68QtKBazyu20jC6w",
        kind: "album"
    },
    {
        title: "Diamond Dogs",
        cover: "https://i.scdn.co/image/ab67616d00001e02ad22c83a6e1567f8453c32b3",
        rating: 5,
        author: "David Bowie",
        link: "https://open.spotify.com/album/72mfhbEsMtXR6s7v9UhKe3?si=n97jZPfBRYu4G1100wMD7g",
        kind: "album"
    },
    {
        title: "Hunky Dory",
        cover: "https://i.scdn.co/image/ab67616d00001e02e464904cc3fed2b40fc55120",
        rating: 5,
        author: "David Bowie",
        link: "https://open.spotify.com/album/6fQElzBNTiEMGdIeY0hy5l?si=Qy4swGxXST2qBPSB-oJwcQ",
        kind: "album"
    },
    {
        title: "Heroes",
        cover: "https://i.scdn.co/image/ab67616d00001e02204f41d52743c6a9efd62985",
        rating: 5,
        author: "David Bowie",
        link: "https://open.spotify.com/album/4I5zzKYd2SKDgZ9DRf5LVk?si=psS1yFWxQFSk92vAm7kgeg",
        kind: "album"
    },
    {
        title: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        cover: "https://i.scdn.co/image/ab67616d00001e02c41f4e1133b0e6c5fcf58680",
        rating: 5,
        author: "David Bowie",
        link: "https://open.spotify.com/album/48D1hRORqJq52qsnUYZX56?si=ew-4S5-qRx-eah7bQiCvgQ",
        kind: "album"
    },
    {
        title: "Discovery",
        cover: "https://i.scdn.co/image/ab67616d00001e022c25dad9f8fd54652f7ba5df",
        rating: 5,
        author: "Daft Punk",
        link: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc?si=K9Q5aoIsTrm2jOEryUVGrA",
        kind: "album"
    },
    {
        title: "Human After All",
        cover: "https://i.scdn.co/image/ab67616d00001e022ed719bad67261c7bf090c70",
        rating: 5,
        author: "Daft Punk",
        link: "https://open.spotify.com/album/2T7DdrOvsqOqU9bGTkjBYu?si=t0G8PcXGScKxQkEHEbe8vQ",
        kind: "album"
    },
    {
        title: "TRON: Legacy",
        cover: "https://i.scdn.co/image/ab67616d00001e028323143296ff7b2801e32789",
        rating: 5,
        author: "Daft Punk",
        link: "https://open.spotify.com/album/3AMXFnwHWXCvNr5NCCpLZI?si=N4K_JL3_S2WgOGnd0Ew92A",
        kind: "album"
    },
    {
        title: "Random Access Memories",
        cover: "https://i.scdn.co/image/ab67616d00001e029b9b36b0e22870b9f542d937",
        rating: 5,
        author: "Daft Punk",
        link: "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa?si=zqreMKkATW2ApqyyWenY-w",
        kind: "album"
    },
    {
        title: "Amnesty (I)",
        cover: "https://i.scdn.co/image/ab67616d00001e02a51ae277980fbf5b2bd2c7e8",
        rating: 5,
        author: "Crystal Castles",
        link: "https://open.spotify.com/album/60f7DBZ5BIKTlaGak6ooUU?si=g2gTVi9tRmqSq7IHP0mP-A",
        kind: "album"
    },
    {
        title: "Crystal Castles (II)",
        cover: "https://i.scdn.co/image/ab67616d00001e02af54621b48da9687dc86011b",
        rating: 5,
        author: "Crystal Castles",
        link: "https://open.spotify.com/album/3VsZ5nZGgyH30IDaCP4GeQ?si=TbTIfqlZRWGxq55r9H7EgQ",
        kind: "album"
    },
    {
        title: "Head Over Heels",
        cover: "https://i.scdn.co/image/ab67616d00001e02dd69a64d46d35725c47df19c",
        rating: 5,
        author: "Cocteau Twins",
        link: "https://open.spotify.com/album/52MMrcUtar0coGVHULkuQ9?si=1WkrBy6fRzK1uzlvjfb7ug",
        kind: "album"
    },
    {
        title: "Blue Bell Knoll",
        cover: "https://i.scdn.co/image/ab67616d00001e02ed2637f59f3f5eb1c049a005",
        rating: 5,
        author: "Cocteau Twins",
        link: "https://open.spotify.com/album/3SXCY4kFMM4T4egq5DSUTa?si=hVbtb0pnSe6fVDRgpAXj1Q",
        kind: "album"
    },
    {
        title: "Heaven or Las Vegas",
        cover: "https://i.scdn.co/image/ab67616d00001e025d2fdd1564ccab97e60c656f",
        rating: 5,
        author: "Cocteau Twins",
        link: "https://open.spotify.com/album/5lEphbceIgaK1XxWeSrC9E?si=cOLIRKmgSxmU3vV_oXWvKw",
        kind: "album"
    },
    {
        title: "I Can See Your House From Here",
        cover: "https://i.scdn.co/image/ab67616d00001e02a5a422526541417ff7c19d94",
        rating: 5,
        author: "Camel",
        link: "https://open.spotify.com/album/2UzcBmNQt45lrGuwIYEjec?si=bjW_foCSRMyZcNMPeATHNQ",
        kind: "album"
    },
    {
        title: "Pressure Points",
        cover: "https://i.scdn.co/image/ab67616d00001e027a68cb2771173ca87cc09346",
        rating: 5,
        author: "Camel",
        link: "https://open.spotify.com/album/5nPm3Gykzwe9Cvjc8xGLdA?si=eEAarYvHTWucC0_Xeudi9g",
        kind: "album"
    },
    {
        title: "Chameloen",
        cover: "https://i.scdn.co/image/ab67616d00001e0206e561fa7e5bd67c95631217",
        rating: 5,
        author: "Camel",
        link: "https://open.spotify.com/album/6o8DatzTclI30aDIewJJi7?si=3SzuBrJdTWWsn2HaL22pUg",
        kind: "album"
    },
    {
        title: "Stationary Traveller",
        cover: "https://i.scdn.co/image/ab67616d00001e02ea50f573eb4bdc6c304c5344",
        rating: 5,
        author: "Camel",
        link: "https://open.spotify.com/album/78XGNvqT155xictf3VChQh?si=sWcldeUlREmnq-aIx29HRQ",
        kind: "album"
    },
    {
        title: "Camel",
        cover: "https://i.scdn.co/image/ab67616d00001e02572a2c8c8092c82b9dfd48fc",
        rating: 5,
        author: "Camel",
        link: "https://open.spotify.com/album/2WO6VIu5x3rMXWcMzH36jl?si=9cfalbDFRPiaQD9QguqG4A",
        kind: "album"
    },
    {
        title: "Moonmadness",
        cover: "https://i.scdn.co/image/ab67616d00001e02ecbc7b6ca15b79ca7ff05bd2",
        rating: 5,
        author: "Camel",
        link: "https://open.spotify.com/album/5Q6eKTQNsOyu0fCpAFxuHR?si=t8CXuw8aS2GnAQm1OMc8Lw",
        kind: "album"
    },
    {
        title: "Ambiant 2: Music For Airports",
        cover: "https://i.scdn.co/image/ab67616d00001e0237a379ca6520eaf191de6ff2",
        rating: 5,
        author: "Brian Eno",
        link: "https://open.spotify.com/album/063f8Ej8rLVTz9KkjQKEMa?si=Fa9D9Hb_RAi7_f5fIyeB4g",
        kind: "album"
    },
    {
        title: "Le Monde Instrumental d'Alain Goraguer",
        cover: "https://i.scdn.co/image/ab67616d00001e02a7d7628d791e61527116c08c",
        rating: 5,
        author: "Alain Goraguer",
        link: "https://open.spotify.com/album/3y1n62vanHyeV6Qsva9Kva?si=aojXvAlRTzyDMREXFd1kKg",
        kind: "album"
    },
    {
        title: "Faust: The Lost Recording",
        cover: "https://i.scdn.co/image/ab67616d00001e0224ea58d5c5ac0de56bf06845",
        rating: 5,
        author: "Alain Goraguer",
        link: "https://open.spotify.com/album/7AIiDdtf016wPSrTG950Cd?si=oWE6EpwFSriSE0TS6ZqRWw",
        kind: "album"
    },
    {
        title: "Rare Soundtracks & Lost Tapes",
        cover: "https://i.scdn.co/image/ab67616d00001e02ef23f01be6f55d4dc0cbaf82",
        rating: 5,
        author: "Alain Goraguer",
        link: "https://open.spotify.com/album/3Cg46JE3tWPhlWsjBA0LU1?si=iqezQJr0RTqk0rTCEV51rg",
        kind: "album"
    },
    {
        title: "Selected Ambient Works 85-92",
        cover: "https://i.scdn.co/image/ab67616d00001e0238906032688bb13b135ce19a",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/7aNclGRxTysfh6z0d8671k?si=olVcOfhsQBW4X0RrSHsK_g",
        kind: "album"
    },
    {
        title: "Selected Ambient Works Volume II",
        cover: "https://i.scdn.co/image/ab67616d00001e028155dc4dae262f31d39d8296",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/2SZZihZiCsFo87NKxDfxlH?si=5XMZD_jrRmCl8gRAxmS4og",
        kind: "album"
    },
    {
        title: "Syro",
        cover: "https://i.scdn.co/image/ab67616d00001e026ea96ba633bead24af562890",
        rating: 5,
        author: "Aphew Twin",
        link: "https://open.spotify.com/album/4mwrMLVKo940qLFXEIef4w?si=rXsUwY2wTUGe23Plv9OLqQ",
        kind: "album"
    },
    {
        title: "...I Care Because You Do",
        cover: "https://i.scdn.co/image/ab67616d00001e024bcecb123363f1f0f869257c",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/6TmEZKJtPJ9mPsMBmyteCE?si=dq-c2vu5QjS6qUHawmKZ9A",
        kind: "album"
    },
    {
        title: "Computer Controlled Acoustic Instruments pt2 EP",
        cover: "https://i.scdn.co/image/ab67616d00001e02c3de1c7467803876a809df16",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/4NmpBWikuFV6jbYMegdi01?si=nXrV6ftDToS26f0nwfNODQ",
        kind: "album"
    },
    {
        title: "Windowlicker",
        cover: "https://i.scdn.co/image/ab67616d00001e02478bfd5562acad46103b858a",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/59wyQv8zUfLulyPYefI8vh?si=O2086kozSb2bunVod6-3Qw",
        kind: "album"
    },
    {
        title: "Xylem Tube EP",
        cover: "https://i.scdn.co/image/ab67616d00001e02d5ebffe9d4c1279ca0fc8e48",
        rating: 5,
        author: "Aphex Twin",
        link: "https://open.spotify.com/album/6Lvdji4Bkcr17XHwVZyRfX?si=TcBCPRWARzyBeqq8SIgrdQ",
        kind: "album"
    },
    {
        title: "Billy Idol",
        cover: "https://i.scdn.co/image/ab67616d00001e02a20464e6697dc1149d3a5cdc",
        rating: 5,
        author: "Billy Idol",
        link: "https://open.spotify.com/album/5ebh0MxkqELmk50xHj2b4k?si=gT5z2HN0Q9K7Zj9PX5rWqw",
        kind: "album"
    },




    {
        title: "Beneath The Lilypad",
        cover: "https://i.scdn.co/image/ab67616d00001e020235684750e40b7e5210b559",
        rating: 5,
        author: "Alexandra Savior",
        link: "https://open.spotify.com/intl-fr/album/2inSjrL3SWgaUIIXxChNPd?si=rfgPDOJqQFmaUIQlqmVeOw",
        kind: "album"
    },
    
    {
        title: "24 Cumbias Pa Bailar",
        cover: "https://i.scdn.co/image/ab67616d00001e023e2396de5282580f00d3d897",
        rating: 5,
        author: "A Mover La Colita Cumbias",
        link: "https://open.spotify.com/album/5ebh0MxkqELmk50xHj2b4k?si=gT5z2HN0Q9K7Zj9PX5rWqw",
        kind: "album"
    },
    
    {
        title: "Little Dark Age",
        cover: "https://i.scdn.co/image/ab67616d00001e02b47d309281c66820b7137f5d",
        rating: 5,
        author: "MGMT",
        link: "https://open.spotify.com/intl-fr/album/7GjVWG39IOj4viyWplJV4H?si=L41q5_hWQSCZobzgDB0nYw",
        kind: "album"
    },
    
    {
        title: "Ocular Spectacular",
        cover: "https://i.scdn.co/image/ab67616d00001e028b32b139981e79f2ebe005eb",
        rating: 5,
        author: "MGMT",
        link: "https://open.spotify.com/album/6mm1Skz3JE6AXneya9Nyiv?si=9WwAoqF9Q9ivqMh-naBTkQ",
        kind: "album"
    },
    
    {
        title: "Thirteen Tales Of Love And Revenge",
        cover: "https://i.scdn.co/image/ab67616d00001e02c81e8d3a686ea9d982c18330",
        rating: 5,
        author: "The Pierces",
        link: "https://open.spotify.com/intl-fr/album/6Ymyr8aoX1jHVvrbGpyL24?si=pn_lLsCzRgW61Vx4HuGF6w",
        kind: "album"
    },
    
    {
        title: "Cry",
        cover: "https://i.scdn.co/image/ab67616d00001e02fd275af89cec73d6287f9cbf",
        rating: 5,
        author: "Cigarette After Sex",
        link: "https://open.spotify.com/album/4uQ5kFmXQdCxz3WvM4UUzy?si=OHa2aZiOTfWxosB3pN4iWQ",
        kind: "album"
    },
    
    {
        title: "Cigarette After Sex",
        cover: "https://i.scdn.co/image/ab67616d00001e02a20464e6697dc1149d3a5cdc",
        rating: 5,
        author: "Cigarette After Sex",
        link: "https://open.spotify.com/album/5ebh0MxkqELmk50xHj2b4k?si=gT5z2HN0Q9K7Zj9PX5rWqw",
        kind: "album"
    },
    
    {
        title: "The Captain and Me",
        cover: "https://i.scdn.co/image/ab67616d00001e027d419ac975423c069995c7bb",
        rating: 5,
        author: "The Doobie Brother",
        link: "https://open.spotify.com/album/0M2KWMbvY5x1sUnIKNpyUt?si=WfpEoxTpSpOa1_bGjjyNNA",
        kind: "album"
    },
    
    {
        title: "Ten",
        cover: "https://i.scdn.co/image/ab67616d00001e02d400d27cba05bb0545533864",
        rating: 5,
        author: "Pearl Jam",
        link: "https://open.spotify.com/album/5B4PYA7wNN4WdEXdIJu58a?si=mGrWK5rxRA-h5EyLsiEncg",
        kind: "album"
    },
    
    {
        title: "Agent Of Fortune",
        cover: "https://i.scdn.co/image/ab67616d00001e023ac318439ae56ce048d7bf5d",
        rating: 5,
        author: "Blue Öyster Cult",
        link: "https://open.spotify.com/album/6C9WzlQANeoD0GW5B41YJt?si=hrgyfjUtQfuP9uAPf9tUKA",
        kind: "album"
    },
    
    {
        title: "Dure Limite",
        cover: "https://i.scdn.co/image/ab67616d00001e02a20464e6697dc1149d3a5cdc",
        rating: 5,
        author: "Téléphone",
        link: "https://open.spotify.com/album/1ePKFTIr8ZODp91iwt4kVf?si=SdHDpAR6SAyIbf0vqxJe2w",
        kind: "album"
    },
    
    {
        title: "Une Autre Monde",
        cover: "https://i.scdn.co/image/ab67616d00001e021b1b30513f7158a6c77733d7",
        rating: 5,
        author: "Téléphone",
        link: "https://open.spotify.com/album/5DiavRKmdRpqdzgBjoNEF3?si=uRcr1u43RgOldDyLm7lV_w",
        kind: "album"
    },
    
    {
        title: "Steppenwolf",
        cover: "https://i.scdn.co/image/ab67616d00001e02e2aacda30b100cc33d523be0",
        rating: 5,
        author: "Steppenwolf",
        link: "https://open.spotify.com/album/64q58AfjSrrX9Egp7Zryw8?si=mJlG7lkvQSuYYP9pz7DefQ",
        kind: "album"
    },
    
    {
        title: "90125",
        cover: "https://i.scdn.co/image/ab67616d00001e029d9a49f795b4340538f43435",
        rating: 5,
        author: "Yes",
        link: "https://open.spotify.com/album/6nNlTIiFd3J06W0rJiiwlz?si=ld7O_H9LR_WNayHzQzVXTw",
        kind: "album"
    },
    
    {
        title: "Who's Next",
        cover: "https://i.scdn.co/image/ab67616d00001e02fe24dcd263c08c6dd84b6e8c",
        rating: 5,
        author: "The Who",
        link: "https://open.spotify.com/album/5MqyhhHbT13zsloD3uHhlQ?si=Fdj7OzbxRQa8jUarpo1Nzw",
        kind: "album"
    },
    
    {
        title: "Toto IV",
        cover: "https://i.scdn.co/image/ab67616d00001e024a052b99c042dc15f933145b",
        rating: 5,
        author: "TOTO",
        link: "https://open.spotify.com/album/62U7xIHcID94o20Of5ea4D?si=JWrEE3ccTGWm4AG915Wp7w",
        kind: "album"
    },
    
    {
        title: "Even In The Quietest Moments",
        cover: "https://i.scdn.co/image/ab67616d00001e02bddcc30c6a3288e725aec2df",
        rating: 5,
        author: "Supertramp",
        link: "https://open.spotify.com/album/4X87hQ57jTYQTcYTaJWK5w?si=VTN7JJUZTzu443nJakpHfg",
        kind: "album"
    },
    
    {
        title: "Breakfast in America",
        cover: "https://i.scdn.co/image/ab67616d00001e025405ef9e393f5f1e53b4b42e",
        rating: 5,
        author: "Supertramp",
        link: "https://open.spotify.com/album/1zcm3UvHNHpseYOUfd0pna?si=ngL83KYRR-OXUviUnFPBsQ",
        kind: "album"
    },
    
    {
        title: "'...Famous Last Words...'",
        cover: "https://i.scdn.co/image/ab67616d00001e02093c6e7d6069b3c958071f73",
        rating: 5,
        author: "Supertramp",
        link: "https://open.spotify.com/album/58JuUAfKGh6bKphiBtp7Nc?si=XLC9Or68Qdm6SzKwphjT3Q",
        kind: "album"
    },
    
    {
        title: "Surfer Rosa",
        cover: "https://i.scdn.co/image/ab67616d00001e028aa545a0ea869940cce358b5",
        rating: 5,
        author: "Pixies",
        link: "https://open.spotify.com/album/50j4Wm1b9hLpSpPIA39Vp9?si=IidMUac3SciKLRnm2E7faw",
        kind: "album"
    },


    
        {
        title: "Easter",
        cover: "https://i.scdn.co/image/ab67616d00001e02a28eabe111f67a386e75a31a",
        rating: 5,
        author: "Patti Smith",
        link: "https://open.spotify.com/album/1p6cWoueuunhpgy6131zAd?si=dDM3Gd56RoCjPAhvh78V8w",
        kind: "album"
    },
        {
        title: "Rage Against The Machine",
        cover: "https://i.scdn.co/image/ab67616d00001e0254ab617bc2d4974ab6ffbece",
        rating: 5,
        author: "Rage Against The Machine",
        link: "https://open.spotify.com/album/4Io5vWtmV1rFj4yirKb4y4?si=cbe1rkXARnOvNGBWVJKU1Q",
        kind: "album"
    },
    {
        title: "Machine Head",
        cover: "https://i.scdn.co/image/ab67616d00001e02a729c9c3dec04b99d889c66f",
        rating: 5,
        author: "Deep Purple",
        link: "https://open.spotify.com/album/32NQ56VZDTXSH3SMv4XSGN?si=bOkCDDxsSjC5rEgi7I_JoQ",
        kind: "album"
    },





    {
        title: "Perfect Strangers",
        cover: "https://i.scdn.co/image/ab67616d00001e021d742027836d2d03cb5e0c4b",
        rating: 5,
        author: "Deep Purple",
        link: "https://open.spotify.com/album/1FOmatanDRxS9EGcxjXKuO?si=PQyEc2HISlykRGRlSgXbsA",
        kind: "album"
    },

    {
        title: "Made In Japan",
        cover: "https://i.scdn.co/image/ab67616d00001e0255b8ce9be020127f7b8a76f3",
        rating: 5,
        author: "Deep Purple",
        link: "https://open.spotify.com/album/1IY4BdLApVlVa8xid34zJm?si=P-Ncq2xtQAyWN-b0XJXxsA",
        kind: "album"
    },
    {
        title: "Made in Europe",
        cover: "https://i.scdn.co/image/ab67616d00001e02d912296cb5ef2a91339db1f4",
        rating: 5,
        author: "Deep Purple",
        link: "https://open.spotify.com/album/7hlg6rtIzw56qQbUVkwADH?si=tD8qhxuxTOSLDSKkqWis9w",
        kind: "album"
    },
    {
        title: "Pablo Honey",
        cover: "https://i.scdn.co/image/ab67616d00001e02ec548c00d3ac2f10be73366d",
        rating: 5,
        author: "Deep Purple",
        link: "https://open.spotify.com/album/3gBVdu4a1MMJVMy6vwPEb8?si=Vv57sT2zS5qk5fYAiKMRSw",
        kind: "album"
    },
    {
        title: "OK Computer",
        cover: "https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856",
        rating: 5,
        author: "Radiohead",
        link: "https://open.spotify.com/intl-fr/album/6dVIqQ8qmQ5GBnJ9shOYGE?si=m7imrwS1TWKMU4RNRS57CQ",
        kind: "album"
    },
    {
        title: "In Rainbows",
        cover: "https://i.scdn.co/image/ab67616d00001e02de3c04b5fc750b68899b20a9    ",
        rating: 5,
        author: "Radiohead",
        link: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK?si=Cx8rH_QFQFCUPSVnH58e4g",
        kind: "album"
    },
    {
        title: "The Bends",
        cover: "https://i.scdn.co/image/ab67616d00001e029293c743fa542094336c5e12",
        rating: 5,
        author: "Radiohead",
        link: "https://open.spotify.com/album/35UJLpClj5EDrhpNIi4DFg?si=Kw3t9NC-SMOH8lqDXthnNA",
        kind: "album"
    },
    {
        title: "KID A MNESIA",
        cover: "https://i.scdn.co/image/ab67616d00001e02bbaaa8bf9aedb07135d2c6d3",
        rating: 5,
        author: "Radiohead",
        link: "https://open.spotify.com/album/6ofEQubaL265rIW6WnCU8y?si=WNd74DHLT_qTTvpMmTP5Jw",
        kind: "album"
    },
    {
        title: "Hail To The Thief",
        cover: "https://i.scdn.co/image/ab67616d00001e020da53e8f58e59f28a79c10c7",
        rating: 5,
        author: "Radiohead",
        link: "https://open.spotify.com/album/5mzoI3VH0ZWk1pLFR6RoYy?si=Ns71DdJlS3WBARLnjMi0Fw",
        kind: "album"
    },
    {
        title: "Kid A",
        cover: "https://i.scdn.co/image/ab67616d00001e026c7112082b63beefffe40151",
        rating: 5,
        author: "Radiohead",
        link: "https://open.spotify.com/album/6GjwtEZcfenmOf6l18N7T7?si=BdvopOvsTia1r3AhQW2MMQ",
        kind: "album"
    },
    {
        title: "Amnesiac",
        cover: "https://i.scdn.co/image/ab67616d00001e02863e0e305637100311c91aa7",
        rating: 5,
        author: "Radiohead",
        link: "https://open.spotify.com/album/1HrMmB5useeZ0F5lHrMvl0?si=LYuywpoLQC22NAtPdRs03g",
        kind: "album"
    },
    {
        title: "Atomic/Atomix",
        cover: "https://i.scdn.co/image/ab67616d00001e02ebc918cfb51e9ced7349f436",
        rating: 5,
        author: "Blondie",
        link: "https://open.spotify.com/album/5HRB9TeaIHRBxfIm4XZTj6?si=5iXar409RHiiu3qZ5XlHIQ",
        kind: "album"
    },
    {
        title: "Parallel Lines",
        cover: "https://i.scdn.co/image/ab67616d00001e026d23211741238ed227699c9d",
        rating: 5,
        author: "Blondie",
        link: "https://open.spotify.com/album/5wc12ZsmXNIlppTmNFZFLU?si=_c-tvMv-Tbyr-HJZv1ikvw",
        kind: "album"
    },
    {
        title: "Plastic Letters",
        cover: "https://i.scdn.co/image/ab67616d00001e02fe3f12dccf7a927630d33d08",
        rating: 5,
        author: "Blondie",
        link: "https://open.spotify.com/album/0N12rQBwFaD13ELCuEmUDl?si=IPMHAnhNQmqXysZZh7wfuA",
        kind: "album"
    },
    {
        title: "Blondie",
        cover: "https://i.scdn.co/image/ab67616d00001e02d377fa9b12ba09ee525b60a8",
        rating: 5,
        author: "Blondie",
        link: "https://open.spotify.com/album/54V45InMvJ6uVtRtO6h1Co?si=zlTqSZ5uT-2L3v1V9AZuiQ",
        kind: "album"
    },
    {
        title: "Autoamerican",
        cover: "https://i.scdn.co/image/ab67616d00001e026d2ee1965b70ef59d1f1f778",
        rating: 5,
        author: "Blondie",
        link: "https://open.spotify.com/album/1VuNXmZV6eIfUwglRlM9Ya?si=MCJ3aJ7oQP6L6TpX4fO2yQ",
        kind: "album"
    },
    {
        title: "War",
        cover: "https://i.scdn.co/image/ab67616d00001e02673526fcf35ab235e1a9d94c",
        rating: 5,
        author: "U2",
        link: "https://open.spotify.com/intl-fr/album/6GaqU0TlYBKHUiSJ0AT9A2?si=IhLKthuqS7yJJcRXFJJwKg",
        kind: "album"
    },
    {
        title: "Most of the Animals",
        cover: "https://i.scdn.co/image/ab67616d00001e02128b823a82be808648739034",
        rating: 5,
        author: "The Animals",
        link: "https://open.spotify.com/intl-fr/album/0Vhk3dVT59LnhwSHFXLIXA?si=chkDvw3xRDmUWUSjc3ihUw",
        kind: "album"
    },
    {
        title: "Combat Rock",
        cover: "https://i.scdn.co/image/ab67616d00001e0225a4df452a3c42ccc2e9288b",
        rating: 5,
        author: "The Clash",
        link: "https://open.spotify.com/intl-fr/album/1ZH5g1RDq3GY1OvyD0w0s2?si=6s_sQWILRSyUI2RnmQzdcw",
        kind: "album"
    },
    {
        title: "London Calling",
        cover: "https://i.scdn.co/image/ab67616d00001e02cd9d8bc9ef04014b6e90e182",
        rating: 5,
        author: "The Clash",
        link: "https://open.spotify.com/album/6FCzvataOZh68j8OKzOt9a?si=cSXQhNh1TH6f0aqxr8RdLQ",
        kind: "album"
    },
    {
        title: "The Wall",
        cover: "https://i.scdn.co/image/ab67616d00001e025d48e2f56d691f9a4e4b0bdf",
        rating: 5,
        author: "Pink Floyd",
        link: "https://open.spotify.com/album/5Dbax7G8SWrP9xyzkOvy2F?si=pLOKaLGRQNeythrXmV1tYA",
        kind: "album"
    },
    {
        title: "",
        cover: "",
        rating: 5,
        author: "",
        link: "",
        kind: ""
    },

    

];
