import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  // Efecto para gestionar cambios en la lista de tareas
  useEffect(() => {
    // Aquí puedes realizar acciones cuando la lista de tareas cambie
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const markTaskAsComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        markTaskAsComplete={markTaskAsComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;