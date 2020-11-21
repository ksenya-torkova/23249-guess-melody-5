import React from "react";
import renderer from "react-test-renderer";
import Mistake from "./mistake";

describe(`Should Mistake render correctly`, () => {
  it(`With one zero count`, () => {
    const tree = renderer
      .create(<Mistake
        count={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With one one count`, () => {
    const tree = renderer
      .create(<Mistake
        count={1}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
