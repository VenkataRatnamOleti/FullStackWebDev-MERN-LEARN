import { useState } from "react";
import TodoItem from "./TodoItem";
import { v1 as uuid } from "uuid";

export default function TodoList() {
  let [todo, setTodo] = new useState([
    { id: uuid(), value: "Initial Task", isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuid(), value: newTodo, isDone: false }];
    });
    setNewTodo("");
  }

  let onChangeInput = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodo((prevTodo) => todo.filter((prevTodo) => prevTodo.id != id));
  };

  let upperCaseAll = () => {
    setTodo((prevTodo) =>
      prevTodo.map((task) => {
        return {
          ...task,
          value: task.value.toUpperCase(),
        };
      }),
    );
  };

  let upperCaseOne = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            value: task.value.toUpperCase(),
          };
        } else {
          return task;
        }
      }),
    );
  };

  let toMarkAsDone = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: true,
          };
        } else {
          return task;
        }
      }),
    );
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
        &nbsp;
        <button onClick={addTodo}>Add</button>
        <br />
        <br />
        <h2>Tasks Todo</h2>
        <ul>
          {todo.map((task) => (
            <TodoItem
              data={task.value}
              key={task.id}
              onClickHandler={() => deleteTodo(task.id)}
              toUpperCase={() => upperCaseOne(task.id)}
              toMarked={() => toMarkAsDone(task.id)}
              isDone={task.isDone}
            />
          ))}
        </ul>
        <br />
        <button onClick={upperCaseAll}>To UpperCase All</button>
      </div>
    </div>
  );
}
