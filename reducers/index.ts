import { combineReducers } from 'redux';
import todo, { initialState as todoState } from './todo';

export const initialState = {
  todo: todoState,
};

export default combineReducers({
  todo,
});
