import { Show, Todo } from '../App.types';

export function filterTasks(todos: Todo[], filter: Show) {
  if (filter === 'active') return todos.filter((todo) => !todo.isComplete);
  if (filter === 'completed') return todos.filter((todo) => todo.isComplete);
  return todos;
}
