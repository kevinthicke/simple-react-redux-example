import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import counter from './reducer';
import { increaseAction, decreaseAction } from './actions';

// React component
class Counter extends Component {
    render() {
      const { value, onIncreaseClick, onDecreaseClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
          <button onClick={onDecreaseClick}>Decrease</button> 
        </div>
      )
    }
  }

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction)
    }
}

/* Conectamos el componente 'Counter' de React con el 'Store' de React*/
const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterConnected;