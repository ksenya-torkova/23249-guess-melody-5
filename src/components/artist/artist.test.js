import React from "react";
import renderer from "react-test-renderer";
import Artist from "./artist";

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Jim Beam`,
  }],
};

const noop = () => {};

it(`Artist is rendered correctly`, () => {
  const tree = renderer.create(
      <Artist
        onAnswer={noop}
        question={question}
        renderPlayer={noop}
      >
        <React.Fragment />
      </Artist>).toJSON();

  expect(tree).toMatchSnapshot();
});
