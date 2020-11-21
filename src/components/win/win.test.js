import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";
import Win, {Win as WinScreenWithoutStore} from "./win";

const noop = () => {};

describe(`Should Win render correctly`, () => {
  describe(`With 3 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <WinScreenWithoutStore
              mistakesCount={0}
              onReplayButtonClick={noop}
              questionsCount={3}
              resetGameAction={noop}
            />

        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <WinScreenWithoutStore
              mistakesCount={1}
              onReplayButtonClick={noop}
              questionsCount={3}
              resetGameAction={noop}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`With 2 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <WinScreenWithoutStore
              mistakesCount={0}
              onReplayButtonClick={noop}
              questionsCount={2}
              resetGameAction={noop}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <WinScreenWithoutStore
              mistakesCount={1}
              onReplayButtonClick={noop}
              questionsCount={2}
              resetGameAction={noop}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

describe(`Render connected to store component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let winScreenComponent = null;

  beforeEach(() => {
    store = mockStore({
      GAME: {
        step: 33,
        mistakes: 2,
      }
    });

    store.dispatch = jest.fn();

    winScreenComponent = renderer.create(
        <Provider store={store}>
          <Win
            onReplayButtonClick={noop}
            resetGameAction={noop}
          />
        </Provider>
    );
  });

  it(`Should WinScreen connected to store render correctly`, () => {
    expect(winScreenComponent.toJSON()).toMatchSnapshot();
  });

  it(`Should call dispatch when button click`, () => {
    renderer.act(() => {
      winScreenComponent.root.findByType(`button`).props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
