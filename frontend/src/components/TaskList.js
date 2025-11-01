import React from "react";

class TaskList extends React.Component {
  render() {
    const { tasks, onToggle, onDelete } = this.props;

    const listItems = tasks.map((task) =>
      React.createElement(
        "li",
        {
          key: task.id,
          style: {
            textDecoration: task.completed ? "line-through" : "none",
            marginBottom: "8px",
          },
        },
        `${task.title} - ${task.description || ""} `,
        React.createElement(
          "button",
          { onClick: () => onToggle(task.id), style: { marginRight: "6px" } },
          task.completed ? "Undo" : "Complete"
        ),
        React.createElement(
          "button",
          { onClick: () => onDelete(task.id) },
          "Delete"
        )
      )
    );

    return React.createElement(
      "div",
      null,
      React.createElement("h2", null, "Your Tasks"),
      React.createElement("ul", null, listItems)
    );
  }
}

export default TaskList;
