import React from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface CompletedTaskProps {
    tasks: Task[];
  }
  
  const CompletedTask: React.FC<CompletedTaskProps> = ({ tasks }) => {
    return (
      <ul className='task-list-container'>
        {tasks.map(task => (
          task.completed ? <li key={task.id}>{task.text}</li> : null
        ))}
      </ul>
    );
  };
  
  export default CompletedTask;
  