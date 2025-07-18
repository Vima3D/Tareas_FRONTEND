import React from "react";
import type { Todo } from "./TodoList.App";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  console.log("Renderizando:", todo.text);

  return (
    <div>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onToggle(todo.id)}>
        {todo.completed ? "Deshacer" : "Completar"}
      </button>
    </div>
  );
};

// React.memo evita render innecesario si las props no cambian
export default React.memo(TodoItem);
