import React from "react";
import { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function
  async function deleteTodo(id) {
    try {
      const res = await fetch(`http://192.168.1.33:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (error) {
      console.error(error.message);
    }
  }
//get todos function
  async function getTodos() {
    const res = await fetch("http://192.168.1.33:5000/todos");
    const todoArray = await res.json();
    console.log(todoArray);
    setTodos(todoArray);
  }
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
