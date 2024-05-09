import React, { useState } from 'react';
import TaskListItem from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css'
import CompletedTask from './components/CompletedTask';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);

  const toggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (text: string) => {
    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now(), text, completed: false }
    ]);
  };

  return (
    <div className='app-container'>
      <div className='app--task-card'>
        <h1>Task Add App</h1>
        <AddTaskForm addTask={addTask} />
        <TaskListItem tasks={tasks} toggleTask={toggleTask} />
      </div>
      <div className='app--task-card'>
        <h1>Completed Task lists</h1>
        <CompletedTask tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
