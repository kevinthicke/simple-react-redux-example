import { createStore } from 'redux';
import counter from '../reducer';

export default createStore(counter, { count: 0 })
