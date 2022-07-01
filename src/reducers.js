import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

const initialStateSearch = {
  searchField: '',
}

// This is a reducer - also a pure function
export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // Two variants (The second version uses spread operator)
      // return Object.assign({}, state, {searchField: action.payload});
      return { ...state, searchField: action.payload }
    default:
      return state;
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      // We want to return state if it doesnt match any of the criteria
      return state;
  }
}