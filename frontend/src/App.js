import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import InsightsPanel from "./components/InsightsPanel";

class App extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => this.setState({ tasks: data }))
      .catch((err) => console.error("Error fetching tasks:", err));
  };

  addTask = (task) => {
    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then(() => this.fetchTasks());
  };

  toggleTask = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, { method: "PUT" })
      .then(() => this.fetchTasks());
  };

  deleteTask = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, { method: "DELETE" })
      .then(() => this.fetchTasks());
  };

  render() {
    return React.createElement(
      "div",
      { className: "app-container" },
      React.createElement("h1", null, "Task Tracker ✅"),
      React.createElement(TaskForm, { onAddTask: this.addTask }),
      React.createElement(TaskList, {
        tasks: this.state.tasks,
        onToggle: this.toggleTask,
        onDelete: this.deleteTask,
      }),
      React.createElement(InsightsPanel, { tasks: this.state.tasks })
    );
  }
}

export default App;
