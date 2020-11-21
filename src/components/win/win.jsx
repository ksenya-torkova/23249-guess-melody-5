import {connect} from "react-redux";
import {resetGame} from "../../store/action";
import {winTypes} from "../../prop-types";
import React from "react";

const Win = (props) => {
  const {
    mistakesCount,
    onReplayButtonClick,
    questionsCount,
    resetGameAction,
  } = props;
  const correctlyQuestionsCount = questionsCount - mistakesCount;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctlyQuestionsCount} вопросов и совершили {mistakesCount} ошибки</p>
      <button
        onClick = {() => {
          resetGameAction();
          onReplayButtonClick();
        }}
        className="replay"
        type="button"
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};

Win.propTypes = winTypes;

const mapStateToProps = ({GAME}) => ({
  questionsCount: GAME.step,
  mistakesCount: GAME.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
});

export {Win};

export default connect(mapStateToProps, mapDispatchToProps)(Win);
