import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask, tasks = [], updateTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: "",
    category: "",
    completed: false,
    reminder: "",
  });

  useEffect(() => {
    if (id) {
      const existingTask = tasks.find((task) => task.id === id);
      if (existingTask) setTaskData(existingTask);
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTask({ ...taskData, id });
    } else {
      addTask({ ...taskData, id: uuidv4() });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={taskData.category}
          onChange={(e) =>
            setTaskData({ ...taskData, category: e.target.value })
          }
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Reminder</label>
        <input
          type="datetime-local"
          className="w-full px-3 py-2 border rounded"
          value={taskData.reminder}
          onChange={(e) =>
            setTaskData({ ...taskData, reminder: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={taskData.completed}
            onChange={(e) =>
              setTaskData({ ...taskData, completed: e.target.checked })
            }
          />
          Mark as Completed
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded w-full"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
