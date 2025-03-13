import React, { useState, useEffect } from "react";
import { createTask } from "../services/api";
import axios from "axios";

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:3008/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, description, deadline, assignedTo: userId }, token);
    onTaskCreated();
    setTitle("");
    setDescription("");
    setDeadline("");
    setUserId("");
  };

  return (
    <div className="task-form-container">
      <h3 className="task-form-title">Create Task</h3>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-input"
          required
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="task-input"
          required
        />
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="task-input"
          required
        >
          <option value="">Assign to User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <button className="task-submit-btn">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
