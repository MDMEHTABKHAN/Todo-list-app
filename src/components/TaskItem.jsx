import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task, deleteTask }) => (
  <li className="p-4 border rounded mb-2">
    <h3 className="text-lg font-bold">{task.title}</h3>
    <p>Category: {task.category}</p>
    <p>Completed: {task.completed ? "Yes" : "No"}</p>
    <p>Reminder: {task.reminder || "None"}</p>
    <div className="flex space-x-2 mt-2">
      <Link
        to={`/edit/${task.id}`}
        className="text-blue-500 underline"
      >
        Edit
      </Link>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 underline"
      >
        Delete
      </button>
    </div>
  </li>
);

export default TaskItem;
