import {
  TODO_ONCHANGE,
  TODO_ADD,
  TODO_DELETE,
} from '../constants/actionTypes';

export const onChangeTodo = (item) => ({ type: TODO_ONCHANGE, item });

export const addTodo = (item) => ({ type: TODO_ADD, item });

export const deleteTodo = (item) => ({ type: TODO_DELETE, item });
