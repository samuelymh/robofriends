import { CHANGE_SEARCH_FIELD } from "./constants"

const initialState = {
  searchField: '',
}

// This is a reducer - also a pure function
export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // Two variants (The second version uses spread operator)
      // return Object.assign({}, state, {searchField: action.payload});
      return { ...state, searchField: action.payload }
    default:
      return state;
  }
}