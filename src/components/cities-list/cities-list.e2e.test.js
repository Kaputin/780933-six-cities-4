import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list";

Enzyme.configure({
  adapter: new Adapter(),
});

const citiesTest = [
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam1`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam2`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam3`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam4`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam5`,
  }
];

const onCityTitleClick = jest.fn();

describe(`CitiesList e2e tests`, () => {
  it(`Should CitiesTitle be pressed`, () => {

    const citiesList = shallow(
        <CitiesList
          cities={citiesTest}
          selectedCity={citiesTest[0]}
          onCityTitleClick={onCityTitleClick}
        />
    );

    const cityTitle = citiesList.find(`a.locations__item-link span`);

    cityTitle.first().simulate(`click`);

    expect(onCityTitleClick).toHaveBeenCalled();
  });
});
