import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  compose,
  pure,
} from 'recompose';
import {
  onChangeTodo,
  addTodo,
  deleteTodo,
} from '../actions';
import {
  selectTodoItem,
  selectTodoData,
} from '../selectors';
import Page from '../components/page';

export default compose(
  connect(
    createSelector(
      selectTodoItem(),
      selectTodoData(),
      (item, data) => ({ item, data }),
    ),
    {
      onChangeTodo,
      addTodo,
      deleteTodo,
    },
  ),
  pure,
)(Page);
