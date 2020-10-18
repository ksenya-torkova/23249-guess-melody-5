import {extend} from "../utils";
import {ActionType} from "./action";

const inintialState = {
  mistakes: 0,
  step: 0,
};

const reducer = (state = inintialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload,
      });

    case ActionType.RESET_GAME:
      return extend(state, {}, inintialState);
  }

  return state;
};

export {reducer};
