import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
      <div className="text-center mt-4">
        <Link to="/add" className="text-blue-600 underline">
          Add New Task
        </Link>
      </div>
    </div>
  );
};

export default TaskList;
