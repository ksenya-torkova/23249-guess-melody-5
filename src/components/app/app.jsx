import {appTypes} from "../../prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import GameScreen from "../game-screen/game-screen";
import Login from "../login/login";
import Losing from "../losing/losing";
import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Win from "../win/win";

const App = (props) => {
  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path = "/"
          exact
          render = {({history}) => (
            <WelcomeScreen
              errorsCount = {errorsCount}
              onPlayButtonClick = {() => history.push(`/game`)}
            />
          )}
        />
        <Route path="/game" exact>
          <GameScreen questions = {questions} />
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

App.propTypes = appTypes;

export default App;
