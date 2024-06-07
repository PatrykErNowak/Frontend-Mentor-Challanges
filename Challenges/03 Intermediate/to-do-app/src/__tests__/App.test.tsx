import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../features/todos/tasksSlice';
import { Show, Todo } from '../App/App.types';

interface InitialState {
  show: Show;
  todos: Todo[];
}

describe('App integration', () => {
  describe('Filters', () => {
    const initialState: InitialState = {
      show: 'all',
      todos: [
        { id: self.crypto.randomUUID(), title: 'Complete online JavaScript course', isComplete: true },
        { id: self.crypto.randomUUID(), title: 'Jog around the park 3x', isComplete: true },
        { id: self.crypto.randomUUID(), title: '10 minutes meditation', isComplete: false },
        { id: self.crypto.randomUUID(), title: 'Read for 1 hour', isComplete: false },
        { id: self.crypto.randomUUID(), title: 'Pick up groceries', isComplete: false },
        { id: self.crypto.randomUUID(), title: 'Complete Todo App on Frontend Mentor', isComplete: false },
      ],
    };

    const testStore = configureStore({
      preloadedState: {
        tasks: initialState,
      },
      reducer: {
        tasks: tasksSlice,
      },
    });

    function renderApp() {
      render(
        <Provider store={testStore}>
          <App />
        </Provider>
      );
    }

    test('Filter: show all tasks on Init state', () => {
      renderApp();

      const tasks = screen.getAllByRole('listitem');
      expect(tasks).toHaveLength(6);
    });

    test('Filter: show active tasks', async () => {
      renderApp();

      const activeFilter = screen.getByText('Active');
      await userEvent.click(activeFilter);

      const tasks = screen.getAllByRole('listitem');
      expect(tasks).toHaveLength(4);
    });

    test('Filter: show completed tasks', async () => {
      renderApp();

      const activeFilter = screen.getByText('Completed');
      await userEvent.click(activeFilter);

      const tasks = screen.getAllByRole('listitem');
      expect(tasks).toHaveLength(2);
    });

    test('Filter: go back to "all" filter', async () => {
      renderApp();

      const activeFilter = screen.getByText('All');
      await userEvent.click(activeFilter);

      const tasks = screen.getAllByRole('listitem');
      expect(tasks).toHaveLength(6);
    });
  });

  describe('Delete all completed tasks', () => {
    const initialState: InitialState = {
      show: 'all',
      todos: [
        { id: self.crypto.randomUUID(), title: 'Complete online JavaScript course', isComplete: true },
        { id: self.crypto.randomUUID(), title: 'Jog around the park 3x', isComplete: true },
        { id: self.crypto.randomUUID(), title: '10 minutes meditation', isComplete: false },
        { id: self.crypto.randomUUID(), title: 'Read for 1 hour', isComplete: false },
        { id: self.crypto.randomUUID(), title: 'Pick up groceries', isComplete: false },
        { id: self.crypto.randomUUID(), title: 'Complete Todo App on Frontend Mentor', isComplete: false },
      ],
    };

    function renderApp() {
      const testStore = configureStore({
        preloadedState: {
          tasks: initialState,
        },
        reducer: {
          tasks: tasksSlice,
        },
      });

      render(
        <Provider store={testStore}>
          <App />
        </Provider>
      );
    }

    test('Delete all completed tasks, on filter set "All"', async () => {
      renderApp();

      const clearCompletedBtn = screen.getByText('Clear completed', { exact: false });
      await userEvent.click(clearCompletedBtn);

      const tasks = screen.getAllByRole('listitem');
      expect(tasks).toHaveLength(4);
    });

    test('Delete all completed tasks, on filter set "Active"', async () => {
      renderApp();

      const activeFilter = screen.getByText('Active');
      await userEvent.click(activeFilter);

      const clearCompletedBtn = screen.getByText('Clear completed', { exact: false });
      await userEvent.click(clearCompletedBtn);

      const tasks = screen.getAllByRole('listitem');
      expect(tasks).toHaveLength(4);
    });

    test('Delete all completed tasks, on filter set "Completed"', async () => {
      renderApp();

      const activeFilter = screen.getByText('Completed');
      await userEvent.click(activeFilter);

      const clearCompletedBtn = screen.getByText('Clear completed', { exact: false });
      await userEvent.click(clearCompletedBtn);

      const tasks = screen.queryAllByRole('listitem');
      expect(tasks).toHaveLength(0);

      const message = screen.getByText('No results found', { exact: false });
      expect(message).toBeInTheDocument();
    });
  });

  describe('CRUD', () => {
    const initialState: InitialState = {
      show: 'all',
      todos: [],
    };

    const testStore = configureStore({
      preloadedState: {
        tasks: initialState,
      },
      reducer: {
        tasks: tasksSlice,
      },
    });
    const todoTask = 'Feed a cat';

    function renderApp() {
      render(
        <Provider store={testStore}>
          <App />
        </Provider>
      );
    }

    test('Add new task: type task into input and display new task', async () => {
      renderApp();

      const form = screen.getByRole('form');
      const input = screen.getByPlaceholderText('Create a new todo...', { exact: false });

      await userEvent.type(input, todoTask);
      fireEvent.submit(form);

      const todoItem = screen.getByText(todoTask, { exact: false });
      expect(todoItem).toBeInTheDocument();
    });

    test('Mark task as completed', () => {
      renderApp();

      const todoElement = screen.getByText(todoTask);
      const todoElementContainer = todoElement.closest('li')!;
      const completeButton = within(todoElementContainer).getByLabelText('Mark as a completed task');

      fireEvent.click(completeButton);

      expect(completeButton).not.toBeEmptyDOMElement();
    });

    test('Delete task', async () => {
      renderApp();

      const todoElement = screen.getByText(todoTask);
      const todoElementContainer = todoElement.closest('li')!;
      const deleteButton = within(todoElementContainer).getByLabelText('Delete task');

      fireEvent.click(deleteButton);

      const deletedElement = screen.queryByText(todoTask);
      expect(deletedElement).toBeNull();
    });
  });
});
