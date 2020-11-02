import {playerTypes} from "../../prop-types";
import React, {Fragment} from "react";

const Player = (props) => {
  const {
    children,
    isLoading,
    isPlaying,
    onPlayButtonClick,
  } = props;

  return (
    <Fragment>
      <button
        className = {`track__button track__button--${isPlaying ? `pause` : `play`}`}
        disabled = {isLoading}
        onClick = {onPlayButtonClick}
        type="button"
      />
      <div className="track__status">
        {children}
      </div>
    </Fragment>
  );
};

Player.propTypes = playerTypes;

export default Player;
