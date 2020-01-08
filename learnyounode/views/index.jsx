import React from "react";
import PropTypes from "prop-types";

// From this excercise on, we'll use React not only on the server side but also on the front-end.
// In fact, we'll use the very same view files for rendering both the server-side initial response, and on the front-end for any DOM manipulation necessary. Sharing the code between the front end and the server is a concept known as Isomorphic JavaScript.

export default class TodoBox extends React.Component {
    render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
    render() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
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
        border: "1px solid black"
    }
};
