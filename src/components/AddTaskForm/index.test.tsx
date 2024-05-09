import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTaskForm from '.';

test('calls addTodo function with correct text', () => {
    const addTask = jest.fn();
    render(<AddTaskForm addTask={addTask} />);

    const input = screen.getByPlaceholderText('Add new todo');
    fireEvent.change(input, { target: { value: 'Finish project' } });

    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

    expect(addTask).toHaveBeenCalledWith('Finish project');
});