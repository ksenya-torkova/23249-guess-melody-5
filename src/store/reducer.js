import {ActionType} from "./action";
import {extend} from "../utils";
import {MISTAKES_MAX_AMOUNT} from "../const";
import questions from "../mocks/questions";

const inintialState = {
  mistakes: 0,
  questions,
  step: 0,
};

const reducer = (state = inintialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;

      if (mistakes >= MISTAKES_MAX_AMOUNT) {
        return extend({}, inintialState);
      }

      return extend(state, {
        mistakes,
      });

    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      return extend(state, {
        step: nextStep,
      });

    case ActionType.RESET_GAME:
      return extend(state, {}, inintialState);
  }

  return state;
};

export {reducer};
