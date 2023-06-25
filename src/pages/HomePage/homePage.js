import React from "react";
import { connect, useDispatch } from "react-redux";
import { ACTION_TYPES } from "src/utils/reducers/reducer.actionTypes";

const HomePage = (props) => {
  const { count } = props;
  const Dispatch = useDispatch();
  const increaseDecrease = (value) => {
    Dispatch({ type: ACTION_TYPES.TOGGLE, payload: value });
  };
  return (
    <div className="flex gap-4 h-full items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={() => increaseDecrease(count + 1)}
      >
        +
      </button>
      <input
        type="text"
        value={count}
        readOnly
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={() => increaseDecrease(count - 1)}
      >
        -
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(HomePage);
