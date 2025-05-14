import React from "react";

const TodoItem = ({ todo, OnToggle, deletetodo }) => {
  return (
    <div>
      <ul>
        {
          <li>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={OnToggle}
              />
              {todo.text}
            </div>

            <button onClick={deletetodo}>delete</button>
          </li>
        }
      </ul>
    </div>
  );
};

export default TodoItem;
