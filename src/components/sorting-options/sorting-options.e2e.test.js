import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SortingOptions} from "./sorting-options";

Enzyme.configure({
  adapter: new Adapter(),
});


const onSortingOptionClick = jest.fn();

describe(`SortingOptions e2e tests`, () => {
  it(`Should SortingOptions be pressed`, () => {

    const sortingOptions = shallow(
        <SortingOptions
          selectedSortingOptions={`Popular`}
          onSortingOptionClick={onSortingOptionClick}
        />
    );

    const sortTitle = sortingOptions.find(`.places__option`);

    sortTitle.first().simulate(`click`);

    expect(onSortingOptionClick).toHaveBeenCalled();
  });
});
