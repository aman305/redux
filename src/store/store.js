import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

const CounterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(CounterReducer);
export default store;
