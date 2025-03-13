import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list-container">
      <h3 className="task-list-title">Task List</h3>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <li key={task._id} className="task-card">
              <div className="task-header">
                <h4 className="task-title">{task.title}</h4>
                <span className="task-deadline">
                  Deadline: {new Date(task.deadline).toLocaleDateString()}
                </span>
              </div>
              <p className="task-description">{task.description}</p>
              {task.assignedTo && (
                <div className="task-assigned">
                  <strong>Assigned to:</strong> {task.assignedTo.name}
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
