import {BrowserRouter, Switch, Route} from "react-router-dom";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Login from "../login/login";
import Losing from "../losing/losing";
import PropTypes from "prop-types";
import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Win from "../win/win";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [genreQuestion, , artistQuestion] = questions;

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
        <Route path="/dev-artist" exact>
          <Artist
            onAnswer = {() => {}}
            question = {artistQuestion}
          />
        </Route>
        <Route path="/dev-genre" exact>
          <Genre
            onAnswer = {() => {}}
            question = {genreQuestion}
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

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
