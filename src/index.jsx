import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux';
import CounterConnected from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <CounterConnected/>
  </Provider>, document.getElementById('app')
);