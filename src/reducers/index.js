import { combineReducers } from 'redux';
import { orders } from './orders';

export const rootReducer = combineReducers({
  orders,
});

export default rootReducer;
