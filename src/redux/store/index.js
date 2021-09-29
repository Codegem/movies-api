import { combineReducers, createStore, applyMiddleware } from "redux";
import { trendingMovieReducer } from "../reducers/movieReducer";
import { GlobalStateReducer } from "../reducers/globalStatesReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  movies: trendingMovieReducer,
  global: GlobalStateReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
