const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json({ message: 'Task created successfully' });
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate('assignedTo');
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Task updated successfully' });
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted successfully' });
};
