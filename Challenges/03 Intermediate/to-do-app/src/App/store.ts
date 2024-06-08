import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import tasksSlice from '../features/todos/tasksSlice';
import { TasksState } from './App.types';

// convert object to string and store in localStorage
function saveToLocalStorage(state: { tasks: TasksState }) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('todoAppState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage(): TasksState | void {
  const serialisedState = localStorage.getItem('todoAppState');
  if (serialisedState !== null) {
    return JSON.parse(serialisedState);
  }
}

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
