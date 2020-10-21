import React from "react";
import {mistakeTypes} from "../../prop-types";
import {nanoid} from "nanoid";

const Mistake = (props) => {
  const {count} = props;
  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map(() => <div className="wrong" key={nanoid()}></div>)}
    </div>
  );
};

Mistake.propTypes = mistakeTypes;

export default Mistake;
