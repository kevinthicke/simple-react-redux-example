import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);