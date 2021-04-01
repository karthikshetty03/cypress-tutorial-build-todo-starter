import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { saveTodo, loadTodos } from "../lib/service";
import Footer from "./Footer";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      currentTodo: "",
    };

    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  componentDidMount() {
    loadTodos().then(({ data }) => this.setState({ todos: data }));
  }

  handleNewTodoChange(event) {
    this.setState({ currentTodo: event.target.value });
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
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm
              handleNewTodoChange={this.handleNewTodoChange}
              handleTodoSubmit={this.handleTodoSubmit}
              currentTodo={this.currentTodo}
            />
          </header>
          <section className="main">
            <TodoList 
              handleNewTodoChange = {this.handleNewTodoChange}
              currentTodo={this.currentTodo} 
              todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}
