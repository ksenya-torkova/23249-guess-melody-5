import {AuthorizationStatus} from "./const";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import {createStore, applyMiddleware} from "redux";
import {fetchQuestionList, checkAuth} from "./store/api-actions";
import {Provider} from "react-redux";
import {requireAuthorization} from "./store/action";
import App from "./components/app/app";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);


store.dispatch(fetchQuestionList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store = {store}>
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
