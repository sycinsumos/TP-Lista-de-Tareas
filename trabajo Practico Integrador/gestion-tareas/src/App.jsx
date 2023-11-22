import React, { useState, useEffect } from 'react';

// Componente de Lista de Tareas
const TaskList = ({ tasks, handleCompleteTask, handleDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

// Componente de Tarea
const TaskItem = ({ task, handleCompleteTask, handleDeleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    handleCompleteTask(task.id);
  };

  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <span>{task.name}</span>
      <button onClick={handleComplete}>Completar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

// Componente de Formulario
const TaskForm = ({ handleAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

// Componente Principal
const App = () => {
  const [tasks, setTasks] = useState([]);

  // Efecto de Actualización
  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const handleAddTask = (name) => {
    const newTask = {
      id: Date.now(),
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;