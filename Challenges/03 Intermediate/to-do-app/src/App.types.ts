type ID = `${string}-${string}-${string}-${string}-${string}`;

type Show = 'all' | 'active' | 'completed';

interface Todo {
  id: ID;
  title: string;
  isComplete: boolean;
}

export type { ID, Todo, Show };
