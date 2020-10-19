import {BrowserRouter, Switch, Route} from "react-router-dom";
import GameScreen from "../game-screen/game-screen";
import Login from "../login/login";
import Losing from "../losing/losing";
import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Win from "../win/win";
import {MISTAKES_MAX_AMOUNT} from "../../const";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path = "/"
          exact
          render = {({history}) => (
            <WelcomeScreen
              errorsCount = {MISTAKES_MAX_AMOUNT}
              onPlayButtonClick = {() => history.push(`/game`)}
            />
          )}
        />
        <Route path="/game" exact>
          <GameScreen
            mistakesCount = {MISTAKES_MAX_AMOUNT}
          />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/lose" exact>
          <Losing />
        </Route>
        <Route path="/result" exact>
          <Win />
        </Route>
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
