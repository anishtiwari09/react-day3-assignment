import { useState } from "react";
import TodoInput from "./todoInput";
import Header from "./header";
import TodoItem from "./todoItem";
export default function Todo() {
  const [todos, setTodos] = useState([
    {
      title: "default",
      status: false,
      id: 1
    }
  ]);
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length + 1
    };
    setTodos([...todos, payload]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handleTogle = (id) => {
    const updateTodos = todos.map((item) =>
      item.id == id ? { ...item, status: !item.status } : item
    );
    setTodos(updateTodos);
  };
  return (
    <>
      <Header title="TODO" />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          status={todo.status}
          handleDelete={() => handleDelete(todo.id)}
          handleToggle={() => handleTogle(todo.id)}
        />
      ))}

      <TodoInput onCreatTask={handleTaskCreate} />
    </>
  );
}
