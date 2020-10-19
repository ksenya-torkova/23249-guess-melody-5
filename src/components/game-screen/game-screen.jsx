import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {gameScreenTypes} from "../../prop-types";
import {GameType} from "../../const";
import {Redirect} from "react-router-dom";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Mistake from "../mistake/mistake";
import React from "react";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";

const ArtistHoc = withActivePlayer(Artist);
const GenreHoc = withActivePlayer(Genre);

const GameScreen = (props) => {
  const {
    mistakesCount,
    onUserAnswer,
    questions,
    resetGame,
    step,
  } = props;

  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistHoc
          onAnswer = {onUserAnswer}
          question = {question}
        >
          <Mistake count = {mistakesCount} />
        </ArtistHoc>
      );

    case GameType.GENRE:
      return (
        <GenreHoc
          onAnswer = {onUserAnswer}
          question = {question}
        >
          <Mistake count = {mistakesCount} />
        </GenreHoc>
      );
  }

  return <Redirect to="/" />;
};

GameScreen.propTypes = gameScreenTypes;

const mapStateToProps = (state) => ({
  mistakesCount: state.mistakes,
  questions: state.questions,
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },

  onUserAnswer(question, userAnswer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, userAnswer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
