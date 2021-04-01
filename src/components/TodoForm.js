import React from "react";

export default (props) => (
  <form
    onSubmit={(event) => {
      console.log(props);
      props.handleTodoSubmit(event);
    }}
  >
    <input
      type="text"
      className="new-todo"
      autoFocus
      value={props.currentTodo}
      onChange={(event) => props.handleNewTodoChange(event)}
      placeholder="What needs to be done?"
    />
      value = {props.currentTodo}
      onChange = {props.handleNewTodoChange}
      placeholder="What needs to be done?"/>
  </form>
);
