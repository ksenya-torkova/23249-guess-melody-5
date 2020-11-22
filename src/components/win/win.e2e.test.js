import {configure, shallow} from "enzyme";
import {Win} from "./win";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

configure({adapter: new Adapter()});

it(`Should replay button be pressed`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetAction = jest.fn();

  const wrapper = shallow(
      <Win
        mistakesCount={1}
        onReplayButtonClick={handleReplayButtonClick}
        questionsCount={3}
        resetGameAction={handleResetAction}
      />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetAction).toHaveBeenCalledTimes(1);
});
