import {GameType} from "../../const";
import {Redirect} from "react-router-dom";
import Artist from "../artist/artist";
import Genre from "../genre/genre";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";

const ArtistHoc = withActivePlayer(Artist);
const GenreHoc = withActivePlayer(Genre);

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
          <ArtistHoc
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
          <GenreHoc
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
