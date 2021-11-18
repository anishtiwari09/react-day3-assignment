import { useState } from "react";
import TodoInput from "./todoInput";
import Header from "./header";
import TodoItem from "./todoItem";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const handleTaskCreate = ({ title, description }) => {
    const payload = {
      title: title,
      status: false,
      description: description,
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

      <TodoInput onCreatTask={handleTaskCreate} />
      <TodoItem
        data={todos}
        handleDelete={handleDelete}
        handleTogle={handleTogle}
      />
    </>
  );
}
