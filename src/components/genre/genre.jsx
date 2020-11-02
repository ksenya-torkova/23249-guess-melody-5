import {genreTypes} from "../../prop-types";
import {nanoid} from "nanoid";
import GenreQuestionItem from "../genre-question-item/genre-question-item";
import React from "react";

const Genre = (props) => {
  const {
    children,
    onAnswer,
    onChange,
    question,
    renderPlayer,
    userAnswers
  } = props;

  const {
    answers,
    genre,
  } = question;

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        {children}

      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit = {(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >

          {answers.map((answer, i) => (
            <GenreQuestionItem
              answer = {answer}
              id = {i}
              key = {nanoid()}
              onChange = {onChange}
              renderPlayer = {renderPlayer}
              userAnswer = {userAnswers[i]}
            />
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

Genre.propTypes = genreTypes;

export default Genre;
