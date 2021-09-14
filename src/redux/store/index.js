import { combineReducers, createStore } from "redux";
import { movieReducer } from "../reducers/movieReducer";

const reducer = combineReducers({
  movies: movieReducer,
});

const initialState = {};

const store = createStore(reducer, initialState);

export default store;
