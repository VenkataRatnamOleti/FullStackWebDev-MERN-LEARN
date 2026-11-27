import { useState } from "react";
import TodoItem from "./TodoItem";
import { v1 as uuid } from "uuid";

export default function TodoList() {
  let [todo, setTodo] = new useState([{id:uuid(), value:"Sample Task"}]);
  let [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuid(), value: newTodo}];
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
            <TodoItem data={task.value} key={task.id}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
