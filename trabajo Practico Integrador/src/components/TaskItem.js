// TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, markTaskAsComplete, deleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    markTaskAsComplete(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;