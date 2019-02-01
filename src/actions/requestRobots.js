import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESSFUL,
  REQUEST_ROBOTS_FAILED
} from "../constants";

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
    .catch(() => {
      dispatch({
        type: REQUEST_ROBOTS_FAILED
      });
    });
};
