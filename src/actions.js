// Installation of redux
// npm install redux
// npm install react-redux

// components are dumb/presentational components. They don't know that redux exists.
// redux has:
// action -> reducer -> store -> make changes

import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

// This is an action
// payload is a naming convention to indicate data to be sent to the reducers
// type is a constant that we imported from constants file, this is just to avoid
// typos when typing this type repeatedly.
export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
};


// This is a higher order function so that we can do dispatch(requestRobots())
// in App.js. We would need redux-thunk for our dispatch.
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  // ajax request using fetch api which returns a promise
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
  .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }))
}