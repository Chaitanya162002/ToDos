import React from "react";

const TodoItem = ({ todo, OnToggle, deletetodo }) => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={OnToggle}
          className="w-5 h-5 text-purple-600 rounded-full border-2 border-purple-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer"
        />
        <span className={`text-lg ${
          todo.completed 
            ? 'line-through text-gray-400 italic' 
            : 'text-gray-700'
        }`}>
          {todo.text}
        </span>
      </div>
      <button 
        onClick={deletetodo}
        className="px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full hover:from-rose-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 text-sm font-medium shadow-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
