import React from 'react';
import renderer from 'react-test-renderer';
import Player from './player';

const noop = () => {};

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(<Player
    isPlaying={false}
    isLoading={true}
    onPlayButtonClick={noop}
  >
    <audio />
  </Player>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
