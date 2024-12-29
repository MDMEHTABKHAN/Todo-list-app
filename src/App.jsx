import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <Router>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
        <Routes>
          <Route
            path="/"
            element={<TaskList tasks={tasks} deleteTask={deleteTask} />}
          />
          <Route path="/add" element={<TaskForm addTask={addTask} />} />
          <Route
            path="/edit/:id"
            element={<TaskForm tasks={tasks} updateTask={updateTask} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
