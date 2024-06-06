type ID = `${string}-${string}-${string}-${string}-${string}`;

interface Todo {
  id: ID;
  title: string;
  complete: boolean;
}

export type { ID, Todo };
