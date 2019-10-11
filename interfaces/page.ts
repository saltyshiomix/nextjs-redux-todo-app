import { TodoItem } from './todo';

export interface IndexPageProps {
  item: TodoItem;
  data: TodoItem[];
  onChangeTodo: (item: TodoItem) => any;
  addTodo: (item: TodoItem) => any;
  deleteTodo: (item: TodoItem) => any;
}
