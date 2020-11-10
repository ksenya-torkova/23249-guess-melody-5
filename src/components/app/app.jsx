import {AppRoute, MISTAKES_MAX_AMOUNT} from "../../const";
import {Route, Router as BrowserRouter, Switch} from "react-router-dom";
import browserHistory from "../../browser-history";
import GameScreen from "../game-screen/game-screen";
import Login from "../login/login";
import Losing from "../losing/losing";
import PrivateRoute from "../private-route/private-route";
import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Win from "../win/win";

const App = () => {
  return (
    <BrowserRouter history = {browserHistory}>
      <Switch>
        <Route
          path = {AppRoute.ROOT}
          exact
          render = {({history}) => (
            <WelcomeScreen
              errorsCount = {MISTAKES_MAX_AMOUNT}
              onPlayButtonClick = {() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route path = {AppRoute.GAME} exact>
          <GameScreen
            mistakesCount = {MISTAKES_MAX_AMOUNT}
          />
        </Route>
        <Route path = {AppRoute.LOGIN} exact>
          <Login
            onReplayButtonClick={() => history.push(AppRoute.GAME)}
          />
        </Route>
        <PrivateRoute
          exact
          path = {AppRoute.RESULT}
          render = {({history}) => {
            return (
              <Win
                onReplayButtonClick={() => history.push(AppRoute.GAME)}
              />
            );
          }}
        />
        <Route exact
          path = {AppRoute.LOSE}
          render = {({history}) => (
            <Losing
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route>
          <React.Fragment>
            <h1>
              404.
              <br />
              <small>Sorry, nothing found</small>
            </h1>
          </React.Fragment>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
