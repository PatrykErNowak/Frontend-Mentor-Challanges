type ID = `${string}-${string}-${string}-${string}-${string}`;

type Show = 'all' | 'active' | 'completed';

interface Todo {
  id: ID;
  title: string;
  isComplete: boolean;
}
interface TasksState {
  show: Show;
  todos: Todo[];
}

export type { ID, Todo, Show, TasksState };
