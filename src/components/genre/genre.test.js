import React from 'react';
import renderer from 'react-test-renderer';
import Genre from './genre';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

const noop = () => {};

it(`Genre is rendered correctly`, () => {
  const tree = renderer.create((
    <Genre
      onAnswer={noop}
      onChange={noop}
      question={question}
      renderPlayer={noop}
      userAnswers={[false, false, false, false]}
    >
      <React.Fragment />
    </Genre>
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
