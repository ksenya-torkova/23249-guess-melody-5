import {GameType} from "../const";
import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "../game";

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

const DEFAULT_STEP_SIZE = 1;

const ActionCreator = {
  incrementMistake: (question, userAnswer) => {
    let isAnswerCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        isAnswerCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;

      case GameType.GENRE:
        isAnswerCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: isAnswerCorrect ? 0 : 1,
    };
  },

  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: DEFAULT_STEP_SIZE,
  }),

  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
};

export {ActionCreator, ActionType};
