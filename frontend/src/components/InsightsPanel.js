import React from "react";

class InsightsPanel extends React.Component {
  render() {
    const total = this.props.tasks.length;
    const completed = this.props.tasks.filter((t) => t.completed).length;

    return React.createElement(
      "div",
      { style: { marginTop: "20px", background: "#f5f5f5", padding: "10px" } },
      React.createElement("h3", null, "Insights"),
      React.createElement("p", null, `Total Tasks: ${total}`),
      React.createElement("p", null, `Completed: ${completed}`),
      React.createElement("p", null, `Pending: ${total - completed}`)
    );
  }
}

export default InsightsPanel;
