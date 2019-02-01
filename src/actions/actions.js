import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESSFUL,
  REQUEST_ROBOTS_FAILED
} from "../constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return fetch("https://jsonplaceholder.typicode.com/users/")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: REQUEST_ROBOTS_SUCCESSFUL,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: err
      });
    });
};
