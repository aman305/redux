import { Component } from 'react';
import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterAction } from '../store/store';

const Counter = () => {
  // react-redux, with the help of useSelector automatically subscribes to redux store
  // means this component will execute when data changes in redux store.
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch(); // return a dispatch function

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  return (
    <>
      <div>
        <h1>Redux Demo</h1>
        {showCounter && (
          <div>
            <h1>{counter}</h1>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        )}
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </>
  );
};

// class based component
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <>
//         <h1>{this.props.counter}</h1>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
