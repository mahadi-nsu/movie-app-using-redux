// initial state declare
const initialState = {
  messageVisibility: false,
};

// reducer function with switch cases
export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case "TOGGLE_MESSAGE":
      return { ...state, messageVisibility: !state.messageVisibility };
    default:
      return state;
  }
}
