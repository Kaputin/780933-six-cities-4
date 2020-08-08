import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {SortingOptions} from "./sorting-options.jsx";
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

it(`Should SortingOptions render correctly`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      currentOffer: null,
      hoveredOffer: null,
      selectedSortingOptions: `Popular`
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SortingOptions
            isOpen={false}
            selectedSortingOptions={`Popular`}
            sortOptionClickHandler={() => {}}
            sortOptionsListClickHandler={() => {}}
          />,
        </Provider>,
        {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
