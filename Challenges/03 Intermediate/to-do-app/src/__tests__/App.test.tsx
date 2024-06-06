import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../tasksSlice';

describe('App integration', () => {
  const todoTask = 'Feed a cat';

  const store = configureStore({
    reducer: {
      tasks: tasksSlice,
    },
  });

  function renderApp() {
    render(
      <Provider store={store}>
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
