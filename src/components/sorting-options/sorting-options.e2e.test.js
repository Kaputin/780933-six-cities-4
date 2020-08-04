import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SortingOptions} from "./sorting-options";

Enzyme.configure({
  adapter: new Adapter(),
});


const sortOptionClickHandler = jest.fn();
const sortOptionsListClickHandler = jest.fn();

describe(`SortingOptions e2e tests`, () => {
  it(`Should SortingOptions be pressed`, () => {

    const sortingOptions = shallow(
        <SortingOptions
          isOpen={false}
          selectedSortingOptions={`Popular`}
          sortOptionClickHandler={sortOptionClickHandler}
          sortOptionsListClickHandler={sortOptionsListClickHandler}
        />
    );

    const sortTitle = sortingOptions.find(`.places__option`);

    sortTitle.first().simulate(`click`);

    expect(sortOptionClickHandler).toHaveBeenCalled();
  });
});

describe(`SortingOptions e2e tests`, () => {
  it(`Should SortingListOptions be pressed`, () => {

    const sortingOptions = shallow(
        <SortingOptions
          isOpen={false}
          selectedSortingOptions={`Popular`}
          sortOptionClickHandler={sortOptionClickHandler}
          sortOptionsListClickHandler={sortOptionsListClickHandler}
        />
    );

    const sortTitle = sortingOptions.find(`.places__sorting-type`);

    sortTitle.first().simulate(`click`);

    expect(sortOptionsListClickHandler).toHaveBeenCalled();
  });
});
