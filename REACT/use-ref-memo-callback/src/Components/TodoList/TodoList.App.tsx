import React, { useState, useCallback } from "react";
import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Aprender React", completed: false },
    { id: 2, text: "Estudiar useCallback", completed: false },
    { id: 3, text: "Hacer ejercicio", completed: false },
    { id: 4, text: "Subir ejercicio", completed: false },
  ]);

  //Sin useCallback:
  // const toggleTodo = (id: number) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div>
      <p>
        Creamos un componente de Tarea con Toggle de competado: verdadero/falso
        <br />
        Creamos otro componente que con una lista de tareas cree varios
        componentes de Tarea <br />
        Creamos funcion para onToggle que recorra la lista e invierta el valor
        de la tarea con el mismo id <br />
        Si la funcion no modifica al componente, evitamos nuevo render con
        useCallback
      </p>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
