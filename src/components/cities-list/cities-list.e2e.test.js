import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list";

Enzyme.configure({
  adapter: new Adapter(),
});

const cities = [
  {
    id: 1,
    title: `Amsterdam`,
    coordinates: [52.38333, 4.9]
  },
  {
    id: 2,
    title: `Paris`,
    coordinates: [48.85341, 2.3488]
  },
  {
    id: 3,
    title: `Cologne`,
    coordinates: [50.93333, 6.95]
  },
  {
    id: 4,
    title: `Brussels`,
    coordinates: [50.85045, 4.34878]
  },
  {
    id: 5,
    title: `Hamburg`,
    coordinates: [53.57532, 10.01534]
  },
  {
    id: 6,
    title: `Dusseldorf`,
    coordinates: [51.1722, 6.46]
  }
];

const onCityTitleClick = jest.fn();

describe(`CitiesList e2e tests`, () => {
  it(`Should CitiesTitle be pressed`, () => {

    const citiesList = shallow(
        <CitiesList
          cities={cities}
          selectedCity={cities[0]}
          onCityTitleClick={onCityTitleClick}
        />
    );

    const cityTitle = citiesList.find(`a.locations__item-link span`);

    cityTitle.first().simulate(`click`);

    expect(onCityTitleClick).toHaveBeenCalled();
  });
});
