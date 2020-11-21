import React from "react";
import renderer from "react-test-renderer";
import {Losing} from "./losing";

const noop = () => {};

it(`Should Losing render correctly`, () => {
  const tree = renderer
    .create(
        <Losing
          onReplayButtonClick={noop}
          resetGameAction={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
