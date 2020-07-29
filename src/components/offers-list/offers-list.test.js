import React from "react";
import renderer from "react-test-renderer";
import {OffersList} from "./offers-list.jsx";

const offers = [
  {
    id: 1,
    bedrooms: 3,
    adults: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.8,
    city: `Amsterdam`,
    type: `Apartment`,
    mark: true,
    price: 120,
    src: `img/apartment-01.jpg`,
    stars: {width: `80%`},
    title: `Beautiful & luxurious apartment at great location`,
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [{
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 1,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Max`
      }
    },
    {
      comment: `123.`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 2,
      commentRating: `100%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: true,
        name: `Ann`
      }
    }]
  }, {
    id: 2,
    bedrooms: 2,
    adults: 2,
    goods: [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.7,
    city: `Amsterdam`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    stars: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [{
      comment: `AAAAAAAAAAAAAAAAAAAAAAAAAA`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 3,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Lisa`
      }
    }]
  }, {
    id: 3,
    bedrooms: 5,
    adults: 8,
    goods: [`Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.6,
    city: `Amsterdam`,
    type: `Apartment`,
    mark: false,
    price: 132,
    src: `img/apartment-02.jpg`,
    stars: {width: `80%`},
    title: `Canal View Prinsengracht`,
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [{
      comment: `Cool`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 4,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Tom`
      }
    },
    {
      comment: `Nice`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 5,
      commentRating: `100%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Ilon`
      }
    }]
  }, {
    id: 4,
    bedrooms: 1,
    adults: 2,
    goods: [`Coffee machine`, `Dishwasher`],
    rating: 4.5,
    city: `Amsterdam`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    stars: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [{
      comment: `Bad`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 6,
      commentRating: `20%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Petr`
      }
    }]
  }, {
    id: 5,
    bedrooms: 3,
    adults: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.9,
    city: `Paris`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    stars: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [48.8534090000000, 2.3488010000000],
    reviews: [{
      comment: `Nice`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 5,
      commentRating: `100%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Ilon`
      }
    }]
  }, {
    id: 6,
    bedrooms: 3,
    adults: 6,
    goods: [`Heating`, `Kitchen`, `Cable TV`],
    rating: 4.7,
    city: `Paris`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    stars: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [48.853599, 2.348900],
    reviews: [{
      comment: `Bad`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 6,
      commentRating: `20%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Petr`
      }
    }]
  }, {
    id: 7,
    bedrooms: 1,
    adults: 2,
    goods: [`Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`],
    rating: 5.0,
    city: `Paris`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    stars: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [48.85359666, 2.348200],
    reviews: [{
      comment: `Cool`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 4,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Tom`
      }
    },
    {
      comment: `Nice`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 5,
      commentRating: `100%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Ilon`
      }
    }]
  }, {
    id: 8,
    bedrooms: 2,
    adults: 3,
    goods: [`Heating`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.6,
    city: `Cologne`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    stars: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [50.93333999, 6.9666],
    reviews: [{
      comment: `Bad`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 6,
      commentRating: `20%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Petr`
      }
    }]
  }, {
    id: 9,
    bedrooms: 3,
    adults: 6,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.9,
    city: `Cologne`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    stars: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [50.933559, 6.9211],
    reviews: [{
      comment: `Cool`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 4,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Tom`
      }
    },
    {
      comment: `Nice`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 5,
      commentRating: `100%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Ilon`
      }
    }]
  }, {
    id: 10,
    bedrooms: 3,
    adults: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Dishwasher`],
    rating: 4.8,
    city: `Brussels`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    stars: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [50.850400, 4.3487111],
    reviews: [{
      comment: `Bad`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 6,
      commentRating: `20%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Petr`
      }
    }]
  }, {
    id: 11,
    bedrooms: 3,
    adults: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Coffee machine`, `Dishwasher`],
    rating: 4.7,
    city: `Hamburg`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    stars: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [53.575333333, 10.015399999],
    reviews: [{
      comment: `Bad`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 6,
      commentRating: `20%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Petr`
      }
    }]
  }, {
    id: 12,
    bedrooms: 1,
    adults: 2,
    goods: [`Heating`, `Kitchen`, `Dishwasher`],
    rating: 4.9,
    city: `Hamburg`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    stars: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [53.5758777, 10.0154444],
    reviews: [{
      comment: `Cool`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 4,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Tom`
      }
    },
    {
      comment: `Nice`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 5,
      commentRating: `100%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Ilon`
      }
    }]
  }, {
    id: 13,
    bedrooms: 3,
    adults: 6,
    goods: [`Heating`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.8,
    city: `Dusseldorf`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    stars: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [51.172999, 6.47777],
    reviews: [{
      comment: `Bad`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 6,
      commentRating: `20%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Petr`
      }
    }]
  }, {
    id: 14,
    bedrooms: 1,
    adults: 2,
    goods: [`Heating`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.8,
    city: `Dusseldorf`,
    type: `Apartment`,
    mark: true,
    price: 120,
    src: `img/apartment-01.jpg`,
    stars: {width: `80%`},
    title: `Beautiful & luxurious apartment at great location`,
    coordinates: [51.1755, 6.469999],
    reviews: [{
      comment: `Cool`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 4,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Tom`
      }
    },
    {
      comment: `Nice`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 5,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Ilon`
      }
    }]
  }
];

it(`Should OffersList render correctly`, () => {
  const tree = renderer
    .create(<OffersList
      onOfferTitleClick={() => {}}
      onOfferMouseEnter={() => {}}
      offers={offers}
      placeClass={`cities__places-list`}
      cardClass={`cities__place-card`}
      wrapperClass={`cities__image-wrapper`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
