import {GameType} from "../const";

const AVATAR_URL = `https://placekitten.com/200/`;

export default [
  {
    answers: [
      {
        genre: `instrumental`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/5/55/Exhilarate_%28ISRC_USUAN1300028%29.mp3`,
      },
      {
        genre: `pop`,
        src: `https://upload.wikimedia.org/wikipedia/commons/8/85/Keef_Trouble%2C_Mix_%27n%27_Mingle.oga`,
      },
      {
        genre: `jazz`,
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
        src: `https://upload.wikimedia.org/wikipedia/commons/0/01/Higher_Intelligent_Probes.wav`,
      },
      {
        genre: `funk`,
        src: `https://upload.wikimedia.org/wikipedia/commons/5/5d/Music_Note_Emoticon.ogg`,
      },
      {
        genre: `dance`,
        src: `https://upload.wikimedia.org/wikipedia/commons/d/dc/ChicoMalo.ogg`,
      },
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/44/Bet_You_Can_%28ISRC_USUAN1200018%29.mp3`,
      },
    ],
    genre: `funk`,
    type: GameType.GENRE,
  },
  {
    answers: [
      {
        artist: `John Snow`,
        picture: `${AVATAR_URL}200`,
      },
      {
        artist: `Jack Daniels`,
        picture: `${AVATAR_URL}201`,
      },
      {
        artist: `Jim Beam`,
        picture: `${AVATAR_URL}202`,
      },
    ],
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/3/32/Jingle_Bells_Or_The_One_Horse_Open_Sleigh_Complete.ogg`
    },
    type: GameType.ARTIST,

  },
  {
    answers: [
      {
        artist: `Jack Daniels`,
        picture: `${AVATAR_URL}203`,
      },
      {
        artist: `Jim Beam`,
        picture: `${AVATAR_URL}204`,
      },
      {
        artist: `John Snow`,
        picture: `${AVATAR_URL}205`,
      },
    ],
    song: {
      artist: `Jack Daniels`,
      src: `https://upload.wikimedia.org/wikipedia/commons/c/c5/Are_You_With_Us_-_Wontolla.wav`
    },
    type: GameType.ARTIST,
  },
];
