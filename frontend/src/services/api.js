import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3007/api" });

export const register = (userData) => API.post("/auth/register", userData);
export const login = (userData) => API.post("/auth/login", userData);
export const getTasks = (token) => API.get("/tasks", { headers: { Authorization: `Bearer ${token}` } });
export const createTask = (taskData, token) => API.post("/tasks", taskData, { headers: { Authorization: `Bearer ${token}` } });
export const updateTask = (id, taskData, token) => API.put(`/tasks/${id}`, taskData, { headers: { Authorization: `Bearer ${token}` } });
export const deleteTask = (id, token) => API.delete(`/tasks/${id}`, { headers: { Authorization: `Bearer ${token}` } });
