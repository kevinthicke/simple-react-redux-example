import { createStore } from 'redux';
import counter from '../reducer';

export const store = createStore(counter, { count: 0 })
