const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

const DEFAULT_STEP_SIZE = 1;

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: DEFAULT_STEP_SIZE,
  }),

  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
};

export {ActionCreator, ActionType};
