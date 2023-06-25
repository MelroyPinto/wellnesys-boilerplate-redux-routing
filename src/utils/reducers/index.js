import { ACTION_TYPES } from "./reducer.actionTypes";

const initState = {
  data: [],
  count: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE:
      console.log(action);
      return { ...state, count: action.payload };
    case ACTION_TYPES.SET_DATA:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default reducer;
