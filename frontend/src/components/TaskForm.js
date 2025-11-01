import React from "react";

class TaskForm extends React.Component {
  constructor() {
    super();
    this.state = { title: "", description: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim() === "") return;
    this.props.onAddTask({
      title: this.state.title,
      description: this.state.description,
    });
    this.setState({ title: "", description: "" });
  };

  render() {
    return React.createElement(
      "form",
      { onSubmit: this.handleSubmit, style: { marginBottom: "20px" } },
      React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Task title",
        value: this.state.title,
        onChange: this.handleChange,
        style: { marginRight: "10px", padding: "5px" },
      }),
      React.createElement("input", {
        type: "text",
        name: "description",
        placeholder: "Description (optional)",
        value: this.state.description,
        onChange: this.handleChange,
        style: { marginRight: "10px", padding: "5px" },
      }),
      React.createElement(
        "button",
        { type: "submit", style: { padding: "6px 10px", cursor: "pointer" } },
        "Add Task"
      )
    );
  }
}

export default TaskForm;
