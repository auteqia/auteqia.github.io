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
        cover: "https://i.scdn.co/image/ab67616d00001e0246926e777bd6665f03128d29",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4h9rWFWhgCSSrvIEQ0YhYG?si=23352ecbf67f45b6",
        kind: "album"
    },
    {
        title: "David Bowie aka Space Oddity",
        cover: "https://i.scdn.co/image/ab67616d00001e023395f3e809dfbc2b1101d464",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1ay9Z4R5ZYI2TY7WiDhNYQ?si=3a8beea060e34190",
        kind: "album"
    },
    {
        title: "Arkhaiomelisidonophunikheratos",
        cover: "https://i.scdn.co/image/ab67616d00001e02a04ab67781fd7f5fcd9f243f",
        rating: 3,
        link: "https://open.spotify.com/intl-fr/album/3Sb2zffOmDnzLhDrMboXAq?si=6a9fe4969f774c2d",
        kind: "album"
    },
    {
        title: "No Mercy for Love",
        cover: "https://i.scdn.co/image/ab67616d00001e02cde247dcf57d9e5d4974ed34",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/2lSiu7i14zUsuhEmMgZEX0?si=3818cf25474841e5",
        kind: "album"
    },    
    {
        title: "The Low End Theory",
        cover: "https://i.scdn.co/image/ab67616d00001e02f38c6b37a21334e22005b1f7",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1p12OAWwudgMqfMzjMvl2a?si=19defa6fa4a54d9e",
        kind: "album"
    },
    {
        title: "Here are the Sonics",
        cover: "https://i.scdn.co/image/ab67616d00001e023b8f9c148e9eead1143c78e6",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4vqaqoTEbNyeeSHJA6KpdM?si=8c82b91884ec4397",
        kind: "album"
    },
    {
        title: "The Gilded Palace of Sin",
        cover: "https://i.scdn.co/image/ab67616d0000b27353ba02e4c3b1b6a297002afa",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/6VWKy5o2OcdeWa7yolazjU?si=5cfea26c58554fbb",
        kind: "album"
    },

    {
        title: "In the Aeroplane over the Sea",
        cover: "https://i.scdn.co/image/ab67616d00001e02589ce9a911c6e65b1f80c558",
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
        cover: "https://i.scdn.co/image/ab67616d00001e022e261a0b1b19d0ff95e346b3",
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
        cover: "https://i.scdn.co/image/ab67616d00001e02175c577a61aa13d4fb4b6534",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5wtE5aLX5r7jOosmPhJhhk?si=22a007c77f4c4fc5",
        kind: "album"
    },
    {
        title: "The Doors",
        cover: "https://i.scdn.co/image/ab67616d00001e025b96a8c5d61be8878452f8f1",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/1jWmEhn3ggaL6isoyLfwBn?si=a3a5526ec6fe4204",
        kind: "album"
    },
    {
        title: "Bury Me at Makeout Creek",
        cover: "https://i.scdn.co/image/ab67616d00001e02e90db8983ebd43b776694179",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3I2KkX13lHXuYqfBjSOopo?si=1e824ad77e684c94",
        kind: "album"
    },
    {
        title: "Solid State Survivor",
        cover: "https://i.scdn.co/image/ab67616d00001e02c70aa05c55b6fb116863f6f5",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/5TmpFE7Xus70ko1QYGxFIe?si=f92037d9a5bc4e15",
        kind: "album"
    },
    {
        title: "Puberty 2",
        cover: "https://i.scdn.co/image/ab67616d00001e0229eb9ad9b9af34bbb54eb053",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4Coa8Eb9SzjrkwWEom963Q?si=de5f6256fdac4974",
        kind: "album"
    },
    {
        title: "Beats, Rhymes & Life",
        cover: "https://i.scdn.co/image/ab67616d00001e02e3b93c08d98f92dc3ab0146a",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/0EguP4tsJurU5I8ocCxdyb?si=1ebdf7e5f6614af6",
        kind: "album"
    },

    
    {
        title: "Mirage",
        cover: "https://i.scdn.co/image/ab67616d00001e0211537abd008a150b3f88dcaf",
        rating: 5,
        link: "https://open.spotify.com/album/2DZEwt8Lhz6PuqxsJWF7Ap?si=nj6WFi71R92obD4pdH3VKg",
        kind: "album"
    },
    {
        title: "One Step Beyond",
        cover: "https://i.scdn.co/image/ab67616d00001e026238b055ec362d2eea9beb26",
        rating: 5,
        link: "https://open.spotify.com/album/0scFCb0HjpQvWaJ7fu16hn?si=TLu4dIC_QRO-emnOtwj-Mw",
        kind: "album"
    },
    {
        title: "Beats, Rhymes & Life",
        cover: "https://i.scdn.co/image/ab67616d00001e02e3b93c08d98f92dc3ab0146a",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/0EguP4tsJurU5I8ocCxdyb?si=1ebdf7e5f6614af6",
        kind: "album"
    },
    {
        title: "Full Circle",
        cover: "https://i.scdn.co/image/ab67616d00001e02a217433125ab8324ce5f7e09",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/26Fac6kNgB6MLeoGVkmpKN?si=f5e677050459423d",
        kind: "album"
    },
    {
        title: "Mirage",
        cover: "https://i.scdn.co/image/ab67616d00001e0211537abd008a150b3f88dcaf",
        rating: 5,
        link: "https://open.spotify.com/album/2DZEwt8Lhz6PuqxsJWF7Ap?si=zcrWZGCVSv2uxk5hqnnkgQ",
        kind: "album"
    },
    {
        title: "Contemporary Movement",
        cover: "https://i.scdn.co/image/ab67616d00001e02f2905338b1e6e07e167ee305",
        rating: 5,
        link: "https://open.spotify.com/album/6CYyrh3J08jXacgo9wHwsU?si=OBIYn1QdSICoWQG1UT-JPg",
        kind: "album"
    },
    {
        title: "One Step Beyond",
        cover: "https://i.scdn.co/image/ab67616d00001e026238b055ec362d2eea9beb26",
        rating: 5,
        link: "https://open.spotify.com/album/0scFCb0HjpQvWaJ7fu16hn?si=29dmeqtKRI6MMM2Zblm7fA",
        kind: "album"
    },
    {
        title: "Be the Cowboy",
        cover: "https://i.scdn.co/image/ab67616d00001e02c428f67b4a9b7e1114dfc117",
        rating: 5,
        link: "https://open.spotify.com/album/42cH7mrkfljkqkxA2Ip9Xq?si=Zd_BhXz8R6ClaxVcb-LegA",
        kind: "album"
    },
    {
        title: "(III)",
        cover: "https://i.scdn.co/image/ab67616d00001e028c4fcffc07dd98ad89c0f383",
        rating: 5,
        link: "https://open.spotify.com/album/2KYBzzK8L9yvBe0k5GeoD8?si=DSRw2NNLSv6KMz6EpceGww",
        kind: "album"
    },
    {
        title: "Lush",
        cover: "https://i.scdn.co/image/ab67616d00001e02e3b93c08d98f92dc3ab0146a",
        rating: 5,
        link: "https://open.spotify.com/album/22MICAVuz34zzqm4Se5Lga?si=yhGLr03lSV2xJV8xh6kd6g8",
        kind: "album"
    },
    {
        title: "Pyramid",
        cover: "https://i.scdn.co/image/ab67616d00001e0242165edf668b41cb531722b0",
        rating: 5,
        link: "https://open.spotify.com/album/3GwhihLKs0eZmgUUrshE9k?si=5bf81ea8e36a4b9b",
        kind: "album"
    },
    {
        title: "Beats, Rhymes & Life",
        cover: "https://i.scdn.co/image/ab67616d00001e02e3b93c08d98f92dc3ab0146a",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/0EguP4tsJurU5I8ocCxdyb?si=1ebdf7e5f6614af6",
        kind: "album"
    },
    {
        title: "The Fat of The Land",
        cover: "https://i.scdn.co/image/ab67616d00001e028688e410538bc27972791f4c",
        rating: 5,
        link: "https://open.spotify.com/album/4fdgcEVMdJe0KVgupMNJAP?si=KCpxnGK0S7aF-XBANk2CpA",
        kind: "album"
    },
    {
        title: "Experience",
        cover: "https://i.scdn.co/image/ab67616d00001e028cd856419c4f5ac9994c64fe",
        rating: 5,
        link: "https://open.spotify.com/album/2hEyYIrm4e6gVgfaYLY00x?si=fNhxTJP0S0aSwH7nreBIUQ",
        kind: "album"
    },
    {
        title: "Rock 'n' Roll Animal",
        cover: "https://i.scdn.co/image/ab67616d00001e026f45f8b4aaf3ee06469c9f5b",
        rating: 5,
        link: "https://open.spotify.com/album/7ibv6MJHfkq0al0QRmoCd6?si=99zZhi5vRjy1sFQSd1RDrg",
        kind: "album"
    },
    {
        title: "Transformer",
        cover: "https://i.scdn.co/image/ab67616d00001e02d55149748dca0e5a1f40778e",
        rating: 5,
        link: "https://open.spotify.com/album/5SqbMEyAt8332ISGiLX0St?si=8j_Pc0BxRG2lfZZeAjMrRA",
        kind: "album"
    },
    {
        title: "New York",
        cover: "https://i.scdn.co/image/ab67616d00001e026386bf63d1326306c9b168ef",
        rating: 5,
        link: "https://open.spotify.com/album/7xGqf9DddW89cg7m6zX88t?si=2WRQSy_OQ8ONWS7jIT59tA",
        kind: "album"
    },
    {
        title: "Lust For Life",
        cover: "https://i.scdn.co/image/ab67616d00001e024aa5f679427e35409a06f225",
        rating: 5,
        link: "https://open.spotify.com/album/2jnV6ytZOmt71iEC5xHEYz?si=UGiYTvJoS2W22eukQn-DQw",
        kind: "album"
    },
    {
        title: "The Idiot",
        cover: "https://i.scdn.co/image/ab67616d00001e022023cfc4febdbe8213a41f8a",
        rating: 5,
        link: "https://open.spotify.com/album/78UazygH85UAB0qXqQpzg6?si=ECxctRs3S9q7_syvHONApQ",
        kind: "album"
    },
    {
        title: "10000 lépés",
        cover: "https://i.scdn.co/image/ab67616d00001e021a8105b6d15067a8a81435c2",
        rating: 5,
        link: "https://open.spotify.com/album/5GVrqNePT3Rek05os9fegp?si=KK2xBDnaQbi92-uO35UGXQ",
        kind: "album"
    },
    {
        title: "Mothership",
        cover: "https://i.scdn.co/image/ab67616d00001e0222f1b6c28ce5735646b2e569",
        rating: 5,
        link: "https://open.spotify.com/album/4wExFfncaUIqSgoxnqa3Eh?si=DxABFJLwRYq2LssHDM23JA",
        kind: "album"
    },
    {
        title: "Amigos",
        cover: "https://i.scdn.co/image/ab67616d00001e029dbda89d303ef548c712570f",
        rating: 5,
        link: "https://open.spotify.com/album/1xlThGcidi851d3NwHfjQH?si=3O4StAlcQReR-koH53jeKA",
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
        cover: "https://i.scdn.co/image/ab67616d00001e025fb94199e9cef141cba5c038",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/3B2xgIcoHjm1HdHYDydoUu?si=bfc7458767c841a0",
        kind: "album"
    },
    {
        title: "Plaisirs d'amour",
        cover: "https://i.scdn.co/image/ab67616d00001e026219cb49fe3b85a56c416e5e",
        rating: 5,
        link: "https://open.spotify.com/intl-fr/album/4qOpd4VHIeXU8W2yAay4XL?si=25d2c14247714602",
        kind: "album"
    },
    {
        title: "The Smiths",
        cover: "https://i.scdn.co/image/ab67616d00001e02a09b231129ab1cb1a6efc57f",
        rating: 5,
        link: "https://open.spotify.com/album/6cI1XoZsOhkyrCwtuI70CN?si=rYF7oUjrQg2TVdYhpD1EBw",
        kind: "album"
    },
    {
        title: "R Plus Seven",
        cover: "https://i.scdn.co/image/ab67616d00001e02550e1f33331271473e05b0f0",
        rating: 5,
        link: "https://open.spotify.com/album/6MEswIpaIGVN8M68FGr550?si=VVB_MMZ2TR6KiqVt_zeITg",
        kind: "album"
    },
    {
        title: "Surrender",
        cover: "https://i.scdn.co/image/ab67616d00001e0229dc59785f4c767fcbfc9e38",
        rating: 5,
        link: "https://open.spotify.com/album/1QJP73UumgERuzp3yJSXw3?si=WC0PeknAQMypuS2G06yIyA",
        kind: "album"
    },
    {
        title: "La Planète Sauvage",
        cover: "https://i.scdn.co/image/ab67616d00001e02da435c0e7c069c4b8cd90eff",
        rating: 5,
        link: "https://open.spotify.com/album/4BF1mMXkDo1NcJCgEBXKEk?si=3V72a01FT6-x8OU7BrNHtg",
        kind: "album"
    },
    {
        title: "1584660650",
        cover: "https://i.scdn.co/image/ab67616d00001e024fa0196ad0b1435563fbd4ab",
        rating: 5,
        link: "https://open.spotify.com/album/4JY1a8QLSJD0JNSOZ2ekJ2?si=OSkXs36ETGKL2egce4SfWw",
        kind: "album"
    },
    {
        title: "Crystal Castles",
        cover: "https://i.scdn.co/image/ab67616d00001e02b01fea159227ea845c2bd72e",
        rating: 5,
        link: "https://open.spotify.com/album/3LnVvIeiLCngvwEnbdxwCT?si=FCs_ESPuRt6YxjlbXZWFPw",
        kind: "album"
    },
    {
        title: "Rebell Yell",
        cover: "https://i.scdn.co/image/ab67616d00001e02ea07dca8b4ca808c1e5b17fb",
        rating: 5,
        link: "https://open.spotify.com/album/2FZNWUmgRoP8uJZBaHJdfj?si=Zs0zvPmnSAmEIBsI2Yk8bA",
        kind: "album"
    },
    {
        title: "Alive 2007",
        cover: "https://i.scdn.co/image/ab67616d00001e02b01fea159227ea845c2bd72e",
        rating: 5,
        link: "https://open.spotify.com/album/7u6zL7kqpgLPISZYXNTgYk?si=ErzPjP0ARDK_2CXet0udCg",
        kind: "album"
    },
    {
        title: "Cosmic Messenger",
        cover: "https://i.scdn.co/image/ab67616d00001e02b5d4374a23ae05bbc834f78d",
        rating: 5,
        link: "https://open.spotify.com/album/6EfLu75i2jqhN4s4xlqh6m?si=L1nB73J_R0CtfwTMKULNIA",
        kind: "album"
    },
    {
        title: "Enigmatic Ocean",
        cover: "https://i.scdn.co/image/ab67616d00001e024b5090050309c67110e2640a",
        rating: 5,
        link: "https://open.spotify.com/album/7Der8eY3aiNi3cieeMBRFB?si=QL0w_a7JQQmHViDVFW6TqA",
        kind: "album"
    },
    {
        title: "Mystical Adventures",
        cover: "https://i.scdn.co/image/ab67616d00001e02c1426c6c8d232c3f989d1eea",
        rating: 5,
        link: "https://open.spotify.com/album/3sRDigE2YdvQxHHJBYzVOT?si=rEC9XF5wQZ-Ly4h9iALegw",
        kind: "album"
    },
    {
        title: "More Than Meets The Ear",
        cover: "https://i.scdn.co/image/ab67616d00001e025a2b32c26554809c65fcebdd",
        rating: 5,
        link: "https://open.spotify.com/album/5iBrOoF7NWcWAwqvUlp3vF?si=9STQkJfsQy-XRKhW-cYuRw",
        kind: "album"
    },
    {
        title: "The Gift Of Time",
        cover: "https://i.scdn.co/image/ab67616d00001e022a3051e76d4d80294d63dd70",
        rating: 5,
        link: "https://open.spotify.com/album/62Qyi10NujVY0LGOAgA5nc?si=O2qPtBnwRYukAS11iBuecQ",
        kind: "album"
    },
    {
        title: "It Began In Afrika",
        cover: "https://i.scdn.co/image/ab67616d00001e02c2a3ee68e62d2c2cf9853576",
        rating: 5,
        link: "https://open.spotify.com/album/1XThG0D6l2avQMhMSXtY1P?si=7500gbHGQOiXoQ8cCcQftg",
        kind: "album"
    },
    {
        title: "My Generation",
        cover: "https://i.scdn.co/image/ab67616d00001e0234658b1827b64a1d4d5a5ca9",
        rating: 5,
        link: "https://open.spotify.com/album/6Oc6Ok1Oawu8lRkjmD4mXy?si=kN63MpSXTd-z2aTlqEw0vg",
        kind: "album"
    },
    {
        title: "Herb Alpert Presents Sergio Mendes & Brasil '66",
        cover: "https://i.scdn.co/image/ab67616d00001e02669997c50e4896d14c469a02",
        rating: 5,
        link: "https://open.spotify.com/album/0bPYHZxK1WgszwiNnCa79U?si=2vbEr6zFR2iKWYhRMjH1eQ",
        kind: "album"
    },
    {
        title: "Twoism",
        cover: "https://i.scdn.co/image/ab67616d00001e02f49a49ce8736c14f4d4990fb",
        rating: 5,
        link: "https://open.spotify.com/album/46YfeDd8YhuAcywdxZkRqf?si=1F1P-UjQTIu9pTDXUv8RYQ",
        kind: "album"
    },
    {
        title: "Mezzanine",
        cover: "https://i.scdn.co/image/ab67616d00001e022fcb0a3c7a66e516b11cd26e",
        rating: 5,
        link: "https://open.spotify.com/album/49MNmJhZQewjt06rpwp6QR?si=CAocdMtRQB6xMVTbkgmjcw",
        kind: "album"
    },
    {
        title: "Dance Hall Style",
        cover: "https://i.scdn.co/image/ab67616d00001e020ddf1762d8c79514aaf317af",
        rating: 5,
        link: "https://open.spotify.com/album/7rjTtjpSy2SzL8cydh1W5s?si=NZGf_kUVQBaUzlBWVpBJKQ",
        kind: "album"
    },
    {
        title: "Deathconsciousness",
        cover: "https://i.scdn.co/image/ab67616d00001e02a54f2b401501b3569990c256",
        rating: 5,
        link: "https://open.spotify.com/album/6MH3CAXp8AN8ELrbex18dM?si=rCrFI7A8Skqp2fqU_GzCkQ",
        kind: "album"
    },
    {
        title: "Never Mind The Bollocks, Here's The Sex Pistols",
        cover: "https://i.scdn.co/image/ab67616d00001e0260d17b40194e90e1dd6bc5fd",
        rating: 5,
        link: "https://open.spotify.com/album/17lv1Ruxq46ZK5xAINAX8J?si=TgLXqqzoS1ewV0lMT6_mCg",
        kind: "album"
    },
    {
        title: "In The Court Of The Crimson King",
        cover: "https://i.scdn.co/image/ab67616d00001e02da7b326bd7ffa7b6b95b0660",
        rating: 5,
        link: "https://open.spotify.com/album/75ol9OP8bJaRqzGimpFHDm?si=V7M_LdjIS2GH5AGjtPOvyA",
        kind: "album"
    },
    {
        title: "Parachute",
        cover: "https://i.scdn.co/image/ab67616d00001e0277fb589d6b097775f1ce3dcd",
        rating: 5,
        link: "https://open.spotify.com/album/1mz6AZJZanmgynkVQgflMK?si=34alwmBrQvWilRyjLXdyVA",
        kind: "album"
    },
    {
        title: "She Wants Revenge",
        cover: "https://i.scdn.co/image/ab67616d00001e02717f38200c8370df83f6364b",
        rating: 5,
        link: "https://open.spotify.com/album/3S41D3x5NUwlVOuUNwoZ16?si=n5USH2MnS_GaE6lC62CZSg",
        kind: "album"
    },
    {
        title: "Up And Down",
        cover: "https://i.scdn.co/image/ab67616d00001e02d57a0c3e3023c3e05d061960",
        rating: 5,
        link: "https://open.spotify.com/album/5vhJlo8GF4hfoFexjo3zZu?si=Xy4dMMQNSt6-X_szs5SU8Q",
        kind: "album"
    },
    {
        title: "Ice 'n' Green",
        cover: "https://i.scdn.co/image/ab67616d00001e0277fb589d6b097775f1ce3dcd",
        rating: 5,
        link: "https://open.spotify.com/album/3fSQDORWIQuhjPWZOptkML?si=FBq39oLwRjix70befvVXDw",
        kind: "album"
    },
    {
        title: "Inside",
        cover: "https://i.scdn.co/image/ab67616d00001e0262929dd943cfaaa0a6f0879c",
        rating: 5,
        link: "https://open.spotify.com/album/6mnhtrfvfW4kW6XrxCsD3T?si=431HAZdDQQqJ5k8CYJ7RvA",
        kind: "album"
    },
    {
        title: "Led Zeppelin II",
        cover: "https://i.scdn.co/image/ab67616d00001e02f396ea414b735ef23e2ed1a9",
        rating: 5,
        link: "https://open.spotify.com/album/58MQ0PLijVHePUonQlK76Y?si=TRjRZiZ-Qt-rvqlAMKbvqw",
        kind: "album"
    },
    {
        title: "Led Zeppelin III",
        cover: "https://i.scdn.co/image/ab67616d00001e0290a50cfe99a4c19ff3cbfbdb",
        rating: 5,
        link: "https://open.spotify.com/album/6P5QHz4XtxOmS5EuiGIPut?si=xD6mjjclS2WD9qGLC7PVNg",
        kind: "album"
    },
    {
        title: "Led Zeppelin IV",
        cover: "https://i.scdn.co/image/ab67616d00001e0277fb589d6b097775f1ce3dcd",
        rating: 5,
        link: "https://open.spotify.com/album/5EyIDBAqhnlkAHqvPRwdbX?si=nxtTnclWTy6f9wonxql75Q",
        kind: "album"
    },
    {
        title: "Silent Cries And Mighty Echoes",
        cover: "https://i.scdn.co/image/ab67616d00001e02b4fb31db30c04a9e2f7626eb",
        rating: 5,
        link: "https://open.spotify.com/album/2r2xRCQbhNanjDfa6YunIR?si=3WLms4qCRrmrnI9Z7XNrEw",
        kind: "album"
    },
    {
        title: "choke enough",
        cover: "https://i.scdn.co/image/ab67616d00001e0282cd01439c783e21898a9f84",
        rating: 5,
        link: "https://open.spotify.com/album/4TQqRcEliluExEwsmWVenF?si=X5gM6X2oT0GO-K660wLHnQ",
        kind: "album"
    },
    {
        title: "Perfectly Blue",
        cover: "https://i.scdn.co/image/ab67616d00001e0209e4f5566d3d59864544b568",
        rating: 5,
        link: "https://open.spotify.com/album/41QqoYgZKBZyd74WtB0vq2?si=bmFYJHRRQNCwsq-FnCYs5g",
        kind: "album"
    },
    {
        title: "The Turn Of A Friendly Card",
        cover: "https://i.scdn.co/image/ab67616d00001e02b4d76c01778a41bcd993f550",
        rating: 5,
        link: "https://open.spotify.com/album/1yPaTI4UxwbhZYbRkyZrFR?si=K3JNyC3_QxagpxRm5dyqJQ",
        kind: "album"
    },
    {
        title: "Tales Of Mystery And Imagination",
        cover: "https://i.scdn.co/image/ab67616d00001e02dd7e9be4966d93c97906200d",
        rating: 5,
        link: "https://open.spotify.com/album/0ICEGX26wNqIKLmWRpZxwx?si=OGOypG1eQHOd5uP8Odfrxg",
        kind: "album"
    },
    {
        title: "Herp Alpert & the Tijuana Brass",
        cover: "https://i.scdn.co/image/ab67616d00001e021586c0813e5ce5559d696d17",
        rating: 5,
        link: "https://open.spotify.com/album/1gKrnjjDM8R3RD7iwg0tGM?si=7iMLBO6ARku9yUHj2jJFug",
        kind: "album"
    },
    {
        title: "Steal This Album!",
        cover: "https://i.scdn.co/image/ab67616d00001e027cf4c0d42c5b62c9deebdcd8",
        rating: 5,
        link: "https://open.spotify.com/album/6lA1sGw7eCv27bcpd5E0wT?si=ubPAR9V-QkOZjFsZ1zpx_Q",
        kind: "album"
    },
    {
        title: "EUSEXUA",
        cover: "https://i.scdn.co/image/ab67616d00001e02bd5d937814595eeb925ab03f",
        rating: 5,
        link: "https://open.spotify.com/album/3o1TOhMkU5FFMSJMDhXfdF?si=B0V64BADRuaAMuFnjj9RGw",
        kind: "album"
    },
    {
        title: "Perfectly Blue",
        cover: "https://i.scdn.co/image/ab67616d00001e0209e4f5566d3d59864544b568",
        rating: 5,
        link: "https://open.spotify.com/album/41QqoYgZKBZyd74WtB0vq2?si=bmFYJHRRQNCwsq-FnCYs5g",
        kind: "album"
    },
    {
        title: "Perfectly Blue",
        cover: "https://i.scdn.co/image/ab67616d00001e0209e4f5566d3d59864544b568",
        rating: 5,
        link: "https://open.spotify.com/album/41QqoYgZKBZyd74WtB0vq2?si=bmFYJHRRQNCwsq-FnCYs5g",
        kind: "album"
    },
    {
        title: "No Eartly Connection",
        cover: "https://i.scdn.co/image/ab67616d00001e027e0d3cafd5232d6ccb975946",
        rating: 5,
        link: "https://open.spotify.com/album/7Kw6q6WZhz0BC7SJN99PLB?si=Xc8uFsLRRWepDXXN-BloNQ",
        kind: "album"
    },

    {
        title: "Toxicity",
        cover: "https://i.scdn.co/image/ab67616d00001e0207bc7d2a745636c356b4d0aa",
        rating: 5,
        link: "https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh?si=OV78jCZzRaikT1IJCO508Q",
        kind: "album"
    },
    {
        title: "Civilized Evil",
        cover: "https://i.scdn.co/image/ab67616d00001e026880ca96312ca84020009730",
        rating: 5,
        link: "https://open.spotify.com/album/3HfjIGx8MTHt9pmL1rJyL9?si=UzNme3eVQdeXPx6vddzyYQ",
        kind: "album"
    },
    {
        title: "Tales Of Mystery And Imagination (Original 1976 Version)",
        cover: "https://i.scdn.co/image/ab67616d00001e02dd7e9be4966d93c97906200d",
        rating: 5,
        link: "https://open.spotify.com/album/0ICEGX26wNqIKLmWRpZxwx?si=2JVjRk5fS2SfB-kqSaJClQ",
        kind: "album"
    },
    {
        title: "Volcano",
        cover: "https://i.scdn.co/image/ab67616d00001e021bd8726f0326ce113038a1f4",
        rating: 5,
        link: "https://open.spotify.com/album/0Mrv2YvHtRgyn3j3S38mEF?si=PAgPEZziSlqg7_-MfI624Q",
        kind: "album"
    },
    {
        title: "No Pussyfooting",
        cover: "https://i.scdn.co/image/ab67616d00001e0268e33726e53c01d42a6d1f3c",
        rating: 5,
        link: "https://open.spotify.com/album/7090pUnNlv1lklI2lI2X6J?si=iz68yPc_SMiO4Y6Zun4XFg",
        kind: "album"
    },
    {
        title: "Led Zeppelin",
        cover: "https://i.scdn.co/image/ab67616d00001e02c77c73285cc5cb64d97e1b0f",
        rating: 5,
        link: "https://open.spotify.com/album/1J8QW9qsMLx3staWaHpQmU?si=a9QKyyywQvq6JmnVn7n2IQ",
        kind: "album"
    },
    {
        title: "Sun Structures",
        cover: "https://i.scdn.co/image/ab67616d00001e02f35c8b47c52ab1f3668a6927",
        rating: 5,
        link: "https://open.spotify.com/album/0bJvWkM6E03FI8DEHiCuUU?si=32TCfO9tShCCzzBNHWpyHA",
        kind: "album"
    },
    {
        title: "Music Has The Right To Children",
        cover: "https://i.scdn.co/image/ab67616d00001e029effb26eea559ce6f3fed751",
        rating: 5,
        link: "https://open.spotify.com/album/6LZiNXaDvhzvnXUubVOmNU?si=ROCuqIgWRK2DOyHS-RwArg",
        kind: "album"
    },
    {
        title: "Quoth",
        cover: "https://i.scdn.co/image/ab67616d00001e02576800526554c66833197d76",
        rating: 3.6,
        link: "https://open.spotify.com/album/4F83Th71IEwecavhxGFGzN?si=_iEnUFVSTOOkMrHMvcNAnw",
        kind: "album"
    },
    {
        title: "Undertow",
        cover: "https://i.scdn.co/image/ab67616d00001e0282298636c94b8167c4793db2",
        rating: 3.6,
        link: "https://open.spotify.com/album/3Esn6LoXuWtLZNYq8FCzr0?si=PLR3N6J3Say_gAPqxM-NvQ",
        kind: "album"
    },
    {
        title: "The Pearl",
        cover: "https://i.scdn.co/image/ab67616d00001e02a00536b039aaefb64040d8dd",
        rating: 4.8,
        link: "https://open.spotify.com/album/5SSf6lNbSoaAUx6PxQVjlP?si=yKHckzBnTQ2hX4yj1MlCew",
        kind: "album"
    },
    {
        title: "Ambiant 4: On Land",
        cover: "https://i.scdn.co/image/ab67616d00001e02c83fef08b45f1784b4e916ba",
        rating: 5,
        link: "https://open.spotify.com/album/6siM9Wpdrdlt5xQYohETIh?si=Luh5los9SM24YNpVPSzKdg",
        kind: "album"
    },
    {
        title: "Getz/Gilberto",
        cover: "https://i.scdn.co/image/ab67616d00001e02417cc363d7286a88489dee3c",
        rating: 3.6,
        link: "https://open.spotify.com/album/2W6Hvrtg2Zpc9dW4aBDbdP?si=9hU3UJ6MR7ayQ4RGCBLGKA",
        kind: "album"
    },
    {
        title: "The Fame Monster",
        cover: "https://i.scdn.co/image/ab67616d00001e025c9890c0456a3719eeecd8aa",
        rating: 4,
        link: "https://open.spotify.com/album/6rePArBMb5nLWEaY9aQqL4?si=YvHpcrHmTbyvl2mhHtnHMg",
        kind: "album"
    },
    {
        title: "Ambient 2: The Plateaux Of Mirror",
        cover: "https://i.scdn.co/image/ab67616d00001e02eba05344ff7ca99e2fd35545",
        rating: 4.2,
        link: "https://open.spotify.com/album/5ma9r5NFV0poevmydI2qgO?si=Rpwja9KdSnGPdAdSks7yUQ",
        kind: "album"
    },
    {
        title: "Howl's Moving Castle",
        cover: "https://i.scdn.co/image/ab67616d00001e0262c1f3370811c52ae2d26d24",
        rating: 5,
        link: "https://open.spotify.com/album/5fqlZFKYqvkIe2jdDGt2nl?si=JQVhwslmSl2Rd2kUfwRL_w",
        kind: "album"
    },
    {
        title: "The Wind Rises",
        cover: "https://i.scdn.co/image/ab67616d00001e02c853c5a8535cc3dc394efc58",
        rating: 5,
        link: "https://open.spotify.com/album/59U5FQ4kDEt11Q2UcFu1dK?si=RmU-9e3RRMaaPbcepRClkQ",
        kind: "album"
    },

];
