import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import App from "./components/app/app";
import React from "react";
import ReactDOM from "react-dom";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store = {store}>
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
