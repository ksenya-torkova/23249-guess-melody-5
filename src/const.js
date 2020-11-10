const APIRoute = {
  QUESTIONS: `/questions`,
  LOGIN: `/login`,
};

const AppRoute = {
  LOGIN: `/login`,
  LOSE: `/lose`,
  RESULT: `/result`,
  ROOT: `/`,
  GAME: `/game`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const GameType = {
  ARTIST: `artist`,
  GENRE: `genre`,
};

const MISTAKES_MAX_AMOUNT = 3;

export {APIRoute, AppRoute, AuthorizationStatus, GameType, MISTAKES_MAX_AMOUNT};
