const AVATAR_URL = `https://placekitten.com/200/200`;

export default [
  {
    genre: `rock`,
    type: `genre`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `instrumental`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/5/55/Exhilarate_%28ISRC_USUAN1300028%29.mp3`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/8/85/Keef_Trouble%2C_Mix_%27n%27_Mingle.oga`,
        genre: `pop`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/0/05/Airport_Lounge_%28ISRC_USUAN1100806%29.mp3`,
        genre: `jazz`
      },
    ],
  },
  {
    genre: `funk`,
    type: `genre`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/0/01/Higher_Intelligent_Probes.wav`,
        genre: `ambient`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/5/5d/Music_Note_Emoticon.ogg`,
        genre: `funk`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/d/dc/ChicoMalo.ogg`,
        genre: `dance`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/44/Bet_You_Can_%28ISRC_USUAN1200018%29.mp3`,
        genre: `rock`
      },
    ],
  },
  {
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/3/32/Jingle_Bells_Or_The_One_Horse_Open_Sleigh_Complete.ogg`
    },
    type: `artist`,
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      },
    ],
  },
  {
    song: {
      artist: `Jack Daniels`,
      src: `https://upload.wikimedia.org/wikipedia/commons/c/c5/Are_You_With_Us_-_Wontolla.wav`
    },
    type: `artist`,
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`,
      },
    ],
  },
];
