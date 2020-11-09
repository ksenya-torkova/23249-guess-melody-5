import {GameType} from "../const";
import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "../game";

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  RESET_GAME: `RESET_GAME`,
};

const DEFAULT_STEP_SIZE = 1;

const incrementMistake = (question, userAnswer) => {
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
};

const incrementStep = () => ({
  type: ActionType.INCREMENT_STEP,
  payload: DEFAULT_STEP_SIZE,
});

const loadQuestions = (questions) => ({
  type: ActionType.LOAD_QUESTIONS,
  payload: questions,
});

const resetGame = () => ({
  type: ActionType.RESET_GAME,
});

export {ActionType, incrementMistake, incrementStep, loadQuestions, resetGame};
