import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseAction, decreaseAction } from './actions';

class Counter extends Component {
    render() {
      const { value, onIncreaseClick, onDecreaseClick } = this.props
      return (
        <div>
          <button onClick={onDecreaseClick}>Decrease</button> 
          <button onClick={onIncreaseClick}>Increase</button>
          <span>{value}</span>
        </div>
      )
    }
  }

const mapStateToProps = state => ({ value: state.count });

const mapDispatchToProps = dispatch => ({
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);