import {AuthorizationStatus} from "../const";
import {loadQuestions, redirectToRoute, requireAuthorization} from "./action";

const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(`/questions`)
    .then(({data}) => dispatch(loadQuestions(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/result`)))
);

export {checkAuth, fetchQuestionList, login};
