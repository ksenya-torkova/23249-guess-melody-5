import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {GameType} from "../../const";
import {Redirect} from "react-router-dom";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import {gameScreenTypes} from "../../prop-types";
import React from "react";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";

const ArtistHoc = withActivePlayer(Artist);
const GenreHoc = withActivePlayer(Genre);

const GameScreen = (props) => {
  const {
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
        />
      );

    case GameType.GENRE:
      return (
        <GenreHoc
          onAnswer = {onUserAnswer}
          question = {question}
        />
      );
  }

  return <Redirect to="/" />;
};

GameScreen.propTypes = gameScreenTypes;

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },

  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
