import React from "react";

const TodoItem = (props) => (
  <li className={props.isComplete ? "completed" : null}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={props.isComplete}
        onChange={() => props.handleTodoUpdate(props.id)}
      />
      <label>{props.name}</label>
      <button
        className="destroy"
        onClick={() => props.handleDelete(props.id)}
      />
    </div>
  </li>
);

export default (props) => (
  <div>
    <ul className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem
          handleTodoUpdate={props.handleTodoUpdate}
          handleDelete={props.handleDelete}
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  </div>
);
