import React from "react";
import renderer from "react-test-renderer";
import {Login} from "./login";

const noop = () => {};

it(`Login component render correctly`, () => {
  const tree = renderer.create(
      <Login
        onReplayButtonClick={noop}
        onSubmit={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
