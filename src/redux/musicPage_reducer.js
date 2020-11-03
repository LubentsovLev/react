import { musicAPI } from "../api/api";
import * as axios from "axios";
import store from "./redux-store";
const TOGGLE_IS_FETCHING = "MUSIC/TOGGLE_IS_FETCHING";
const SET_MUSIC = "MUSIC/SET_MUSIC";
const GET_ALBUM = "MUSIC/GET_ALBUM";
const GET_ALBUM_DATA = "MUSIC/GET_ALBUM_DATA";

let initialState = {
  music: [
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
          },
          href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
          id: "3TVXtAsR1Inumwj472S9r4",
          name: "Drake",
          type: "artist",
          uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3hcs9uc56yIGFCSy9leWe7",
          },
          href: "https://api.spotify.com/v1/artists/3hcs9uc56yIGFCSy9leWe7",
          id: "3hcs9uc56yIGFCSy9leWe7",
          name: "Lil Durk",
          type: "artist",
          uri: "spotify:artist:3hcs9uc56yIGFCSy9leWe7",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/0qGdc7fNq9RNIPEzZufa43",
      },
      href: "https://api.spotify.com/v1/albums/0qGdc7fNq9RNIPEzZufa43",
      id: "0qGdc7fNq9RNIPEzZufa43",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b27352c75ed37313b889447011ef",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e0252c75ed37313b889447011ef",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d0000485152c75ed37313b889447011ef",
          width: 64,
        },
      ],
      name: "Laugh Now Cry Later (feat. Lil Durk)",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:0qGdc7fNq9RNIPEzZufa43",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6",
          },
          href: "https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6",
          id: "5YGY8feqx7naU7z4HrwZM6",
          name: "Miley Cyrus",
          type: "artist",
          uri: "spotify:artist:5YGY8feqx7naU7z4HrwZM6",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/7z5fmW3FDD6jlpJtwMXV51",
      },
      href: "https://api.spotify.com/v1/albums/7z5fmW3FDD6jlpJtwMXV51",
      id: "7z5fmW3FDD6jlpJtwMXV51",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273d59c3c489691c8b41043cab2",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02d59c3c489691c8b41043cab2",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851d59c3c489691c8b41043cab2",
          width: 64,
        },
      ],
      name: "Midnight Sky",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:7z5fmW3FDD6jlpJtwMXV51",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7",
          },
          href: "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
          id: "6VuMaDnrHyPL1p4EHjYLi7",
          name: "Charlie Puth",
          type: "artist",
          uri: "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2cFrymmkijnjDg9SS92EPM",
          },
          href: "https://api.spotify.com/v1/artists/2cFrymmkijnjDg9SS92EPM",
          id: "2cFrymmkijnjDg9SS92EPM",
          name: "blackbear",
          type: "artist",
          uri: "spotify:artist:2cFrymmkijnjDg9SS92EPM",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/7DLhC8ZXggJDd9HSa1PVGO",
      },
      href: "https://api.spotify.com/v1/albums/7DLhC8ZXggJDd9HSa1PVGO",
      id: "7DLhC8ZXggJDd9HSa1PVGO",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273e0e9139ff2f8256ebab8fc5b",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02e0e9139ff2f8256ebab8fc5b",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851e0e9139ff2f8256ebab8fc5b",
          width: 64,
        },
      ],
      name: "Hard On Yourself",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 2,
      type: "album",
      uri: "spotify:album:7DLhC8ZXggJDd9HSa1PVGO",
    },
    {
      album_type: "album",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
          },
          href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
          id: "3wcj11K77LjEY1PkEazffa",
          name: "Burna Boy",
          type: "artist",
          uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/218CJKDCszsQQj7Amk7vIu",
      },
      href: "https://api.spotify.com/v1/albums/218CJKDCszsQQj7Amk7vIu",
      id: "218CJKDCszsQQj7Amk7vIu",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273522cdbcd908ebc13b2ab269f",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02522cdbcd908ebc13b2ab269f",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851522cdbcd908ebc13b2ab269f",
          width: 64,
        },
      ],
      name: "Twice As Tall",
      release_date: "2020-08-13",
      release_date_precision: "day",
      total_tracks: 15,
      type: "album",
      uri: "spotify:album:218CJKDCszsQQj7Amk7vIu",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa",
          },
          href: "https://api.spotify.com/v1/artists/3DiDSECUqqY1AuBP8qtaIa",
          id: "3DiDSECUqqY1AuBP8qtaIa",
          name: "Alicia Keys",
          type: "artist",
          uri: "spotify:artist:3DiDSECUqqY1AuBP8qtaIa",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny",
          },
          href: "https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny",
          id: "6LuN9FCkKOj5PcnpouEgny",
          name: "Khalid",
          type: "artist",
          uri: "spotify:artist:6LuN9FCkKOj5PcnpouEgny",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/062XA53aUGExhE7e8ngYQO",
      },
      href: "https://api.spotify.com/v1/albums/062XA53aUGExhE7e8ngYQO",
      id: "062XA53aUGExhE7e8ngYQO",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273ba60f6810163afc8d6af7311",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02ba60f6810163afc8d6af7311",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851ba60f6810163afc8d6af7311",
          width: 64,
        },
      ],
      name: "So Done (feat. Khalid)",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:062XA53aUGExhE7e8ngYQO",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu",
          },
          href: "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
          id: "0C0XlULifJtAgn6ZNCW2eu",
          name: "The Killers",
          type: "artist",
          uri: "spotify:artist:0C0XlULifJtAgn6ZNCW2eu",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/3UL8kVLqJVXaS3tYsYpqf2",
      },
      href: "https://api.spotify.com/v1/albums/3UL8kVLqJVXaS3tYsYpqf2",
      id: "3UL8kVLqJVXaS3tYsYpqf2",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b2738ba71359b7d55ac913be805d",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e028ba71359b7d55ac913be805d",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d000048518ba71359b7d55ac913be805d",
          width: 64,
        },
      ],
      name: "Dying Breed",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:3UL8kVLqJVXaS3tYsYpqf2",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3oSJ7TBVCWMDMiYjXNiCKE",
          },
          href: "https://api.spotify.com/v1/artists/3oSJ7TBVCWMDMiYjXNiCKE",
          id: "3oSJ7TBVCWMDMiYjXNiCKE",
          name: "Kane Brown",
          type: "artist",
          uri: "spotify:artist:3oSJ7TBVCWMDMiYjXNiCKE",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/014fzAwHbsvUolo3ap8P38",
      },
      href: "https://api.spotify.com/v1/albums/014fzAwHbsvUolo3ap8P38",
      id: "014fzAwHbsvUolo3ap8P38",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273da0fbf5a54052f21c8499556",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02da0fbf5a54052f21c8499556",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851da0fbf5a54052f21c8499556",
          width: 64,
        },
      ],
      name: "Mixtape Vol. 1 - EP",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 7,
      type: "album",
      uri: "spotify:album:014fzAwHbsvUolo3ap8P38",
    },
    {
      album_type: "album",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/0QWrMNukfcVOmgEU0FEDyD",
          },
          href: "https://api.spotify.com/v1/artists/0QWrMNukfcVOmgEU0FEDyD",
          id: "0QWrMNukfcVOmgEU0FEDyD",
          name: "Jacob Collier",
          type: "artist",
          uri: "spotify:artist:0QWrMNukfcVOmgEU0FEDyD",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/33cj3kzLqVOg9zvy69Wrc8",
      },
      href: "https://api.spotify.com/v1/albums/33cj3kzLqVOg9zvy69Wrc8",
      id: "33cj3kzLqVOg9zvy69Wrc8",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b27334de228d223a20a8a5d1f465",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e0234de228d223a20a8a5d1f465",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d0000485134de228d223a20a8a5d1f465",
          width: 64,
        },
      ],
      name: "Djesse Vol. 3",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 12,
      type: "album",
      uri: "spotify:album:33cj3kzLqVOg9zvy69Wrc8",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz",
          },
          href: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
          id: "6XyY86QOPPrYVGvF9ch6wz",
          name: "Linkin Park",
          type: "artist",
          uri: "spotify:artist:6XyY86QOPPrYVGvF9ch6wz",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/43tjeef8lVwnRffkZY0uQp",
      },
      href: "https://api.spotify.com/v1/albums/43tjeef8lVwnRffkZY0uQp",
      id: "43tjeef8lVwnRffkZY0uQp",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273c06f72c0729c06ed777b5342",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02c06f72c0729c06ed777b5342",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851c06f72c0729c06ed777b5342",
          width: 64,
        },
      ],
      name: "She Couldn't",
      release_date: "2020-08-13",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:43tjeef8lVwnRffkZY0uQp",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2iojnBLj0qIMiKPvVhLnsH",
          },
          href: "https://api.spotify.com/v1/artists/2iojnBLj0qIMiKPvVhLnsH",
          id: "2iojnBLj0qIMiKPvVhLnsH",
          name: "Trey Songz",
          type: "artist",
          uri: "spotify:artist:2iojnBLj0qIMiKPvVhLnsH",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/65tz6yI9G9USj9R7jh1qh5",
      },
      href: "https://api.spotify.com/v1/albums/65tz6yI9G9USj9R7jh1qh5",
      id: "65tz6yI9G9USj9R7jh1qh5",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273f470d4c2b834e8cb8b876588",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02f470d4c2b834e8cb8b876588",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851f470d4c2b834e8cb8b876588",
          width: 64,
        },
      ],
      name: "Circles",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:65tz6yI9G9USj9R7jh1qh5",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/20qISvAhX20dpIbOOzGK3q",
          },
          href: "https://api.spotify.com/v1/artists/20qISvAhX20dpIbOOzGK3q",
          id: "20qISvAhX20dpIbOOzGK3q",
          name: "Nas",
          type: "artist",
          uri: "spotify:artist:20qISvAhX20dpIbOOzGK3q",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6q3p11nP1p80Ey6LrOOSed",
          },
          href: "https://api.spotify.com/v1/artists/6q3p11nP1p80Ey6LrOOSed",
          id: "6q3p11nP1p80Ey6LrOOSed",
          name: "Hit-Boy",
          type: "artist",
          uri: "spotify:artist:6q3p11nP1p80Ey6LrOOSed",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/0v216tN7nYI6TmDu4s7c3h",
      },
      href: "https://api.spotify.com/v1/albums/0v216tN7nYI6TmDu4s7c3h",
      id: "0v216tN7nYI6TmDu4s7c3h",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b27390c272193eb383546d845539",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e0290c272193eb383546d845539",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d0000485190c272193eb383546d845539",
          width: 64,
        },
      ],
      name: "Ultra Black",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:0v216tN7nYI6TmDu4s7c3h",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3Rx4PJ7SP6unkOk5elPUK7",
          },
          href: "https://api.spotify.com/v1/artists/3Rx4PJ7SP6unkOk5elPUK7",
          id: "3Rx4PJ7SP6unkOk5elPUK7",
          name: "Money Man",
          type: "artist",
          uri: "spotify:artist:3Rx4PJ7SP6unkOk5elPUK7",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/7imvEeL07Mz2CRfTq4NJPq",
      },
      href: "https://api.spotify.com/v1/albums/7imvEeL07Mz2CRfTq4NJPq",
      id: "7imvEeL07Mz2CRfTq4NJPq",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273e06d86567eefa94fb5cd205d",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02e06d86567eefa94fb5cd205d",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851e06d86567eefa94fb5cd205d",
          width: 64,
        },
      ],
      name: "24 (feat. Lil Baby)",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:7imvEeL07Mz2CRfTq4NJPq",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa",
          },
          href: "https://api.spotify.com/v1/artists/3jK9MiCrA42lLAdMGUZpwa",
          id: "3jK9MiCrA42lLAdMGUZpwa",
          name: "Anderson .Paak",
          type: "artist",
          uri: "spotify:artist:3jK9MiCrA42lLAdMGUZpwa",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1sBkRIssrMs1AbVkOJbc7a",
          },
          href: "https://api.spotify.com/v1/artists/1sBkRIssrMs1AbVkOJbc7a",
          id: "1sBkRIssrMs1AbVkOJbc7a",
          name: "Rick Ross",
          type: "artist",
          uri: "spotify:artist:1sBkRIssrMs1AbVkOJbc7a",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/6YBA1t4Nsfc0dO2SJBtDtA",
      },
      href: "https://api.spotify.com/v1/albums/6YBA1t4Nsfc0dO2SJBtDtA",
      id: "6YBA1t4Nsfc0dO2SJBtDtA",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b27397b0bf97840bf9ea631bfdb7",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e0297b0bf97840bf9ea631bfdb7",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d0000485197b0bf97840bf9ea631bfdb7",
          width: 64,
        },
      ],
      name: "CUT EM IN (feat. Rick Ross)",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:6YBA1t4Nsfc0dO2SJBtDtA",
    },
    {
      album_type: "album",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2C6i0I5RiGzDKN9IAF8reh",
          },
          href: "https://api.spotify.com/v1/artists/2C6i0I5RiGzDKN9IAF8reh",
          id: "2C6i0I5RiGzDKN9IAF8reh",
          name: "Banda MS de Sergio Lizárraga",
          type: "artist",
          uri: "spotify:artist:2C6i0I5RiGzDKN9IAF8reh",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/4j7afzzctfV0UPUrJKWCQk",
      },
      href: "https://api.spotify.com/v1/albums/4j7afzzctfV0UPUrJKWCQk",
      id: "4j7afzzctfV0UPUrJKWCQk",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b2731ca9fbf39f2f54d1081f172e",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e021ca9fbf39f2f54d1081f172e",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d000048511ca9fbf39f2f54d1081f172e",
          width: 64,
        },
      ],
      name: "El Trabajo Es La Suerte",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 18,
      type: "album",
      uri: "spotify:album:4j7afzzctfV0UPUrJKWCQk",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5qa31A9HySw3T7MKWI9bGg",
          },
          href: "https://api.spotify.com/v1/artists/5qa31A9HySw3T7MKWI9bGg",
          id: "5qa31A9HySw3T7MKWI9bGg",
          name: "FLETCHER",
          type: "artist",
          uri: "spotify:artist:5qa31A9HySw3T7MKWI9bGg",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/0FK0LbjBoNWTDqYJwipMVJ",
      },
      href: "https://api.spotify.com/v1/albums/0FK0LbjBoNWTDqYJwipMVJ",
      id: "0FK0LbjBoNWTDqYJwipMVJ",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273d6b9d7dbe79a25014884e390",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02d6b9d7dbe79a25014884e390",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851d6b9d7dbe79a25014884e390",
          width: 64,
        },
      ],
      name: "If I Hated You",
      release_date: "2020-08-12",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:0FK0LbjBoNWTDqYJwipMVJ",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3IunaFjvNKj98JW89JYv9u",
          },
          href: "https://api.spotify.com/v1/artists/3IunaFjvNKj98JW89JYv9u",
          id: "3IunaFjvNKj98JW89JYv9u",
          name: "The Japanese House",
          type: "artist",
          uri: "spotify:artist:3IunaFjvNKj98JW89JYv9u",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/1OlByJ5jsP9Eklfp03Xn8z",
      },
      href: "https://api.spotify.com/v1/albums/1OlByJ5jsP9Eklfp03Xn8z",
      id: "1OlByJ5jsP9Eklfp03Xn8z",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b2738935646998a8d28d13bc348d",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e028935646998a8d28d13bc348d",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d000048518935646998a8d28d13bc348d",
          width: 64,
        },
      ],
      name: "Chewing Cotton Wool",
      release_date: "2020-08-13",
      release_date_precision: "day",
      total_tracks: 4,
      type: "album",
      uri: "spotify:album:1OlByJ5jsP9Eklfp03Xn8z",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/46auOkH1pk28rWrSoUNhLo",
          },
          href: "https://api.spotify.com/v1/artists/46auOkH1pk28rWrSoUNhLo",
          id: "46auOkH1pk28rWrSoUNhLo",
          name: "Orville Peck",
          type: "artist",
          uri: "spotify:artist:46auOkH1pk28rWrSoUNhLo",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/39R5c82ytTeEF85kmJTtNT",
      },
      href: "https://api.spotify.com/v1/albums/39R5c82ytTeEF85kmJTtNT",
      id: "39R5c82ytTeEF85kmJTtNT",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273bf10c2848e7ee2ca6cdb2a9c",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02bf10c2848e7ee2ca6cdb2a9c",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851bf10c2848e7ee2ca6cdb2a9c",
          width: 64,
        },
      ],
      name: "Show Pony",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 6,
      type: "album",
      uri: "spotify:album:39R5c82ytTeEF85kmJTtNT",
    },
    {
      album_type: "single",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c",
          },
          href: "https://api.spotify.com/v1/artists/4MXUO7sVCaFgFjoTI5ox5c",
          id: "4MXUO7sVCaFgFjoTI5ox5c",
          name: "Sufjan Stevens",
          type: "artist",
          uri: "spotify:artist:4MXUO7sVCaFgFjoTI5ox5c",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/4eky3ZzSCyqxkFVDXTMyWG",
      },
      href: "https://api.spotify.com/v1/albums/4eky3ZzSCyqxkFVDXTMyWG",
      id: "4eky3ZzSCyqxkFVDXTMyWG",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b27337dc10b7e4d1db458fe91224",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e0237dc10b7e4d1db458fe91224",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d0000485137dc10b7e4d1db458fe91224",
          width: 64,
        },
      ],
      name: "Video Game",
      release_date: "2020-08-13",
      release_date_precision: "day",
      total_tracks: 2,
      type: "album",
      uri: "spotify:album:4eky3ZzSCyqxkFVDXTMyWG",
    },
    {
      album_type: "album",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4lpA7MWpQpY7hKkwfLxw2Q",
          },
          href: "https://api.spotify.com/v1/artists/4lpA7MWpQpY7hKkwfLxw2Q",
          id: "4lpA7MWpQpY7hKkwfLxw2Q",
          name: "Lindsay Ell",
          type: "artist",
          uri: "spotify:artist:4lpA7MWpQpY7hKkwfLxw2Q",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/4pTPkB7BSDqZboqQYbx7iF",
      },
      href: "https://api.spotify.com/v1/albums/4pTPkB7BSDqZboqQYbx7iF",
      id: "4pTPkB7BSDqZboqQYbx7iF",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b273c242a6f4393b087ef883daf4",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e02c242a6f4393b087ef883daf4",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d00004851c242a6f4393b087ef883daf4",
          width: 64,
        },
      ],
      name: "heart theory",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 12,
      type: "album",
      uri: "spotify:album:4pTPkB7BSDqZboqQYbx7iF",
    },
    {
      album_type: "album",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5QXLMdpKeByOo5ypH9gT13",
          },
          href: "https://api.spotify.com/v1/artists/5QXLMdpKeByOo5ypH9gT13",
          id: "5QXLMdpKeByOo5ypH9gT13",
          name: "Fantastic Negrito",
          type: "artist",
          uri: "spotify:artist:5QXLMdpKeByOo5ypH9gT13",
        },
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/6b96nRUJmHMTQwK1IK9tJy",
      },
      href: "https://api.spotify.com/v1/albums/6b96nRUJmHMTQwK1IK9tJy",
      id: "6b96nRUJmHMTQwK1IK9tJy",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab67616d0000b27388ef56bd1cfdaeb2bb1fbd6a",
          width: 640,
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/ab67616d00001e0288ef56bd1cfdaeb2bb1fbd6a",
          width: 300,
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/ab67616d0000485188ef56bd1cfdaeb2bb1fbd6a",
          width: 64,
        },
      ],
      name: "Have You Lost Your Mind yet?",
      release_date: "2020-08-14",
      release_date_precision: "day",
      total_tracks: 11,
      type: "album",
      uri: "spotify:album:6b96nRUJmHMTQwK1IK9tJy",
    },
  ],
  //music: [],
  album: [],
  albumData: [],

  isFetching: true,
};

const musicPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC: {
      return { ...state, music: action.music };
    }
    case GET_ALBUM: {
      return { ...state, album: action.album };
    }
    case GET_ALBUM_DATA: {
      return { ...state, albumData: action.albumData };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setMusic = (music) => ({ type: SET_MUSIC, music });
export const setAlbum = (album) => ({ type: GET_ALBUM, album });
export const setAlbumData = (albumData) => ({
  type: GET_ALBUM_DATA,
  albumData,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

function getToken() {
  debugger;
  let access_token_my =
    "access_token=BQAKjIj-Dfyq8fwEUnQPyFhJjXuUE_8PPNKImqznSWoGzSecrWzWWjpBMfGWZtMLc2q-Mwl7x-xePLR0dKqvpP1FgrSdwseRwNwbiQq5namZrZ7iSMFYYbOABsE1tCTtYIQMCrGf7_9V3sN1fE1vjByah0DLcvk&token_type=Bearer&expires_in=3600";
  let token = access_token_my;
  let tokend = window.location.hash.substr(1);
  if (token) {
    const o = Object.fromEntries(new URLSearchParams(token));
    return o.access_token;
  } else {
    // If there is no token, redirect to Spotify authorization
    redirectToSpotifyAuthentication();
  }
}

function redirectToSpotifyAuthentication() {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "f857636c0d3c40e1a684578653d1cd63";
  const redirectUri = `${window.location.protocol}//${window.location.host}/`;
  let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  window.location = `${authEndpoint}?${query}`;
}
export const token = getToken();

export const requestMusic = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await musicAPI.getSpotifyNewRel();
    dispatch(toggleIsFetching(false));
    dispatch(setMusic(response.data.albums.items));
  };
};
export const requestAlbum = (album) => {
  return async (dispatch) => {
    dispatch(setAlbum(album));
  };
};

const getSpotifyPlaylist = () => {
  return axios.get(store.getState().musicPage.album, {
    headers: { Authorization: `Bearer ${token}` },
    useDefaultXhrHeader: false,
  });
};
export const getAlbum = (album) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(requestAlbum(album));
    let response = await getSpotifyPlaylist();
    dispatch(toggleIsFetching(false));
    // let g =dispatch(setAlbumData(response.data.tracks.items));
    // debugger
    dispatch(setAlbumData(response.data.tracks.items));
  };
};

export default musicPageReducer;
