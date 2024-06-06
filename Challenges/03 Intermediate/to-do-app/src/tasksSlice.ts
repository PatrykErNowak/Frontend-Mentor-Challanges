import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ID, Show, Todo } from './App.types';

interface InitialState {
  show: Show;
  todos: Todo[];
}

const initialState: InitialState = {
  show: 'all',
  todos: [
    { id: self.crypto.randomUUID(), title: 'Complete online JavaScript course', isComplete: true },
    { id: self.crypto.randomUUID(), title: 'Jog around the park 3x', isComplete: false },
    { id: self.crypto.randomUUID(), title: '10 minutes meditation', isComplete: false },
    { id: self.crypto.randomUUID(), title: 'Read for 1 hour', isComplete: false },
    { id: self.crypto.randomUUID(), title: 'Pick up groceries', isComplete: false },
    { id: self.crypto.randomUUID(), title: 'Complete Todo App on Frontend Mentor', isComplete: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const task = {
        id: self.crypto.randomUUID(),
        title: action.payload,
        isComplete: false,
      };

      state.todos.push(task);
    },

    completed: (state, action: PayloadAction<ID>) => {
      state.todos = state.todos.map((task) => (task.id === action.payload ? { ...task, isComplete: !task.isComplete } : task));
    },

    remove: (state, action: PayloadAction<ID>) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },

    removeAllCompleted: (state) => {
      state.todos = state.todos.filter((task) => task.isComplete === false);
    },

    setFilter: (state, action) => {
      state.show = action.payload;
    },
  },
});

export default tasksSlice.reducer;
export const { add, remove, completed, removeAllCompleted, setFilter } = tasksSlice.actions;
