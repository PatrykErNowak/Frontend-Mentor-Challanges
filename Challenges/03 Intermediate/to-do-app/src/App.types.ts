type ID = `${string}-${string}-${string}-${string}-${string}`;

interface Todo {
  id: ID;
  title: string;
  isComplete: boolean;
}

export type { ID, Todo };
