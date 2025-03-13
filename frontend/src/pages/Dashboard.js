import React, { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskList from "../components/TaskList";
import "./Dashboard.css"; 

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getTasks(token).then((res) => setTasks(res.data));
  }, [token]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="task-list">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
