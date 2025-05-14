import { useState } from "react";

import "./App.css";
import TodoItem from "./Component/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");

    console.log(todos);
  };

  const toggletodostatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deletetodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  }

  return (
    <>
      <h1>TODO App</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter the Task"
        />
        <br />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} OnToggle={()=>toggletodostatus(todo.id)} deletetodo={()=>deletetodo(todo.id)} />
        ))}
      </div>
    </>
  );
}

export default App;
