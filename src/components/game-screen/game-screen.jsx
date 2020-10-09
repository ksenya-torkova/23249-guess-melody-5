import {GameType} from "../../const";
import {Redirect} from "react-router-dom";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <Artist
            onAnswer = {() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
            question = {question}
          />
        );

      case GameType.GENRE:
        return (
          <Genre
            onAnswer = {() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
            question = {question}
          />
        );
    }

    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default GameScreen;
