import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {ActionCreator} from "./reducer/user/user.js";
import {AuthorizationStatus} from "./const.js";
import {createAPI} from "./api.js";
import {withLoader} from "./hocs/with-loader/with-loader.js";


const api = createAPI(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

// store.dispatch(DataOperation.loadOffers());
//
// store.dispatch(UserOperation.checkAuth());

const WrappedApp = withLoader(App);

ReactDOM.render(
    <Provider store={store}>
      <WrappedApp />,
    </Provider>,
    document.querySelector(`#root`)
);
