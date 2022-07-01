// Installation of redux
// npm install redux
// npm install react-redux

// components are dumb/presentational components. They don't know that redux exists.
// redux has:
// action -> reducer -> store -> make changes

import { CHANGE_SEARCH_FIELD } from "./constants";

// This is an action
export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
};
// payload is a naming convention to indicate data to be sent to the reducers
// type is a constant that we imported from constants file, this is just to avoid
// typos when typing this type repeatedly.