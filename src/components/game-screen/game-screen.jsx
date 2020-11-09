import {incrementMistake, incrementStep, resetGame} from "../../store/action";
import {connect} from "react-redux";
import {gameScreenTypes} from "../../prop-types";
import {GameType, MISTAKES_MAX_AMOUNT} from "../../const";
import {Redirect} from "react-router-dom";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import Mistake from "../mistake/mistake";
import React from "react";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";

const ArtistHoc = withActivePlayer(Artist);
const GenreHoc = withActivePlayer(withUserAnswer(Genre));

const GameScreen = (props) => {
  const {
    mistakesCount,
    onUserAnswer,
    questions,
    step,
  } = props;

  const question = questions[step];

  if (mistakesCount >= MISTAKES_MAX_AMOUNT) {
    return (
      <Redirect to="/lose" />
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to="/result" />
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

const mapStateToProps = ({DATA, GAME}) => ({
  mistakesCount: GAME.mistakes,
  questions: DATA.questions,
  step: GAME.step,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(resetGame());
  },

  onUserAnswer(question, userAnswer) {
    dispatch(incrementStep());
    dispatch(incrementMistake(question, userAnswer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
