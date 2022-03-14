import { combineReducers, createStore } from "redux"
import categoriesReducer from "./categoriesReducer"
import initialState from "./initialState"
import postsReducer from "./postsRedux"


const subreducers = {
  posts: postsReducer,
  categories: categoriesReducer

}

const reducer = combineReducers(subreducers)
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;