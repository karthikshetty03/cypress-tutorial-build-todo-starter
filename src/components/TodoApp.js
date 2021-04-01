import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      currentTodo : ''
    }

    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
  }

  handleNewTodoChange(event) {
    this.setState({currentTodo : event.target.value});
  }


  render () {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm />
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
    )
  }
}
