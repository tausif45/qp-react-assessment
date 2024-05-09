import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskListItem from '.';

test('renders todo item correctly', () => {
  const task = { id: 1, text: 'Buy groceries', completed: false };
  const toggleTask = jest.fn();
  render(<TaskListItem task={task} toggleTask={toggleTask} />);
  
  const todoTextElement = screen.getByText('Buy groceries');
  expect(todoTextElement).toBeInTheDocument();

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(toggleTask).toHaveBeenCalledWith(1);
});