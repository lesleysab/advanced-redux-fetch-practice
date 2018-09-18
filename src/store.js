import state from "./state";
import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)

  //how you change something that already exists. We did that with body-parser.
);
const store = createStore(reducers, state, enhancer);
export default store;
