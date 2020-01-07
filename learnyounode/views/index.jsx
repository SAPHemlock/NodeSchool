import React from "react";
import PropTypes from "prop-types";

// Let's define mutable values!
// So far we've rendered components with immutable properties using this.props.
// But what if we want to update components?
// this.state is private to each component and allows us to define mutable
// values. Let's set the initial value of checkbox to false and define
// a function to control the behavior of check events.

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        <table style={{ border: "2px solid black;" }}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
            <Todo title="Learn React">15:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    return (
      <tr>
        <td style={{ border: style.tableContent.border }}>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange.bind(this)}
          />
        </td>
        <td style={{ border: style.tableContent.border }}>{this.props.title}</td>
        <td style={{ border: style.tableContent.border }}>{this.props.children}</td>
      </tr>
    );
  }

  handleChange(e) {
    this.setState({ checked: e.target.checked });
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  render() {
    return <div className="todoForm">I am a TodoForm.</div>;
  }
}

let style = {
    tableContent: {
        border: "1px solid black;"
    }
};
