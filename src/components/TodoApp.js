import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { saveTodo, loadTodos, removeTodo } from "../lib/service";
import Footer from "./Footer";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      currentTodo: "",
      error: false,
    };

    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    loadTodos()
      .then(({ data }) => this.setState({ todos: data }))
      .catch(() => this.setState({ error: true }));
  }

  handleNewTodoChange(event) {
    this.setState({ currentTodo: event.target.value });
  }

  handleDelete(id) {
    removeTodo(id)
      .then(() =>
        this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) })
      )
  }

  handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = { name: this.state.currentTodo, isComplete: false };
    saveTodo(newTodo).then(({ data }) => {
      this.setState({
        todos: [...this.state.todos, data],
      });
    });
  }

  render() {
    const remaining = this.state.todos.filter((todo) => !todo.isComplete)
      .length;
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            {this.state.error ? <h1 class="error">Oh No !</h1> : null}
            <TodoForm
              handleNewTodoChange={this.handleNewTodoChange}
              handleTodoSubmit={this.handleTodoSubmit}
              currentTodo={this.currentTodo}
            />
          </header>
          <section className="main">
            <TodoList
              handleDelete={this.handleDelete}
              handleNewTodoChange={this.handleNewTodoChange}
              todos={this.state.todos}
            />
          </section>
          <Footer remaining={remaining} />
        </div>
      </Router>
    );
  }
}
