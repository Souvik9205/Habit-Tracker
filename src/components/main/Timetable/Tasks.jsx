// Tasks.jsx
import React, { useState } from 'react';

const Task = ({ task, onTaskToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'grey' : 'black' }}>
        {task.name} - {task.time}
      </span>
    </div>
  );
};

const Tasks = () => {
  const [tasks, setTasks] = useState([
    // Sample tasks for demonstration
    { id: 1, name: 'Task 1', time: '10:00 AM', completed: false, date: new Date() },
    { id: 2, name: 'Task 2', time: '1:00 PM', completed: false, date: new Date() },
    // Add more tasks as needed
  ]);

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const nextNextDay = new Date(today);
  nextNextDay.setDate(today.getDate() + 2);

  const todayTasks = tasks.filter(task => new Date(task.date).toDateString() === today.toDateString());
  const nextDayTasks = tasks.filter(task => new Date(task.date).toDateString() === nextDay.toDateString());
  const nextNextDayTasks = tasks.filter(task => new Date(task.date).toDateString() === nextNextDay.toDateString());

  return (
    <div className="container">
      <div className="header">
        <h1>Tasks</h1>
        <div className="sub-header">
          <h2>{today.toDateString()}</h2>
          {todayTasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onTaskToggle={toggleTask}
            />
          ))}
        </div>
        <div className="sub-header">
          <h2>{nextDay.toDateString()}</h2>
          {nextDayTasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onTaskToggle={toggleTask}
            />
          ))}
        </div>
        <div className="sub-header">
          <h2>{nextNextDay.toDateString()}</h2>
          {nextNextDayTasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onTaskToggle={toggleTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
