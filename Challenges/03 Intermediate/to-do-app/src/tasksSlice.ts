import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ID, Todo } from './App.types';

const initialState: Todo[] = [
  { id: self.crypto.randomUUID(), title: 'Complete online JavaScript course', complete: true },
  { id: self.crypto.randomUUID(), title: 'Jog around the park 3x', complete: false },
  { id: self.crypto.randomUUID(), title: '10 minutes meditation', complete: false },
  { id: self.crypto.randomUUID(), title: 'Read for 1 hour', complete: false },
  { id: self.crypto.randomUUID(), title: 'Pick up groceries', complete: false },
  { id: self.crypto.randomUUID(), title: 'Complete Todo App on Frontend Mentor', complete: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const task = {
        id: self.crypto.randomUUID(),
        title: action.payload,
        complete: false,
      };

      state.push(task);
    },

    completed: (state, action: PayloadAction<ID>) => {
      return state.map((task) => (task.id === action.payload ? { ...task, complete: !task.complete } : task));
    },

    remove: (state, action: PayloadAction<ID>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export default tasksSlice.reducer;
export const { add, remove, completed } = tasksSlice.actions;
