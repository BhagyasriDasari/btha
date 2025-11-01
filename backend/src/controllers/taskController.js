import tasks from "../config/db.js";

// Get all tasks
export const getTasks = (req, res) => {
  res.json(tasks);
};

// Add a new task
export const addTask = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    description: description || "",
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Toggle task completion
export const toggleTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.completed = !task.completed;
  res.json(task);
};

// Delete a task
export const deleteTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === Number(id));

  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const removed = tasks.splice(index, 1);
  res.json(removed[0]);
};
