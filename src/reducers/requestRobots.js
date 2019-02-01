import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESSFUL,
  REQUEST_ROBOTS_FAILED
} from "../constants";

const initialState = {
  isPending: false,
  robots: [],
  error: false
};

export const requestRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESSFUL:
      return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: true };
    default:
      return state;
  }
};
