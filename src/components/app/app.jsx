import {BrowserRouter, Switch, Route} from "react-router-dom";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Login from "../login/login";
import Losing from "../losing/losing";
import PropTypes from "prop-types";
import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Win from "../win/win";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomeScreen errorsCount = {errorsCount} />
        </Route>
        <Route path="/dev-artist" exact>
          <Artist />
        </Route>
        <Route path="/dev-genre" exact>
          <Genre />
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
};

export default App;
