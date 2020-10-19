import {GameType} from "../const";
import {nanoid} from "nanoid";

const AVATAR_URL = `https://placekitten.com/200/`;

export default [
  {
    answers: [
      {
        genre: `instrumental`,
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      {
        genre: `rock`,
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/5/55/Exhilarate_%28ISRC_USUAN1300028%29.mp3`,
      },
      {
        genre: `pop`,
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/8/85/Keef_Trouble%2C_Mix_%27n%27_Mingle.oga`,
      },
      {
        genre: `jazz`,
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/0/05/Airport_Lounge_%28ISRC_USUAN1100806%29.mp3`,
      },
    ],
    genre: `rock`,
    type: GameType.GENRE,
  },
  {
    answers: [
      {
        genre: `ambient`,
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/0/01/Higher_Intelligent_Probes.wav`,
      },
      {
        genre: `funk`,
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/5/5d/Music_Note_Emoticon.ogg`,
      },
      {
        genre: `dance`,
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/d/dc/ChicoMalo.ogg`,
      },
      {
        genre: `rock`,
        id: nanoid(),
        src: `https://upload.wikimedia.org/wikipedia/commons/4/44/Bet_You_Can_%28ISRC_USUAN1200018%29.mp3`,
      },
    ],
    genre: `funk`,
    type: GameType.GENRE,
  },
  {
    answers: [
      {
        artist: `Jack Daniels`,
        id: nanoid(),
        picture: `${AVATAR_URL}203`,
      },
      {
        artist: `Jim Beam`,
        id: nanoid(),
        picture: `${AVATAR_URL}204`,
      },
      {
        artist: `John Snow`,
        id: nanoid(),
        picture: `${AVATAR_URL}205`,
      },
    ],
    id: nanoid(),
    song: {
      artist: `Jack Daniels`,
      src: `https://upload.wikimedia.org/wikipedia/commons/c/c5/Are_You_With_Us_-_Wontolla.wav`
    },
    type: GameType.ARTIST,
  },
];
