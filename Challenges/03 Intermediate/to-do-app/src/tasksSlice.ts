import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ID, Todo } from './App.types';

const initialState: Todo[] = [
  { id: self.crypto.randomUUID(), title: 'Complete online JavaScript course', isComplete: true },
  { id: self.crypto.randomUUID(), title: 'Jog around the park 3x', isComplete: false },
  { id: self.crypto.randomUUID(), title: '10 minutes meditation', isComplete: false },
  { id: self.crypto.randomUUID(), title: 'Read for 1 hour', isComplete: false },
  { id: self.crypto.randomUUID(), title: 'Pick up groceries', isComplete: false },
  { id: self.crypto.randomUUID(), title: 'Complete Todo App on Frontend Mentor', isComplete: false },
];

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

      state.push(task);
    },

    completed: (state, action: PayloadAction<ID>) => {
      return state.map((task) => (task.id === action.payload ? { ...task, isComplete: !task.isComplete } : task));
    },

    remove: (state, action: PayloadAction<ID>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export default tasksSlice.reducer;
export const { add, remove, completed } = tasksSlice.actions;
