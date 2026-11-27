import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  let [todo, setTodo] = new useState([]);
  let [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodo((prevTodo) => {
      return [...todo, newTodo];
    });
    setNewTodo("");
  }

  let onChangeInput = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodo}
          placeholder="add a task"
          onChange={onChangeInput}
        />
        <button onClick={addTodo}>Add</button>
        <br />
        <br />
        <h2>Tasks Todo</h2>
        <ul>
          {todo.map((task) => (
            <TodoItem Item={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}
