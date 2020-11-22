import {Login} from "./login";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import React from "react";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

it(`Should replay button be pressed`, () => {
  const handleReplayButtonClick = jest.fn();

  const wrapper = shallow(
      <Login
        onReplayButtonClick={handleReplayButtonClick}
        onSubmit={noop}
      />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
});
