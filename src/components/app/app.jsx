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
    <WelcomeScreen errorsCount = {errorsCount} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
