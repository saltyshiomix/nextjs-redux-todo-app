import { createSelector } from 'reselect';

export const selectState = () => state => state.todo;

export const selectTodoItem = () =>
  createSelector(
    selectState(),
    todo => todo.item,
  );

export const selectTodoData = () =>
  createSelector(
    selectState(),
    todo => todo.data,
  );
