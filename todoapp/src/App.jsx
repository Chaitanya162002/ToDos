import { useEffect, useState } from "react";

import "./App.css";
import TodoItem from "./Component/TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
});

  const [newTodo, setNewTodo] = useState("");

  useEffect(()=>{
    const storedTodos = localStorage.getItem('todos')
    if(storedTodos){
      setTodos(JSON.parse(storedTodos))
    }
    
  },[])
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">TODO App</h1>
        <div className="mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter the Task"
            className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg 
            bg-gradient-to-r from-purple-50 to-pink-50 
            focus:outline-none focus:border-purple-500 
            focus:ring-2 focus:ring-purple-200 
            transition-all duration-200
            placeholder-gray-500
            text-gray-800"
          />
          <button 
            onClick={addTodo}
            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md"
          >
            Add Todo
          </button>
        </div>
        <div className="space-y-4">
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              OnToggle={() => toggletodostatus(todo.id)} 
              deletetodo={() => deletetodo(todo.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
