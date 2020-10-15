import React, {PureComponent} from "react";
import Player from "../../components/player/player";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}

        renderPlayer = {(src, id) => {
          return (
            <Player
              src = {src}
              isPlaying = {id === activePlayerId}
              onPlayButtonClick = {() => this.setState({
                activePlayerId: activePlayerId === id ? -1 : id
              })}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
