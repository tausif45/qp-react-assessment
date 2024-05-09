import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const TaskListItem: React.FC<TodoItemProps> = ({ task, toggleTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
    </li>
  );
};

export default TaskListItem;