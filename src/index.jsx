import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

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


// ActionTypes
const increaseAction = { type: 'increase' };
const decreaseAction = { type: 'decrease' }

// Reducer
function counter(state, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    case 'decrease':
      return { count: count - 1 };
    default:
      return state
  }
}

// Store

const store = createStore(counter, { count: 0 })

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

ReactDOM.render(
  <Provider store={store}>
    <CounterConnected/>
  </Provider>,
  document.getElementById('app')
)