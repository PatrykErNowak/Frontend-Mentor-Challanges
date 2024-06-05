import { createSlice } from '@reduxjs/toolkit';

const tempData = [
  { id: self.crypto.randomUUID(), title: 'Go to Shop', complete: true },
  { id: self.crypto.randomUUID(), title: 'Read for 1 hour', complete: false },
  { id: self.crypto.randomUUID(), title: 'Vacuum the flat', complete: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tempData,
  reducers: {
    add: (state, action) => {
      const task = {
        id: self.crypto.randomUUID(),
        title: action.payload,
        complete: false,
      };

      state.push(task);
    },

    completed: (state, action) => {
      return state.map((task) => (task.id === action.payload ? { ...task, complete: !task.complete } : task));
    },

    remove: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export default tasksSlice.reducer;
export const { add, remove, completed } = tasksSlice.actions;
