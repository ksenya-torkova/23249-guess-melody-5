import {connect} from "react-redux";
import {losingTypes} from "../../prop-types";
import {resetGame} from "../../store/action";
import React from "react";

const Losing = (props) => {
  const {onReplayButtonClick, resetGameAction} = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button
        className="replay"
        type="button"
        onClick = {() => {
          onReplayButtonClick();
          resetGameAction();
        }}
      >
        Попробовать ещё раз
      </button>
    </section>
  );
};

Losing.propTypes = losingTypes;

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
});

export {Losing};

export default connect(null, mapDispatchToProps)(Losing);
