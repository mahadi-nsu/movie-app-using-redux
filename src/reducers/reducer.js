import { TOGGLE_MESSAGE, GET_MOVIES } from "../actions/actions";
// initial state declare
const initialState = {
  messageVisibility: false,
  movies: [],
};

// reducer function with switch cases
export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case TOGGLE_MESSAGE:
      return { ...state, messageVisibility: !state.messageVisibility };
    case GET_MOVIES:
      return { ...state, movies: data };
    default:
      return state;
  }
}
