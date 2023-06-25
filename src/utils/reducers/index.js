import { ACTION_TYPES } from "./reducer.actionTypes";

const initState = {
  data: [],
  count: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state.count + 1;
    case ACTION_TYPES.DECREMENT:
      return state.count - 1;
    case ACTION_TYPES.SET_DATA:
      return (state.data = action.payload);
    default:
      return state;
  }
};

export default reducer;
