import { combineReducers, createStore, applyMiddleware } from "redux";
import { trendingMovieReducer } from "../reducers/movieReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  movies: trendingMovieReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
